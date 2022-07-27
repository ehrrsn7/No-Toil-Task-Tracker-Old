import React from "react"
import axios from "axios"
import { todo_api_url } from "../../App"
import * as h from "../../data/helperFunctions"

export default function UpdateTodoForm(props) {
   const { rowData } = props
   const [ numVal, setNumVal ] = React.useState(rowData.quantity)
   const inputId = "TodoAccordionDivCompleteValue" + rowData.id

   async function onComplete(event) {
      event.preventDefault()
      const quantity = parseInt(numVal)
      const expected = parseInt(rowData.quantity)
      console.log("quantity:", quantity)
      console.log("expected:", expected)
      
      if (quantity === expected) {

         // update task status += 1
         let newStatus = parseInt(rowData.status + 1)
         if (h.statusNames.isOilStatus(newStatus) && rowData.oil)
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

   async function onDelete(event) {
      event.preventDefault()
      console.log("remove task")
      await axios.delete(todo_api_url, rowData.id)
   }

   return <form>
      <table>
         <tbody>
            <tr>
               <td width="100%">
                  <em>
                     <p>Update '{rowData.title}':</p>
                  </em>
               </td>
               <td>
                  <input id={inputId}
                  name="quantity" type="number" 
                  onChange={event => setNumVal(event.target.value)}
                  placeholder={rowData.quantity}
                  value={numVal} 
                  min={0} />
               </td>
               <td>
                  <button onClick={onComplete}> Complete </button>
               </td>
               <td>
                  <button onClick={onDelete}> Delete </button>
               </td>
            </tr>
         </tbody>
      </table>
   </form>
}