import React from "react"
import { NavLink, Link } from "react-router-dom"
import { Tooltip, IconButton } from "@mui/material"
import { useContext } from "../contexts/contextProvider"

const sidebarIconButtonStyle = {
   borderRadius: 10,
   backgroundColor: "inherit",
   fontSize: ".75em",
}

export default function Sidebar() {
   const { activeSidebar } = useContext()

   return <div id="sidebar" className={activeSidebar ? "activeSidebar" : ""} >
      
      {/* Sidebar Title Div (Contiains Text and Close Icon) */}
      <div id="sidebarTitle">

         {/* Sidebar Title Text Link */}
         <Link to="/" id="sidebarTitleLinkText"
         className="dark:text-white text-slate-900">
            <h1 id="sidebarTitle">
               Dashboard
            </h1>
         </Link>

      </div>
   
      {/* Sidebar Page Links (Collection) */}
      {[ 
         "stamp",
         "spray",
         "check",
         "oil",
         "bag",
         "completed-parts",
      ].map(
         (item) => (
            <div key={item} className="sidebarLink">

               <NavLink to={`/${item}`}>

                  <Tooltip title="" arrow={true} placement="right">

                     <IconButton id="sidebarIconButton" 
                     aria-label={item} sx={sidebarIconButtonStyle}>

                        <p className="text-left uppercase tracking-widest dark:text-white text-slate-600">
                           {item.replace("-", " ")}
                        </p>

                     </IconButton>
                  </Tooltip>
               </NavLink>
            </div> /* End Sidebar Link Div */
         )
      )} {/* End Sidebar Page Links Collection */}
   </div> /* end sidebar div */
}