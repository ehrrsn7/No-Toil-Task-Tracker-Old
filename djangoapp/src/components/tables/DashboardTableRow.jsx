import React                     from "react"
import { NavLink }               from "react-router-dom"
import { useContext }            from "../../contexts/contextProvider"
import * as h                    from "../../data/helperFunctions"
import * as Buttons              from "../buttons"
import { DashboardAccordionDiv } from "../accordionDivs"

export default function DashboardTableRow(props) {
   const context = useContext()
   const { activeSidebar } = context
   const { rowData, selectedTask, setSelectedTask } = props

   return <>

      {/* Dashboard Table Row */}
      <tr id={"DashboardRow" + rowData.id} key={rowData.id}>

         <td>
            <p>
               {rowData.title}
            </p>
         </td>

         <td>
            <p>
               {parseInt(rowData.quantity / 18)}
            </p>
         </td>

         <td align="center">
            <NavLink to={h.statusNames.getUrl(rowData.status)}
            style={{
               pointerEvents: h.isMobile() && activeSidebar ? "none" : "",
            }}>
               <button>
                  {h.capitalize(h.statusNames.get(rowData.status))}
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
               <Buttons.AccordionButton selected={selectedTask === rowData.id} 
               onClick={() => {
                  if (h.isMobile && activeSidebar) return // disable
                  setSelectedTask(selectedTask === rowData.id ? -1 : rowData.id)
               }} />
            </td>
         }
      </tr>

      {/* Accordion Div (Dashboard Dropdown Row) */}
      <tr className={
         selectedTask === rowData.id ? 
         "AccordionRow Expanded" : 
         "AccordionRow"}
      >
         <td colSpan={"100%"} style={{}}>
            <DashboardAccordionDiv context={context} rowData={rowData} />
         </td>
      </tr>
   </>
}