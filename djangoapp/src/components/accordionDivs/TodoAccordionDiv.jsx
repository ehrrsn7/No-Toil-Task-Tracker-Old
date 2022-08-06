import React               from "react"
import { UpdateTodoForm }  from "../forms"
import * as Buttons        from "../buttons"

export default function TodoAccordionDiv(props) {
   const { id, sets, rowData } = props
   const [ showMore, setShowMore ] = React.useState(false)
   const colWidth = 100

   return <div className={id ? id : "TodoAccordionDiv"}>
      <UpdateTodoForm id={id} sets={sets} rowData={rowData} />

      <Buttons.AccordionButton 
      selected={showMore} setSelected={setShowMore}
      style={{position: "relative", margin: ".3em"}}>
         Show More
      </Buttons.AccordionButton>

      {showMore && <div style={{margin: ".3em"}}>
         <table style={{wordWrap: "break-word"}}>
            <tbody>
               
               <tr>
                  <td width={colWidth}>id:</td>
                  <td>{rowData.id}</td>
               </tr>
               <tr>
                  <td width={colWidth}>title:</td>
                  <td>{rowData.title}</td>
               </tr>
               <tr>
                  <td width={colWidth}>quantity:</td>
                  <td>{rowData.quantity}</td>
               </tr>
               <tr>
                  <td width={colWidth}>toOil:</td>
                  <td>{rowData.toOil ? "True" : "False"}</td>
               </tr>
               <tr>
                  <td width={colWidth}>status:</td>
                  <td>{rowData.status}</td>
               </tr>
               <tr>
                  <td width={colWidth}>highPriority:</td>
                  <td>{rowData.highPriority ? "True" : "False"}</td>
               </tr>
               <tr>
                  <td width={colWidth}>partNumber:</td>
                  <td>{rowData.partNumber}</td>
               </tr>
               <tr>
                  <td width={colWidth}>lastModified:</td>
                  <td>{(rowData.lastModified)}</td>
               </tr>

            </tbody>
         </table>

         <Buttons.TaskEditDeleteButton id={rowData.id} style={{marginTop: 15}} />
      </div>}
   </div>
}