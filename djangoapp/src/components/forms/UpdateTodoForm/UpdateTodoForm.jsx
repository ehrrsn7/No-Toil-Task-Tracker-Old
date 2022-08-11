import React                  from "react"
import { useContext }         from "../../../contexts/contextProvider"
import { onUpdate, onReset }  from "./crud"

export default function UpdateTodoForm(props) {
   const { rowData, sets } = props
   const { todoModel, activeSidebar } = useContext()

   // quantity state
   const adjustedQuantity = (count) => sets ? parseInt(count / 18) : count
   const [ numVal, setNumVal ] = React.useState(
      adjustedQuantity(rowData.quantity)
   )

   const inputId = "TodoAccordionDivCompleteValue" + rowData.id

   return <form className="UpdateTodoForm flexbox">
      
      <div className="left">
         <p><em>Update '{rowData.title}':</em></p>
      </div>

      <span style={{width:"fit-content"}}>

         <p><em> Quantity: </em></p>
      
         <input id={inputId}
         name="quantity" type="number" 
         onChange={event => setNumVal(adjustedQuantity(event.target.value))}
         placeholder={adjustedQuantity(rowData.quantity)}
         value={numVal} 
         min={0} 
         />
      
      </span>

      <div style={{display: "inline"}}>

         {/* Update Button */}
         <button onClick={() => {
            onUpdate(activeSidebar, todoModel, rowData, numVal)}
         }>

            Update

         </button>

         {/* Reset Button */}
         <button style={{marginLeft: "1em"}} onClick={() => {
            onReset(activeSidebar, todoModel, rowData)}
         }>

            Reset

         </button>

      </div>
   </form>
}