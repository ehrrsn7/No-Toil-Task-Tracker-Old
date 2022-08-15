import React                  from "react"
import { deleteAllComplete }  from "./crud"

export default function DeleteAllCompleteForm() {
   return <form id="DeleteCompletedPartsForm">
      <button className="deleteButton" 
      onClick={() => {
         deleteAllComplete(todoModel)
         window.location.reload()
      }}> 
      
         <p>Remove All Completed Parts</p>

      </button>
   </form>
}