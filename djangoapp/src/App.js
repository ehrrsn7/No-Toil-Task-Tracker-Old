// React Application
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Single-Page App Pages
import {
   Example,
   Dashboard,
   Bag,
   Stamp,
   Oil,
   Spray,
   Check,
   CompletedParts,
} from "./pages"

// Single-Page App Page Components
import Sidebar from "./components/pageComponents/sidebar"
import Header  from "./components/pageComponents/header"

// Other (stylesheets/scripts)
import "./App.css"
import { onNonSidebarClick } from "./data/helperFunctions"
import { useContext } from "./contexts/contextProvider"

/**********
 * Define
 **********/
// BrowserRouter basename
export const djangoappName = ((parseInt(window.location.port) === 3000) ? 
   "/" :       // development
   "djangoapp" // hosted on server
)

// Django Rest Framework URI Endpoints
export const todo_api_url = `http://${window.location.hostname}:8000/api/todo/`
export const filter_bible_api_url = `http://${window.location.hostname}:8000/api/filter-bible/`

// Django Channels URI Endpoint/Connection
const websocket_uri = `ws://${window.location.host}/ws/api/`
const websocket = new WebSocket(websocket_uri)

// Application
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
         }
         
         websocket.onmessage = (message) => {
            console.log("Server message:", message);
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

      // update code goes here (none)
      
      // destructor (none)

   }, [ context ])

   // render (return jsx html object)
   return <div id="App">
      <BrowserRouter basename={djangoappName}>
         <Sidebar />
   
         <div id="nonSidebar" className={context.activeSidebar ? "activeSidebar" : ""} 
         onClick={() => onNonSidebarClick(context)} >
   
            <Header />
      
            {/* Content Div */}
            {/* <div id="content" style={darkMode ? styles.contentDark : styles.content}> */}
            <div id="content">
               
               <Routes>
                  {/* Default */}
                  <Route path={`/`}                element={<Dashboard />} />
                  <Route path={`/Dashboard`}       element={<Dashboard />} />
                  {/* Subpages */}
                  <Route path={`/Bag`}             element={<Bag />} />
                  <Route path={`/Oil`}             element={<Oil />} />
                  <Route path={`/Stamp`}           element={<Stamp />} />
                  <Route path={`/Spray`}           element={<Spray />} />
                  <Route path={`/Check`}           element={<Check />} />
                  <Route path={`/CompletedParts`}  element={<CompletedParts />} />
                  {/* 'example' */}
                  <Route path={`/example`}         element={<Example />} />
               </Routes>
            </div> {/* End Content Div */}
         </div> {/* End Non-Sidebar Div */}
      </BrowserRouter>
   </div> /* End Application Div */
}
