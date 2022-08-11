import React                     from "react"
import TodoTableRow              from "./TodoTableRow"
import InvalidRow, { isInvalid } from "./InvalidRow"
import { useContext }            from "../../contexts/contextProvider"
import { statusNames }           from "../../data/helperFunctions"
import { sortBy }                from "../../data/sort"
import SortedByCarret            from "../other/SortedByCaret"
import * as Buttons              from "../buttons"

export default function TodoTable(props) {
   const { filter, sets, selectedTask, setSelectedTask } = props
   const context = useContext()
   const { todoModel, sortedBy } = context

   const filteredModel = () => (
      todoModel.filter(
         rowData => statusNames.matches(rowData.status, filter)
      )
   )

   return <table id={filter + "TodoTable"} className="TodoTable">

      <thead>
         <tr>
            
            <td className="titleColumn" 
            onClick={() => {sortBy("title", context)}}>
               <span style={{width: "100%", flexWrap: "nowrap"}}>
                  <p>
                     Title
                  </p>

                  <SortedByCarret sortedBy={sortedBy} columnName="title" />
               </span>
            </td>

            <td onClick={() => {sortBy("quantity", context)}}>
               <span style={{width: "100%", flexWrap: "nowrap"}}>
                  <p>
                     {/* stamp/spray should show sets instead of quantity */}
                     { [ 0, 1 ].some( 
                        statusInt => statusNames.matches(statusInt, filter)
                     ) ? 
                        "Sets" : 
                        "Quantity"
                     }
                  </p>

                  <SortedByCarret sortedBy={sortedBy} columnName="quantity" />
               </span>
            </td>

            <td onClick={() => {sortBy("highPriority-ascending", context)}}>
               <span style={{width: "100%", flexWrap: "nowrap"}}>
                  <p>
                     !
                  </p>

                  <SortedByCarret sortedBy={sortedBy} columnName="highPriority" />
               </span>
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
         {isInvalid(todoModel) && <InvalidRow />}

         {/* No Tasks */}
         {!isInvalid(todoModel) && todoModel.length <= 0 &&
            <tr><td colSpan={"100%"}>
               <em>No Tasks</em>
            </td></tr>
         }

         {/* Valid Tasks */}
         {!isInvalid(todoModel) && 
         filteredModel().map(rowData => (
            <TodoTableRow 
            sets={sets}
            key={rowData.id} 
            rowData={rowData} 
            selectedTask={selectedTask} 
            setSelectedTask={setSelectedTask} 
            /> 
         ))}

      </tbody>
   </table>
}
