import React from "react"
import { Tooltip } from "@mui/material"

export default function PrintCompletedPartsButton(props) {
   const message = "This button will open a pdf that can be printed and used for reference when putting the filters in stock. Note: this will delete these entries from the database permanently."

   return <Tooltip title={message} placement="top">
      <button id="PrintCompletedPartsButton" style={props.style}>
         Print Completed Parts
      </button>
   </Tooltip> 
}