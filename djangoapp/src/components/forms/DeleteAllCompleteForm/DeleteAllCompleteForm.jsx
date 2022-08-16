import React                  from "react"
import { deleteAllComplete }  from "./crud"
import { useContext }         from "../../../contexts/contextProvider"

export default function DeleteAllCompleteForm() {
   const { todoModel } = useContext()

   return <form id="DeleteCompletedPartsForm">
      <button className="deleteButton" 
      onClick={() => deleteAllComplete(todoModel)}> 
      
         <p>Remove All Completed Parts</p>

      </button>
   </form>
}