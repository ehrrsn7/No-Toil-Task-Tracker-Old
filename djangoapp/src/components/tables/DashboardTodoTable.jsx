import React               from "react"
import { Tooltip }         from "@mui/material"
import InvalidRow          from "./InvalidRow"
import DashboardTableRow   from "./DashboardTableRow"
import * as Buttons        from "../buttons"
import * as h              from "../../data/helperFunctions"
import { useContext }      from "../../contexts/contextProvider"
import { sortBy }          from "../../data/sort"

export default function DashboardTodoTable(props)  {
   const context = useContext()
   const { todoModel } = context
   const { selectedTask, setSelectedTask } = props

   return <table id="DashboardTodoTable">

      <thead>
         <tr>
            
            <td className="titleColumn" onClick={() => sortBy("title", context)}>
               Title
            </td>
            
            <td onClick={() => sortBy("quantity", context)}> 
               Quantity 
            </td>
            
            <td align="center" onClick={() => sortBy("status", context)}>
               Status
            </td>
            
            <td>
               <Tooltip title="High Priority" placement="top" 
               onClick={() => sortBy("highPriority", context)}>
                  <p>
                     !
                  </p>
               </Tooltip>
            </td>
            
            {h.isMobile() ? <></> : 
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
         {!Array.isArray(todoModel) && <InvalidRow />}

         {/* No Tasks */}
         {Array.isArray(todoModel) && todoModel.length <= 0 &&
            <tr><td colSpan={"100%"}>
               <em>No Tasks</em>
            </td></tr>
         }

         {/* Valid Tasks */}
         {Array.isArray(todoModel) &&
         todoModel.map(rowData => 
            <DashboardTableRow 
               key={rowData.id} rowData={rowData} 
               selectedTask={selectedTask} 
               setSelectedTask={setSelectedTask}
            />
         )}

      </tbody>
   </table>
}
