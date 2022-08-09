import React            from "react"
import { Tooltip }      from "@mui/material"
import { statusNames }  from "../../data/helperFunctions"

export default function NextPageButton() {
   return <button onClick={() => {
      window.location.pathname = statusNames.nextUrl(window)
   }}
   style={{
      height: "fit-content",
      padding: ".5em",
      margin: ".5em 0 .5em 0",
   }}>
      <Tooltip title="" placement="left">
         <a href={statusNames.nextUrl(window)}>
            Go to {statusNames.nextUrl(window)} {" "} →
         </a>
      </Tooltip>
   </button>
}