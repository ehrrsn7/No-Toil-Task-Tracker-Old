import React                  from "react"
import { useContext }         from "../../contexts/contextProvider"
import { isMobile } from "../../data/helperFunctions"
import { deleteAllComplete }  from "../forms/crud"

export default function PrintCompletedPartsButton(props) {
   const { activeSidebar } = useContext()
   const { todoModel } = useContext()

   React.useEffect(() => {
      // window event: after print
      window.onafterprint = () => {
         // print was successful, now let's print
         console.log("printed, now let's delete everything")
         deleteAllComplete(todoModel)
      }
   }, [])
   
   return <button 
   id="PrintCompletedPartsButton" 
   style={props.style} 
   onClick={() => {
      if (isMobile && activeSidebar) return // disable
      window.print()
   }}>
      Print Completed Parts
   </button>
}