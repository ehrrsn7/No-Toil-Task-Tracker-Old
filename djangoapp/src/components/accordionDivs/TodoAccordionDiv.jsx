import React               from "react"
import { UpdateTodoForm }  from "../forms"

export default function TodoAccordionDiv(props) {
   const { id, rowData } = props

   return <div id={id ? id : "TodoAccordionDiv"}>
      <UpdateTodoForm id={id} rowData={rowData} />
   </div>
}