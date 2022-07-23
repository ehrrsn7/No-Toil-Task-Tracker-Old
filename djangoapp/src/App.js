import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SettingsIcon from "@mui/icons-material/Settings"
import { Tooltip } from "@mui/material"
import { DarkModeSwitch } from "react-toggle-dark-mode"

import { useContext } from "./contexts/contextProvider"

import Example       from "./pages/example"
import Dashboard     from "./pages/dashboard"
import Bag           from "./pages/bag"
import Stamp         from "./pages/stamp"
import Oil           from "./pages/oil"
import Spray         from "./pages/spray"
import Check         from "./pages/check"
import SamplePhotos  from "./pages/sample-photos"

import Sidebar from "./components/sidebar"
import Header  from "./components/header"
import Footer  from "./components/footer"
import "./App.css"
import CompletedParts from "./pages/completed-parts"

// BrowserRouter basename
let djangoappName = "djangoapp" 

// in development: when running npm start, Router will look for '/' for 
// sources rather than django's 'djangoapp' static url description
djangoappName = (parseInt(window.location.port) === 3000) ? "/" : djangoappName

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

      const websocket_url = `ws://${window.location.host}/ws/api/`
      context.setWebsocket(new WebSocket(websocket_url))
      
      context.websocket.onmessage = (event) => {
         let data = JSON.parse(event.data)
            console.log('Data:', data)
      }
      
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
                     {/* Default */}
                     <Route path={`/`}                element={<Dashboard />} />
                     <Route path={`/Dashboard`}       element={<Dashboard />} />
                     {/* Subpages */}
                     <Route path={`/Bag`}             element={<Bag />} />
                     <Route path={`/Oil`}             element={<Oil />} />
                     <Route path={`/Stamp`}           element={<Stamp />} />
                     <Route path={`/Spray`}           element={<Spray />} />
                     <Route path={`/Check`}           element={<Check />} />
                     <Route path={`/Completed-Parts`} element={<CompletedParts />} />
                     {/* 'example' */}
                     <Route path={`/example`}         element={<Example />} />
                     <Route path={`/sample-photos`}   element={<SamplePhotos />} />
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
