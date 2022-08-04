import React                  from "react"
import { useContext }         from "../../contexts/contextProvider"
import { deleteAllComplete }  from "../forms/crud"

export default function PrintCompletedPartsButton(props) {
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
   onClick={window.print}>
      Print Completed Parts
   </button>
}