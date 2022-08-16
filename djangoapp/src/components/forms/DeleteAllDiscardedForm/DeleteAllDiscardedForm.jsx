import React                  from "react"
import { deleteAllDiscarded } from "./crud"
import { useContext }         from "../../../contexts/contextProvider"

export default function DeleteAllDiscardedForm() {
   const { todoModel } = useContext()

   console.log("delete discarded component loaded")

   return <form id="DeleteDiscardedPartsForm">
      <button className="deleteButton" 
      onClick={() => deleteAllDiscarded(todoModel)}> 
      
         <p>Remove All Discarded Parts</p>

      </button>
   </form>
}