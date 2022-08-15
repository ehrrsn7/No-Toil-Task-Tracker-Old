/**********
 * App.js
 **********/
// React Application
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Single-Page App Pages
import * as pages from "./pages"

// Single-Page App Page Components
import Sidebar from "./components/pageComponents/sidebar"
import Header  from "./components/pageComponents/header"

// Other Components
import { invalidRow } from "./components/tables/InvalidRow"

// Other (stylesheets/scripts)
import "./App.css"
import { useContext } from "./contexts/contextProvider"

/**********
 * Define
 **********/
// BrowserRouter basename
export const djangoappName = ((parseInt(window.location.port) === 3000) ? 
   "" :        // development
   "djangoapp" // hosted on server
)

// Document Title Suffix
export const documentTitleSuffix = " | No Toil Task Tracker"

// Django Rest Framework URI Endpoints
export const todo_api_url =
   `http://${window.location.hostname}:8000/api/todo/`

export const filter_bible_api_url =
   `http://${window.location.hostname}:8000/api/filter-bible/`

// Django Channels URI Endpoint/Connection
const websocket_uri = `ws://${window.location.host}/ws/api/`
const websocket = new WebSocket(websocket_uri)

async function updateTodoRow(data, context) {
   const { todoModel, setTodoModel, addedTasks, setAddedTasks } = context
   const rowIndex = todoModel.findIndex(object => object.id === data.id)

   if (rowIndex !== -1) { // row exists (model event was update, not create)
      let newTodoModel = JSON.parse(JSON.stringify(todoModel)) // deep clone

      newTodoModel[rowIndex].quantity = data.quantity
      newTodoModel[rowIndex].status = data.status
      newTodoModel[rowIndex].lastModified = data.lastModified

      console.log("row update success")

      setTodoModel(newTodoModel)

      // provide some animation to indicate update

      const el = document.querySelector(`[id*="Row${data.id}"]`)
      if (el) el.className = "highlightBlue"
      else console.error(`[id*="Row${data.id}"]`, "not found")
   }

   else {
      // simply append this new entry to the list and let it be added
      setTodoModel([...todoModel, data])
      setAddedTasks([...addedTasks, data.id]) // add animation to queue
   }
}

async function removeTodoRow(data, context) {
   const { todoModel, setTodoModel } = context
   
   if (todoModel.findIndex(object => object.id === data.id) === -1) {
      console.error("item to delete not found! data:", data)
      return
   }

   // provide some animation to indicate removal
   console.log("removing row", data)
   const el = document.querySelector(`[id*="Row${data.id}"]`)
   el.className = "highlightRed"
   setTimeout(() => {
      setTodoModel(todoModel.filter(rowData => rowData.id !== data.id))
   }, 1000)
}

/********************
 * Application
 ********************/
export default function App() {
   const context = useContext()
   const { addedTasks, setAddedTasks } = context

   // initializer
   const initialized = React.useRef(false)
   React.useEffect(() => {
      if (!initialized.current) {
         initialized.current = true
            
         // get data from tasklist api endpoint
         fetch(todo_api_url)
         .then(response => response.json())
         .then(response => { context.setTodoModel(response) })
         .then(() => { console.log(
            "Successfully fetched data from", 
            todo_api_url
         )}).catch(error => {
            console.log(error)
            context.setTodoModel([
               invalidRow
            ])
         })

         // dimension events
         const resize = () => { context.setScreenSize(window.innerWidth) }
         window.addEventListener("resize", resize) // runtime
         context.setScreenSize(window.innerWidth) // on construct

         // key down events
         const onEscape = (event) => {
            if (event.code === "Escape" || event.isComposing) {
               console.log("esc key pressed")
               context.setActiveSidebar(false)
            }
         }; document.addEventListener("keydown", onEscape)

         // media query events
         const handleDarkMode = event => { 
            context.setDarkMode(event.matches) 
         }
         window.matchMedia(
            "(prefers-color-scheme: dark)"
         ).addEventListener("change", handleDarkMode)

      }
   }, [ context ])

   // on addedTasks change
   React.useEffect(() => {
      if (!addedTasks) setAddedTasks([])
      else {
         const newTasks = addedTasks.splice(0, addedTasks.length)
         newTasks.forEach(newTask => {
            const el = document.querySelector(`[id*="Row${newTask}"]`)
            if (el) el.className = "highlightGreen"
         })
      }

   }, [ addedTasks, setAddedTasks ])
   
   // websocket (to get live updates from model)
   websocket.onopen = (event) => {
      console.log("Connection established:", event)
      context.setWsConnected(true)
   }

   websocket.onmessage = event => {
      if (context === undefined || context.todoModel === undefined) return
      const data = JSON.parse(event.data)
      switch (data.type) {
         case "update/create":
            updateTodoRow(data.rowData, context)
            break
         case "delete":
            removeTodoRow(data.rowData, context)
            break
         default:
            console.warn("unknown ws message type:", data.type)
      }
   }
   
   websocket.onclose = (closeEvent) => {
      console.log("Websocket close:", closeEvent)
      context.setWsConnected(false)
   }

   websocket.onerror = (errorMessage) => {
      console.warn("Websocket warning:", errorMessage)
   }
   
   // render (return jsx html object)
   return <div id="App">
      <BrowserRouter basename={djangoappName}>
         <Sidebar />
   
         <div id="nonSidebar" 
         className={context.activeSidebar ? "activeSidebar" : ""} 
         onClick={() => {
            const { activeSidebar, setActiveSidebar } = context
            
            // click outside #sidebar to hide it
            if (activeSidebar) setActiveSidebar(false)
         }}>
   
            <Header />
      
            {/* Content Div */}
            <div id="content">
               
               <Routes>
                  {/* Default */}
                  <Route element={<pages.Dashboard />} path="/" />
                  <Route element={<pages.Dashboard />} path="/Dashboard" />
                  {/* Subpages */}
                  <Route element={<pages.Stamp />} path="/Stamp" />
                  <Route element={<pages.Spray />} path="/Spray" />
                  <Route element={<pages.Check />} path="/Check" />
                  <Route element={<pages.Oil />}   path="/Oil"   />
                  <Route element={<pages.Bag />}   path="/Bag"   />
                  <Route path="/CompletedParts" 
                  element={<pages.CompletedParts />} />
                  <Route path="/DiscardedParts" 
                  element={<pages.DiscardedParts />} />
               </Routes>
            </div> {/* End Content Div */}
         </div> {/* End Non-Sidebar Div */}
      </BrowserRouter>
   </div> /* End Application Div */
}
