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

// BrowserRouter basename
let djangoappName = "djangoapp" 

// when running npm start, Router will look for '/' for sources rather
// than django's 'djangoapp' static url description
if (parseInt(window.location.port) == 3000)
   djangoappName = "/" 

switch (parseInt(window.location.port)) {
   case 3000:
      console.log("port 3000")
      break
      case 8000:
      console.log("port 8000")
      break
   default:
      console.log("unknown port", window.location.port)
      break
}

export default function App() {
   const context = useContext()
   
   // helper functions
   function isMobileWidth(mobileWidth = 600) {
      return window.innerWidth < mobileWidth
   }

   function onNonSidebarClick() {
      // don't close sidebar on click #nonSidebar
      if (!isMobileWidth()) return 
      // click outside #sidebar to hide it (mobile only)
      if (context.activeSidebar) 
         context.setActiveSidebar(false)
   }

   // set event listeners
   useEffect(() => {

      // dimension events
      function resize() { context.setScreenSize(window.innerWidth) }
      window.addEventListener("resize", resize) // runtime
      context.setScreenSize(window.innerWidth) // on construct

      function onEscape(event) {
         if (event.code === "Escape" || event.isComposing) 
            context.setActiveSidebar(false)
      } document.addEventListener("keydown", onEscape)
   
      // media query events
      function handleDarkMode(event) {
         context.setDarkMode(event.matches)
         console.log("dark mode", event.matches)
      } window.matchMedia(
         "(prefers-color-scheme: dark)"
      ).addEventListener("change", handleDarkMode)

      // destruct
      return () => {
         window.removeEventListener("resize", resize)
         window.matchMedia(
            "(prefers-color-scheme: dark)"
         ).removeEventListener("change", handleDarkMode)
         document.removeEventListener("keydown", onEscape)
      }
   }, [ context ])

   return (
      <div id="App">
         <BrowserRouter basename={djangoappName}>
            <Sidebar />
    
            <div id="nonSidebar" className={context.activeSidebar ? "activeSidebar" : ""} 
            onClick={onNonSidebarClick} >
    
               <Header />
       
               {/* Content Div */}
               {/* <div id="content" style={darkMode ? styles.contentDark : styles.content}> */}
               <div id="content">
                  <Routes>
                     <Route path={`/`} element={<Dashboard />} />
                     <Route path={`/dashboard`} element={<Dashboard />} />
                     <Route path={`/example`} element={<Example />} />
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
