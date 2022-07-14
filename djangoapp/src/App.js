import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SettingsIcon from "@mui/icons-material/Settings"
import { Tooltip } from "@mui/material"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { useContext } from "./contexts/contextProvider"
import Example from "./pages/example"
import Dashboard from "./pages/dashboard"
import Sidebar from "./components/sidebar"
import Header from "./components/header"
import Footer from "./components/footer"
import "./App.css"

export default function App() {
   const context = useContext()

   // initialize context variables
   // setScreenSize(window.innerWidth)

   // set event listeners
   useEffect(() => {
      // dimension events
      function resize() { context.setScreenSize(window.innerWidth) }
      window.addEventListener("resize", resize) // runtime
      context.setScreenSize(window.innerWidth) // on construct

      // media query events
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener(
         "change", (event) => console.log(event)
      )

      // destruct
      return () => {
         window.removeEventListener("resize", resize)
         window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", () => {})
      }
   }, [context.setScreenSize])

   function isCssDarkMode(window) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
   }

   function setCssDarkMode(window, contextDarkMode) {
      console.log("set css dark mode", window, contextDarkMode)
   }

   function toggleDarkMode() {
      console.log("set dark mode, current context dark mode:", context.darkMode)
      context.setDarkMode(!isCssDarkMode(window))
      setCssDarkMode(window, context.darkMode)
   }

   document.addEventListener("keydown", (event) => {
      if (event.code === "Escape" || event.isComposing) 
         console.log("what")
   }) // runtime

   return (
      <div id="App">
         <BrowserRouter>
            <Sidebar />
    
            <div id="nonSidebar" className={context.activeSidebar ? "activeSidebar" : ""} >
    
               <Header />
       
               {/* Content Div */}
               {/* <div id="content" style={darkMode ? styles.contentDark : styles.content}> */}
               <div id="content">
                  <Routes>
                     <Route path="/" element={<Dashboard />} />
                     <Route path="/dashboard" element={<Dashboard />} />
                     <Route path="/example" element={<Example />} />
                  </Routes>

                  <Tooltip title="Open Settings Pane">
                     <button id="settingsButton" width={50}
                     onClick={() => {console.log("todo: open settings pane")}} >
                        <SettingsIcon />
                     </button>
                  </Tooltip>

                  <Tooltip title="Toggle Dark Mode">
                     <button id="darkModeButton">
                        <DarkModeSwitch checked={context.darkMode} onChange={context.setDarkMode} width={50} />
                     </button>
                  </Tooltip>
               </div> {/* End Content Div */}
       
               <Footer />
    
            </div> 
         </BrowserRouter>
      </div>
   )
}
