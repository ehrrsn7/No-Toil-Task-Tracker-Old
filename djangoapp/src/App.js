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

// Other (stylesheets/scripts)
import "./App.css"
import { useContext } from "./contexts/contextProvider"

/**********
 * Define
 **********/
// BrowserRouter basename
export const djangoappName = ((parseInt(window.location.port) === 3000) ? 
   "/" :       // development
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

/********************
 * Application
 ********************/
export default function App() {
   const context = useContext()

   // initializer
   const initialized = React.useRef(false)
   React.useEffect(() => {
      if (!initialized.current) {
         initialized.current = true

         // websocket (to get live updates from model)
         websocket.onopen = (event) => {
            console.log("Connection established:", event)
            websocket.send("message to websocket consumer from client")
         }
         
         websocket.onmessage = (messageEvent) => {
            console.log(messageEvent);
            console.log("Websocket message:", messageEvent.data);
         }
         
         websocket.onclose = (closeEvent) => {
            console.log("Websocket close:", closeEvent)
         }

         websocket.onerror = (errorMessage) => {
            console.warn("Websocket warning:", errorMessage)
         }
         

         // get data from tasklist api endpoint
         fetch(todo_api_url)
         .then(response => response.json())
         .then(response => { context.setTodoModel(response) })
         .catch(error => console.log(error))

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
         const handleDarkMode = event => { context.setDarkMode(event.matches) }
         window.matchMedia(
            "(prefers-color-scheme: dark)"
         ).addEventListener("change", handleDarkMode)
      }

      // set todoModel method
      function sortBy(which) {
         if (!Array.isArray(this)) return this
         let tmpModel = [...this]
         return tmpModel.sort((a, b) => a[which] - b[which])
      }
      const todoModelWhenSet = context.todoModel
      if (todoModelWhenSet !== undefined) {
         todoModelWhenSet.sortBy = sortBy
         context.setTodoModel(todoModelWhenSet)
      }
      
      // destructor (none)

   }, [ context ])

   // render (return jsx html object)
   return <div id="App">
      <BrowserRouter basename={djangoappName}>
         <Sidebar />
   
         <div id="nonSidebar" 
         className={context.activeSidebar ? "activeSidebar" : ""} 
         onClick={() => {
            const { activeSidebar, setActiveSidebar } = context
            
            // don't close sidebar on click #nonSidebar
            // if (!isMobile()) return 

            // click outside #sidebar to hide it (mobile only)
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
               </Routes>
            </div> {/* End Content Div */}
         </div> {/* End Non-Sidebar Div */}
      </BrowserRouter>
   </div> /* End Application Div */
}
