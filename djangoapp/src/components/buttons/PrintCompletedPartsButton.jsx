import React                     from "react"
import { Tooltip }               from "@mui/material"
import { deleteAllComplete }     from "../forms/crud"
import { useContext }            from "../../contexts/contextProvider"
import { isMobile, isDarkMode }  from "../../data/helperFunctions"

const printButtonTooltipMsg = 
   "Open 'Print'/'Save as PDF' screen." + 
   ' ' +
   "This button will then be replaced with the 'Delete all Completed Parts' button." + 
   ' ' +
   "Remember to press that button to prevent duplicate parts submissions!"

const removeButtonTooltipMsg = 
   "Confirm remove all parts marked as 'complete' in the database."

export default function PrintCompletedPartsButton(props) {
   const { activeSidebar, todoModel } = useContext()
   const [ showRemoveButton, setShowRemoveButton ] = React.useState(false)

   return <> {!showRemoveButton ? 

   <Tooltip title={printButtonTooltipMsg} placement="top">
      <button 
      id="PrintCompletedPartsButton" 
      style={props.style} 
      onClick={() => {
         if (isMobile() && activeSidebar) return // disable
         window.print()
         setShowRemoveButton(true)
      }}> <p>Print Completed Parts</p>
      </button>
   </Tooltip>

   :
   
   <Tooltip title={removeButtonTooltipMsg} placement="top">
      <button 
      id="PrintCompletedPartsButton" 
      style={{...props.style, 
         transition: "1s", 
         background: !isDarkMode(window) ? "pink" : "darkred",
         border: !isDarkMode(window) ? "red" : "darkred",
      }} 
      onClick={() => {
         deleteAllComplete(todoModel)
         window.location.reload()
      }}> <p>Remove All Completed Parts</p>
      </button>
   </Tooltip>

   }</>
}