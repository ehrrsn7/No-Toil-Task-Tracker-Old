import React                     from "react"
import { Tooltip }               from "@mui/material"
import InvalidRow, { isInvalid } from "./InvalidRow"
import DashboardTableRow         from "./DashboardTableRow"
import * as Buttons              from "../buttons"
import SortedByCaret             from "../other/SortedByCaret"
import * as h                    from "../../data/helperFunctions"
import { useContext }            from "../../contexts/contextProvider"
import { sortBy }                from "../../data/sort"

export default function DashboardTodoTable(props)  {
   const context = useContext()
   const { todoModel, sortedBy } = context
   const { selectedTask, setSelectedTask } = props

   return <table id="DashboardTodoTable">

      <thead>
         <tr>
            
            <td className="titleColumn" 
            onClick={() => sortBy("title", context)}>
               <span>
                  <p>Title</p>

                  <SortedByCaret sortedBy={sortedBy} columnName="title" />
               </span>
            </td>
            
            <td onClick={() => sortBy("quantity-ascending", context)}> 
               <span>
                  <p>Quantity</p>

                  <SortedByCaret sortedBy={sortedBy} columnName="quantity" />
               </span>
            </td>
            
            {!h.isMobile() &&
               <td onClick={() => sortBy("dateModified", context)}> 
                  <span>
                     <p>Date Modified</p>

                     <SortedByCaret 
                     sortedBy={sortedBy} 
                     columnName="dateModified" />
                  </span>
               </td>
            }
            
            <td onClick={() => sortBy("status", context)}>
               <span>
                  <p>Status</p>

                  <SortedByCaret sortedBy={sortedBy} columnName="status" />
               </span>
            </td>
            
            <td>
               <Tooltip title="High Priority" placement="top" 
               onClick={() => sortBy("highPriority-ascending", context)}>
                  <span>
                     <p>!</p>

                     <SortedByCaret 
                     sortedBy={sortedBy} 
                     columnName="highPriority" />
                  </span>
               </Tooltip>
            </td>
            
            {!h.isMobile() && 
               <td align="center" >
                  <Buttons.CollapseAllButton 
                  selectedTask={selectedTask} 
                  setSelectedTask={setSelectedTask} />
               </td>
            }
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
         todoModel.filter(r => !r.discarded).map(rowData => 
            <DashboardTableRow 
            key={rowData.id} rowData={rowData} 
            selectedTask={selectedTask} 
            setSelectedTask={setSelectedTask}
            />
         )}

      </tbody>
   </table>
}
