import React      from "react"
import InvalidRow from "./InvalidRow"

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
      {!Array.isArray(todoModel) && <InvalidRow />}

      {/* No Tasks */}
      {Array.isArray(todoModel) && filteredModel().length <= 0 &&

         <tr>
         
            <td colSpan={"100%"}><em> No Tasks </em></td>
         
         </tr>
      }

      {/* Valid Tasks */}
      {(Array.isArray(todoModel)) && filteredModel().map(rowData => 
      <tr id={"CompleteTodoRow" + rowData.id} key={rowData.id}>

         <td>{rowData.title}</td>
         <td>{rowData.quantity}</td>
      
      </tr> )}
   </tbody>
</table>
}