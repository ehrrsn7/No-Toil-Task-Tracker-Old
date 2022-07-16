import React from "react"
import Hamburger from 'hamburger-react'
import { Tooltip } from "@mui/material"
import { useContext } from "../contexts/contextProvider"

export default function ToggleSidebarButton() {
   const context = useContext()

   return <div>

      {/* Collapse/Show Sidebar Hamburger Button */}
      <Tooltip title="Toggle Sidebar">

         {/* Tooltip needs a button as a child to work */}
         <button id="toggleSidebarButton" 
         className={context.activeSidebar ? "" : "activeSidebar"} 
         onClick={() => {context.setActiveSidebar(!context.activeSidebar)}}>

            {/* Hamburger Icon */}
            {(window.innerWidth < 600) ? // is mobile width?
               <Hamburger toggled={false} /> : // yes
               <Hamburger toggled={context.activeSidebar}/> // no
            }
         </button>
      </Tooltip>
   </div>
}