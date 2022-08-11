import React                     from "react"
import { Tooltip }               from "@mui/material"
import { statusNames, isMobile } from "../../data/helperFunctions"
import { useContext }            from "../../contexts/contextProvider"
import { NavLink } from "react-router-dom"

export default function NextPageButton() {
   const { activeSidebar } = useContext()

   return <button style={{
      height: "fit-content",
      padding: ".5em",
      margin: ".5em 0 .5em 0",
   }}>
      <Tooltip title="" placement="left">
         <NavLink to={"/" + statusNames.nextUrl(window)} onClick={event => {
            activeSidebar && isMobile() && event.preventDefault()
         }}>
            Go to {statusNames.nextUrl(window)} {" "} →
         </NavLink>
      </Tooltip>
   </button>
}