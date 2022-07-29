import React from "react"
import * as h           from "../../data/helperFunctions"
import { todo_api_url } from "../../App"

export default function CompletedPartsTable(props) {
   const context = props.context
   const [ TaskListLength, setTaskListLength ] = React.useState(0)

   React.useEffect(() => {
      setTaskListLength(1)
   }, [setTaskListLength])
   
   return <table id={props.filter + "TodoTable"} className="TodoTable">

   <thead>
      <tr>
         <td className="titleColumn">  Title       </td>
         <td>                          Quantity    </td>
      </tr>
   </thead>

   {TaskListLength <= 0 ? <tbody>No rows to display</tbody> : 
   <tbody>
      {(Array.isArray(context.todoModel)) ? 

         context.todoModel.filter(
            rowData => h.statusNames.get(rowData.status) === "complete"
         ).map(rowData => {
            return <tr id={"TodoRow" + rowData.id} key={rowData.id}>
               <td>{rowData.title}</td>
               <td>{rowData.quantity}</td>
            </tr>
         }) : 

      <tr className="invalidRow">        
         <td>Not valid data</td>
         <td>
            <a href={todo_api_url} target="_blank" rel="noreferrer">
               failed to fetch data from {todo_api_url}
            </a>
         </td>
      </tr>}
   </tbody>
   }
</table>
}