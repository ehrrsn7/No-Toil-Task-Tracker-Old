import React            from "react"
import { deleteAll }    from "../crud"
import { useContext }   from "../../../contexts/contextProvider"

export default function DeleteAllDiscardedForm() {
   const { todoModel, setTodoModel } = useContext()

   return <form id="DeleteDiscardedPartsForm">
      <button className="deleteButton" 
      onClick={event => {
         event.preventDefault()
         deleteAll("discarded", todoModel, setTodoModel)
      }}> 
      
         <p>Remove All Discarded Parts</p>

      </button>
   </form>
}