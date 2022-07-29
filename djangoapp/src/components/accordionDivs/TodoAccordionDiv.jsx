import React               from "react"
import { UpdateTodoForm }  from "../forms"

export default function TodoAccordionDiv(props) {
   const { id, rowData, screenWidth } = props

   return <div className={id ? id : "TodoAccordionDiv"}>
      <UpdateTodoForm id={id} rowData={rowData} screenWidth={screenWidth} />
   </div>
}