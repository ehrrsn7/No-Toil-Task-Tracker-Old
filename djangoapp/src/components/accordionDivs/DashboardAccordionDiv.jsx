import React   from "react"
import * as h  from "../../data/helperFunctions"

export default function DashboardAccordionDiv(props) {
   const { rowData, context } = props
   const { screenSize } = context

   return <div className="DashboardAccordionDiv">
      <table width="100%">
         <thead>
            <tr>
               <td>id</td>
               <td>title</td>
               <td>#</td>
               <td>status</td>
               {screenSize < 600 ? "" : <>
                  <td>part_no</td>
                  <td>high_priority</td>
               </>}
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>{rowData.id}</td>
               <td width="100%">{rowData.title}</td>
               <td>{rowData.quantity}</td>
               <td width={0}>
                  <a href={h.statusNames.get(rowData.status)} width={0}>
                  <button width={0}>
                     [{rowData.status}] Go to {`${h.capitalize(h.statusNames.get(rowData.status))}`} 
                  </button>
                  </a>
               </td>
               {screenSize < 600 ? "" : <>
                  <td>{rowData.part_no}</td>
                  <td>{rowData.high_priority}</td>
               </>}
            </tr>
         </tbody>
      </table>
   </div>
}