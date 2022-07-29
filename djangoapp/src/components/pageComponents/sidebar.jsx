import React                     from "react"
import { NavLink, Link }         from "react-router-dom"
import Hamburger                 from "hamburger-react"
import { Tooltip, IconButton }   from "@mui/material"
import * as h                    from "../../data/helperFunctions"
import { useContext }            from "../../contexts/contextProvider"
import { todo_api_url }          from "../../App"

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
         {h.isMobile() ?
            <Hamburger toggle={setActiveSidebar} toggled={true} /> 
         : "" }

      </div>
   
      {/* Sidebar Page Links (Collection) */}
      {h.statusNames.getArray().map(
         (item, i) => (
            <div key={item} className="sidebarLink">

               <NavLink to={h.statusNames.getUrl(i)}>

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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
         <Tooltip title="really????? why dude..don't click this fr! this button is for editing/deleting tasks only">
            <a href={todo_api_url}>
            <button id="BradsNoNoSquare">
               brad's no - no button 📍
            </button>
            </a>
         </Tooltip>
      </div>
   </div> /* end sidebar div */
}