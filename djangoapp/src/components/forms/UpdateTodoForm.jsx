import React            from "react"
import axios            from "axios"
import { todo_api_url } from "../../App"
import * as h           from "../../data/helperFunctions"

export default function UpdateTodoForm(props) {
   const { rowData } = props
   const [ numVal, setNumVal ] = React.useState(rowData.quantity)
   const inputId = "TodoAccordionDivCompleteValue" + rowData.id

   async function onUpdate(event) {
      event.preventDefault()
      const quantity = parseInt(numVal)
      const expected = parseInt(rowData.quantity)
      console.log("quantity:", quantity)
      console.log("expected:", expected)
      
      if (quantity === expected) {

         // update task status += 1
         let newStatus = parseInt(rowData.status + 1)
         if (h.statusNames.isOilStatus(newStatus) && !rowData.oil)
            newStatus += 1
         const putObj = { status: newStatus }
         const putUrl = `${todo_api_url}${rowData.id}/?format=json`

         axios.put(putUrl, putObj)
         .then(request => {console.log(request.status == 201 ? "success" : "failure")})
      }
      
      else if (quantity < expected) {

         // new task of quantity with status += 1
         axios.get(todo_api_url)
         .then(request => {console.log("new task of quantity with status += 1", request)})
         
         // current task expected -= quantity
         axios.get(todo_api_url)
         .then(request => {console.log("current task expected -= quantity", request)})
         
      }
      
      else if (quantity > expected) {

         // task expected += extra (or rather expected <- quantity), and status += 1
         axios.get(todo_api_url)
         .then(request => {console.log("task expected += extra (or rather expected <- quantity), and status += 1", request)})

      }      

   }

   async function onReset(event) {
      event.preventDefault()
      console.log("remove task")
      await axios.delete(todo_api_url, rowData.id)
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
         <button onClick={onUpdate}> Update </button>
         <button onClick={onReset}> Reset </button>
      </div>
   </form>
}