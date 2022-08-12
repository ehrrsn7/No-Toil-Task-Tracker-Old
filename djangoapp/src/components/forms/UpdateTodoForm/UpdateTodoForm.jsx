import { Tooltip } from "@mui/material"
import React                  from "react"
import { useContext }         from "../../../contexts/contextProvider"
import { onUpdate, onReset }  from "./crud"

export default function UpdateTodoForm(props) {
   const { rowData, sets } = props
   const { todoModel, activeSidebar } = useContext()
   const [ numVal, setNumVal ] = React.useState(
      sets ? parseInt(rowData.quantity / 18) : rowData.quantity
   )

   const inputId = "TodoAccordionDivCompleteValue" + rowData.id

   return <form className="UpdateTodoForm flexbox">

      <div className="left">
         <p><em>Update '{rowData.title}':</em></p>
      </div>

      <span style={{width: "fit-content"}}>

         <em>{sets ? 
            <Tooltip title="1 Set = 18 Each">
               <p>Sets:</p>
            </Tooltip> :
            <p>Quantity:</p>
         }</em>


         <input id={inputId} style={{width: "5em"}}
         name="quantity" type="number" value={numVal} min={0} 
         placeholder={parseInt(sets ? rowData.quantity : rowData.quantity / 18)}
         onChange={event => { setNumVal(event.target.value) }} />
      
      </span>

      <div style={{display: "inline"}}>

         {/* Update Button */}
         <button onClick={event => {
            event.preventDefault()
            onUpdate(activeSidebar, todoModel, rowData, 
               parseInt(sets ? numVal * 18 : numVal)
            )
         }}>

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