import React                     from "react"
import InvalidRow, { isInvalid } from "./InvalidRow"
import { statusNames }           from "../../data/helperFunctions"

export default function DiscardedPartsTable(props) {
   const { context } = props
   const { todoModel } = context
   const filteredModel = () => todoModel.filter(r => r.discarded)

   return <table id="DiscardedTable" className="DiscardedTable">

   <thead>
      <tr>
         
         <td className="titleColumn">
            Title
         </td>

         <td>
            Quantity
         </td>

         <td>
            Status
         </td>

      </tr>
   </thead>

   <tbody>
      {/* Invalid Tasks */}
      {isInvalid(filteredModel()) && <InvalidRow />}

      {/* No Tasks */}
      {!isInvalid(filteredModel()) && filteredModel().length <= 0 &&
         <tr><td colSpan={"100%"}>
            <em>No Tasks</em>
         </td></tr>
      }

      {/* Valid Tasks */}
      {!isInvalid(filteredModel()) && 
      filteredModel().map(rowData => <tr 
      id={"DiscardedTodoRow" + rowData.id} key={rowData.id}>

         <td>{rowData.title}</td>
         <td>{rowData.quantity}</td>
         <td>{statusNames.get(rowData.status)}</td>
      
      </tr> )}
   </tbody>
</table>
}