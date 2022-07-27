import React                     from "react"
import { NavLink }               from "react-router-dom"
import { DashboardAccordionDiv } from "../../components/accordionDivs"
import * as h                    from "../../data/helperFunctions"
import { useContext }            from "../../contexts/contextProvider"
import { todo_api_url }          from "../../App"
import { CollapseAllButton } from "../buttons"

export default function DashboardTodoTable(props)  {
   const context = useContext()
   const { selectedTasks, setSelectedTasks } = props

   return <table id="DashboardTodoTable">
      <thead>
         <tr>
            <td className="titleColumn">
               Title
            </td>
            <td> Quantity </td>
            <td> Status </td>
            <td>
               <CollapseAllButton 
               selectedTasks={selectedTasks} 
               setSelectedTasks={setSelectedTasks} />
            </td>
         </tr>
      </thead>
      <tbody>
         {(Array.isArray(context.todoModel)) ? 

            context.todoModel.map(rowData => {
               return <tr id={"DashboardRow" + rowData.id} key={rowData.id} 
               onClick={() => h.handleShowHideAccordion(
                  rowData, selectedTasks, 
                  setSelectedTasks, "Dashboard", 
                  <DashboardAccordionDiv context={context} rowData={rowData} />)
               }>

                  <td>{rowData.title}</td>
                  <td>{rowData.quantity}</td>
                  <td>
                     <NavLink to={
                        (h.statusNames.get(rowData.status) !== "unknown status") ? 
                        h.statusNames.get(rowData.status) : "/"}>
                        <button>
                           {h.capitalize(h.statusNames.get(rowData.status))}
                        </button>
                     </NavLink>
                  </td>
                  <td className="AccordionButtonColumn" style={{
                     width: "10px"
                  }}>
                     <button className="AccordionButton" style={{
                        transform: selectedTasks.includes(rowData.id) ? 
                           "rotate(-90deg)" : 
                           "rotate(0)",
                     }}>
                        {"<"}
                     </button>
                  </td>
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
   </table>
}
