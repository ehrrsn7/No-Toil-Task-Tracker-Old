import React                     from "react"
import { NavLink, Link }         from "react-router-dom"
import Hamburger                 from "hamburger-react"
import { Tooltip, IconButton }   from "@mui/material"
import * as h                    from "../../data/helperFunctions"
import { useContext }            from "../../contexts/contextProvider"

const sidebarIconButtonStyle = {
   borderRadius: 10,
   backgroundColor: "inherit",
   fontSize: ".75em",
}

export default function Sidebar() {
   const { activeSidebar, setActiveSidebar } = useContext()

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

         {/* Close Icon */}
         {h.isMobileWidth() ? <Hamburger toggle={setActiveSidebar} toggled={true} /> : "" }

      </div>
   
      {/* Sidebar Page Links (Collection) */}
      {h.statusNames.getArray().map(
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