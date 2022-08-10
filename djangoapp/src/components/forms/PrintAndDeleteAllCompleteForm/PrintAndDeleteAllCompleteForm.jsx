import React                     from "react"
import { Tooltip }               from "@mui/material"
import { useContext }            from "../../../contexts/contextProvider"
import { isMobile, isDarkMode }  from "../../../data/helperFunctions"
import { deleteAllComplete }     from "./crud"

const removeButtonTooltipMsg = 
   `Confirm remove all parts marked as 'complete' from the task list.
      Note: This will permanently remove all of the items from the 
      Database!`

export default function PrintAndDeleteAllCompleteForm(props) {
   const { activeSidebar, todoModel } = useContext()
   const [ showRemoveButton, setShowRemoveButton ] = React.useState(false)

   return <form id="PrintCompletedPartsButton"> 
      {!showRemoveButton ? // condition

         /* Print Completed Parts Button */
         <Tooltip title="">

            <button 
            style={props.style} 
            onClick={event => {
               event.preventDefault()
               if (isMobile() && activeSidebar) return // disable
               window.print()
               setShowRemoveButton(true)
            }}> 

               <p>Print Completed Parts</p>

            </button>
         </Tooltip>

         : // else

         /* Remove Completed Tasks Button */
         <Tooltip title={removeButtonTooltipMsg} placement="top">

            <button 
            style={{...props.style, 
               transition: "1s", 
               background: !isDarkMode(window) ? "pink" : "darkred",
               border: !isDarkMode(window) ? "red" : "darkred",
            }} 
            onClick={() => {
               deleteAllComplete(todoModel)
               window.location.reload()
            }}> 
            
               <p>Remove All Completed Parts</p>

            </button>
         </Tooltip>
      }
   </form>
}