import React                     from "react"
import { Tooltip }               from "@mui/material"
import { useContext }            from "../../contexts/contextProvider"
import { DeleteAllCompleteForm } from "../forms"

const removeButtonTooltipMsg = "removeButtonTooltipMsg"

export default function PrintAndDeleteAllCompleteButton(props) {
   const { activeSidebar } = useContext()
   const [ showRemoveButton, setShowRemoveButton ] = React.useState(false)

   return <> 
      {!showRemoveButton ? // condition

         /* Print Completed Parts Button */
         <Tooltip title="">

            <button 
            style={props.style} 
            onClick={event => {
               event.preventDefault()
               if (activeSidebar) return // disable
               window.print()
               setShowRemoveButton(true)
            }}> 

               <p>Print Completed Parts</p>

            </button>
         </Tooltip>

         : // else

         /* Remove Completed Tasks Button */
         <Tooltip title={removeButtonTooltipMsg} placement="top">
            <div>
               <DeleteAllCompleteForm />
            </div>
         </Tooltip>
      }
   </>
}