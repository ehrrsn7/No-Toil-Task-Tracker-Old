import React                     from "react"
import { NavLink }               from "react-router-dom"
import { DashboardAccordionDiv } from "../../components/accordionDivs"
import * as h                    from "../../data/helperFunctions"
import { useContext }            from "../../contexts/contextProvider"
import { todo_api_url }          from "../../App"
import * as Buttons              from "../buttons"
import { Tooltip } from "@mui/material"

export default function DashboardTodoTable(props)  {
   const context = useContext()
   const { selectedTasks, setSelectedTasks } = props
   const [ TaskListLength, setTaskListLength ] = React.useState(0)

   React.useEffect(() => {
      setTaskListLength(1)
   }, [])

   return <table id="DashboardTodoTable">
      <thead>
         <tr>
            <td className="titleColumn">
               Title
            </td>
            <td> Quantity </td>
            <td align="center" > Status </td>
            <td>
               <Tooltip title="High Priority" placement="top">
                  <p>
                     !
                  </p>
               </Tooltip>
            </td>
            {h.isMobile() ? <></> : 
               <td align="center" >
                  <Buttons.CollapseAllButton 
                  selectedTasks={selectedTasks} 
                  setSelectedTasks={setSelectedTasks} />
               </td>
            }
         </tr>
      </thead>
      {TaskListLength <= 0 ? <tbody>No rows to display</tbody> :
      <tbody>
         {(Array.isArray(context.todoModel)) ? 

            context.todoModel.map(rowData => {
               return <tr id={"DashboardRow" + rowData.id} key={rowData.id}>

                  <td>{rowData.title}</td>
                  <td>{rowData.quantity}</td>
                  <td align="center">
                     <NavLink to={h.statusNames.getUrl(rowData.status)}>
                        <button>
                           {h.capitalize(h.statusNames.get(rowData.status))}
                        </button>
                     </NavLink>
                  </td>
                  <td>
                     <p>
                        {rowData.high_priority ? "!" : " "}
                     </p>
                  </td>
                  {h.isMobile() ? <></> : 
                     <td align="center" className="AccordionButtonColumn" style={{
                        width: "10px",
                     }}>
                        <Buttons.AccordionButton selected={selectedTasks.includes(rowData.id)} 
                        onClick={() => h.handleShowHideAccordion(
                           rowData, selectedTasks, 
                           setSelectedTasks, "Dashboard", 
                           <DashboardAccordionDiv context={context} rowData={rowData} />)
                        } />
                     </td>
                  }
               </tr>
            }) : 

            <tr className="invalidRow">        
               <td>Not valid data</td>
               <td>
                  <a href={todo_api_url} target="_blank" rel="noreferrer">
                     failed to fetch data from {todo_api_url}
                  </a>
               </td>
               <td>
                  {context.todoModel}
               </td>
            </tr>
            
         }
      </tbody>
      }
   </table>
}
