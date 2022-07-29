import React            from "react"
import * as Buttons     from "../buttons"

export default function DashboardAccordionDiv(props) {
   const { rowData } = props

   return <span 
   className="DashboardAccordionDiv flexbox" 
   style={{justifyContent: "start", gap: ".5em 2.5em"}}>

      <p>id: {rowData.id}</p>

      <p>Title: {rowData.title}</p>
      
      <p>Quantity: {rowData.quantity}</p>
      
      <p>Oil: {rowData.oil ? "True" : "False"}</p>
      
      <Buttons.DashboardAccordionStatusButton status={rowData.status} />
      
      <p>Part number: {rowData.part_no}</p>
      <p>High Priority: {rowData.high_priority ? "True" : "False"}</p>
      <Buttons.DashboardDeleteButton id={rowData.id} />
   </span>
}