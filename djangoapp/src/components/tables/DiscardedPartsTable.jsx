import React                     from "react"
import InvalidRow, { isInvalid } from "./InvalidRow"

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
      
      </tr> )}
   </tbody>
</table>
}