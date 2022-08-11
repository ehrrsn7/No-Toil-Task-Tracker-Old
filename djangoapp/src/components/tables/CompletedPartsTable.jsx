import React                     from "react"
import InvalidRow, { isInvalid } from "./InvalidRow"

export default function CompletedPartsTable(props) {
   const { todoModel } = props.context
   const filteredModel = () => todoModel.filter(x => x.status === 5)

   return <table id={props.filter + "TodoTable"} className="TodoTable">

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
      id={"CompleteTodoRow" + rowData.id} key={rowData.id}>

         <td>{rowData.title}</td>
         <td>{rowData.quantity}</td>
      
      </tr> )}
   </tbody>
</table>
}