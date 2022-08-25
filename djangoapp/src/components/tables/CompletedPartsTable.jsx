import React                     from "react"
import { useContext }            from "../../contexts/contextProvider"
import InvalidRow, { isInvalid } from "./InvalidRow"

export default function CompletedPartsTable({filter}) {
   const { todoModel, setTodoModel } = useContext()
   const { sortedBy, setSortedBy } = useContext()

   const filteredModel = () => todoModel.filter(x => x.status === 5)

   return <table id={filter + "TodoTable"} className="TodoTable">

   <thead>
      <tr>
         
         <td className="titleColumn" onClick={() => sortBy("title", 
            todoModel, setTodoModel,
            { sortedBy, setSortedBy }
         )}>
            Title
         </td>

         <td onClick={() => sortBy("quantity-ascending", 
            todoModel, setTodoModel,
            { sortedBy, setSortedBy }
         )}>
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