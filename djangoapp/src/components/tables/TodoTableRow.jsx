import React                  from "react"
import { TodoAccordionDiv }   from "../accordionDivs"
import * as Buttons           from "../buttons"
import * as h                 from "../../data/helperFunctions"
import { useContext }         from "../../contexts/contextProvider"

export default function TodoTableRow(props) {
   const { activeSidebar } = useContext()
   const { rowData, selectedTask, setSelectedTask } = props

   const onClick = () => {
      if (h.isMobile && activeSidebar) return // disable
      setSelectedTask(selectedTask === rowData.id ? -1 : rowData.id)
   }

   return <>

      {/* Todo Table Row */}
      <tr onClick={onClick}>

         <td>{rowData.title}</td>
         <td>{rowData.quantity}</td>
         <td>{rowData.highPriority ? "!" : ""}</td>
         <td width={100}>
            <Buttons.AccordionButton selected={selectedTask === rowData.id}>
               {selectedTask === rowData.id ? "cancel" : "update"}
            </Buttons.AccordionButton>
         </td>
      </tr>

      {/* Dropdown Row (Hidden Todo Accordion Div) */}
      <tr className={
         selectedTask === rowData.id ? 
         "AccordionRow Expanded" : 
         "AccordionRow"}
      >
         <td colSpan={"100%"}>
            <TodoAccordionDiv id={rowData.id} rowData={rowData} />
         </td>
      </tr>
   </> 
}