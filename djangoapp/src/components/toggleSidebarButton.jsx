import React from "react"
import Hamburger from 'hamburger-react'
import { Tooltip } from "@mui/material"
import { useContext } from "../contexts/contextProvider"

export default function ToggleSidebarButton() {
   const { activeSidebar, setActiveSidebar } = useContext()

   React.useEffect(() => {
      console.log("<ToggleSidebarButton />")
   })

   return <div>
      {/* Collapse/Show Sidebar Hamburger Button */}
      <Tooltip title="Toggle Sidebar">

         <button id="toggleSidebarButton" 
         className={activeSidebar ? "" : "activeSidebar"} >

            <Hamburger toggled={activeSidebar} toggle={setActiveSidebar} />
         </button>
      </Tooltip>
   </div>
}