import React                     from "react"
import { Tooltip }               from "@mui/material"
import { statusNames, isMobile } from "../../data/helperFunctions"
import { useContext }            from "../../contexts/contextProvider"

export default function NextPageButton() {
   const { activeSidebar } = useContext()

   return <button style={{
      height: "fit-content",
      padding: ".5em",
      margin: ".5em 0 .5em 0",
   }}>
      <Tooltip title="" placement="left">
         <a href={
            !(activeSidebar && isMobile()) && statusNames.nextUrl(window)
         }>
            Go to {statusNames.nextUrl(window)} {" "} →
         </a>
      </Tooltip>
   </button>
}