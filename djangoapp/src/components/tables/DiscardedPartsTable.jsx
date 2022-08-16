import React                     from "react"
import InvalidRow, { isInvalid } from "./InvalidRow"
import { statusNames }           from "../../data/helperFunctions"
import { sortBy }                from "../../data/sort"
import SortedByCaret from "../other/SortedByCaret"

export default function DiscardedPartsTable(props) {
   const { context } = props
   const { todoModel, sortedBy } = context
   const filteredModel = () => todoModel.filter(r => r.discarded)

   return <table id="DiscardedTable" className="DiscardedTable">

   <thead>
      <tr>
         
         <td className="titleColumn" onClick={() => sortBy("Title", context)}>
            <span>
               <p>Title</p>
               <SortedByCaret sortedBy={sortedBy} columnName="Title" />
            </span>
         </td>
 
         <td onClick={() => sortBy("Quantity", context)}>
            <span style={{flexWrap: "nowrap"}}>
               <p>Quantity</p>
               <SortedByCaret sortedBy={sortedBy} columnName="Quantity" />
            </span>
         </td>
 
         <td onClick={() => sortBy("Status", context)}>
            <span style={{flexWrap: "nowrap"}}>
               <p>Status</p>
               <SortedByCaret sortedBy={sortedBy} columnName="Status" />
            </span>
         </td>
 
         <td onClick={() => sortBy("highPriority", context)}>
            <span style={{flexWrap: "nowrap"}}>
               <p>{"!"}</p>
               <SortedByCaret sortedBy={sortedBy} columnName="highPriority" />
            </span>
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
         <td>{rowData.highPriority && "!"}</td>
      
      </tr> )}
   </tbody>
</table>
}