import React            from "react"
import { useContext }   from "../../../contexts/contextProvider"
import { deleteAll }    from "../crud"

export default function DeleteAllCompleteForm() {
   const { todoModel, setTodoModel } = useContext()

   return <form id="DeleteCompletedPartsForm">
      <button className="deleteButton" 
      onClick={event => {
         event.preventDefault()
         deleteAll("complete", todoModel, setTodoModel)
      }}> 
      
         <p>Remove All Completed Parts</p>

      </button>
   </form>
}