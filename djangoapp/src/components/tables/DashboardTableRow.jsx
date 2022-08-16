import React                     from "react"
import { NavLink }               from "react-router-dom"
import { Tooltip }               from "@mui/material"
import * as Buttons              from "../buttons"
import { DashboardAccordionDiv } from "../accordionDivs"
import { useContext }            from "../../contexts/contextProvider"
import * as h                    from "../../data/helperFunctions"

export default function DashboardTableRow(props) {
   const context = useContext()
   const { activeSidebar } = context
   const { rowData, selectedTask, setSelectedTask } = props

   const status = () =>  h.capitalize(h.statusNames.get(rowData.status))
   const sets = () => [0, 1].includes(rowData.status) // ?stamp/spray

   return <>

      {/* Dashboard Table Row */}
      <tr id={"DashboardRow" + rowData.id} key={rowData.id}>

         <td>
            <p>
               {rowData.title}
            </p>
         </td>

         <td> {sets() ?
            <Tooltip title="Note: 1 Set = 18 Each" placement="left">
               <p>
                  {parseInt(rowData.quantity / 18) + " Sets"}
               </p>
            </Tooltip> 
            : 
            <p>
               {parseInt(rowData.quantity) + " Each"}
            </p>
         } </td>

         <td align="center">
            <NavLink to={'/' + status()}
            onClick={event => {
               if (activeSidebar) event.preventDefault()
            }}>
               <button>
                  {status()}
               </button>
            </NavLink>
         </td>

         <td>
            <p>
               {rowData.highPriority ? "!" : " "}
            </p>
         </td>
         
         {h.isMobile() ? <></> : 
            <td align="center" className="AccordionButtonColumn" style={{
               width: "10px",
            }}>
               <Buttons.AccordionButton 
               selected={selectedTask === rowData.id} 
               onClick={() => {
                  if (h.isMobile && activeSidebar) return // disable
                  setSelectedTask(
                     selectedTask === rowData.id ? -1 : rowData.id
                  )
               }} />
            </td>
         }
      </tr>

      {/* Accordion Div (Dashboard Dropdown Row) */}
      <tr className={selectedTask === rowData.id ? 
         "AccordionRow Expanded" : "AccordionRow"
      }>
         <td colSpan={"100%"} style={{}}>
            <DashboardAccordionDiv 
            context={context} 
            rowData={rowData} />
         </td>
      </tr>
   </>
}