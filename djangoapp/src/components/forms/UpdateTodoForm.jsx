import React            from "react"
import * as h           from "../../data/helperFunctions"
import { useContext }   from "../../contexts/contextProvider"
import { 
   shiftTodoGreaterThanExpected, 
   shiftTodoLessThanExpected, 
   shiftTodoNormal, 
   todoResetShift, 
   todoResetUpdate, 
   updateTodoGreaterThanExpected, 
   updateTodoLessThanExpected, 
   updateTodoNormal 
} from "./crud"

export default function UpdateTodoForm(props) {
   const { todoModel, activeSidebar } = useContext()
   const { rowData } = props
   const [ numVal, setNumVal ] = React.useState(rowData.quantity)
   const inputId = "TodoAccordionDivCompleteValue" + rowData.id

   async function onUpdate() {
      if (h.isMobile && activeSidebar) return // disable
      
      const quantity = parseInt(numVal)
      const expected = parseInt(rowData.quantity)
      
      const newStatus = !rowData.oil && 
         h.statusNames.isOilStatus(parseInt(rowData.status + 1)) ?
            parseInt(rowData.status + 2) :
            parseInt(rowData.status + 1)

      const updateNotCreate = todoModel.filter(
         row => row.status === newStatus).filter(
            row => row.title === rowData.title).length > 0

      if (updateNotCreate) {
         if (quantity === expected)
            updateTodoNormal(
               todoModel, rowData, newStatus, quantity)

         if (quantity < expected)
            updateTodoLessThanExpected(
               todoModel, rowData, newStatus, quantity, expected)

         if (quantity > expected)
            updateTodoGreaterThanExpected(
               todoModel, rowData, newStatus, quantity)
      }

      else {

         if (quantity === expected)
            shiftTodoNormal(rowData, newStatus)
         
         else if (quantity < expected)
            shiftTodoLessThanExpected(rowData, quantity, expected)
         
         else if (quantity > expected)
            shiftTodoGreaterThanExpected(rowData, quantity)  
      }
   }

   async function onReset() {
      if (h.isMobile && activeSidebar) return // disable

      const newStatus = 0

      if (todoModel.filter(
         row => row.status === newStatus).filter(
            row => row.title === rowData.title).length > 0)
               todoResetUpdate(todoModel, newStatus, rowData)

      todoResetShift(newStatus, rowData)
   }

   return <form className="UpdateTodoForm flexbox">
      
      <div className="left">
         <p><em>Update '{rowData.title}':</em></p>
      </div>

      <div>
         <input id={inputId}
         name="quantity" type="number" 
         onChange={event => setNumVal(event.target.value)}
         placeholder={rowData.quantity}
         value={numVal} 
         min={0} 
         />
      </div>

      <div style={{display: "inline"}}>

         <button onClick={onUpdate}>
            Update
         </button>

         <button style={{marginLeft: "1em"}} onClick={onReset}>
            Reset
         </button>

      </div>
   </form>
}