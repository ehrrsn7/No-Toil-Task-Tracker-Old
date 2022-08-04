import React                  from "react"
import { useContext }         from "../../contexts/contextProvider"
import * as Buttons           from "../buttons"
import TodoTableRow           from "./TodoTableRow"
import InvalidRow             from "./InvalidRow"
import { statusNames }        from "../../data/helperFunctions"
import { sortBy } from "../../data/sort"

export default function TodoTable(props) {
   const { filter, selectedTask, setSelectedTask } = props
   const context = useContext()
   const { todoModel } = context

   const filteredModel = () => (
      todoModel.filter(
         rowData => statusNames.matches(rowData.status, filter)
      )
   )
   
   return <table id={filter + "TodoTable"} className="TodoTable">

      <thead>
         <tr>
            <td className="titleColumn" onClick={() => {sortBy("title", context)}}>
               Title
            </td>
            <td onClick={() => {sortBy("quantity", context)}}>
               Quantity
            </td>
            <td onClick={() => {sortBy("priority", context)}}>
               !
            </td>
            <td align="right">
               <Buttons.CollapseAllButton 
               selectedTask={selectedTask} 
               setSelectedTask={setSelectedTask} 
               />
            </td>
         </tr>
      </thead>

      <tbody>

         {/* Invalid Tasks */}
         {!Array.isArray(todoModel) && <InvalidRow />}

         {/* No Tasks */}
         {Array.isArray(todoModel) && filteredModel().length <= 0 &&
            <tr><td colSpan={"100%"}>
               <em>No Tasks</em>
            </td></tr>
         }

         {/* Valid Tasks */}
         {(Array.isArray(todoModel)) && filteredModel().map(rowData => (
            <TodoTableRow 
            key={rowData.id} 
            rowData={rowData} 
            selectedTask={selectedTask} 
            setSelectedTask={setSelectedTask} 
            /> 
         ))}

      </tbody>
   </table>
}
