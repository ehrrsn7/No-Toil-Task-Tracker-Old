import React      from "react"
import { Input }  from "antd"
import * as h     from "../../../data/helperFunctions"

export default function CreateTodoFormRow(props) {
   const { i,
      rowsStatus, setRowsStatus,
      rowsToOil, setRowsToOil,
      highPriorityRows, setHighPriorityRows } = props

   const [ status, setStatus ] = React.useState(0)
   const [ toOil, setToOil ] = React.useState(false)
   const [ highPriority, setHighPriority ] = React.useState(false)
   
   React.useEffect(() => {
      const newRowsStatus = {...rowsStatus}
      newRowsStatus[i] = status
      setRowsStatus(newRowsStatus)

      const newRowsToOil = {...rowsToOil}
      newRowsToOil[i] = toOil
      setRowsToOil(newRowsToOil)

      const newHighPriorityRows = {...highPriorityRows}
      newHighPriorityRows[i] = highPriority
      setHighPriorityRows(newHighPriorityRows)

   }, [
      status, 
      toOil, 
      highPriority, 
   ])

   return <>
      <td>
         <Input 
         name="title"    
         id={`RowStart${i}`}         
         placeholder="Title" 
         type="text"
         />
      </td>
      <td>
         <Input 
         name="quantity" 
         type="number"
         id={`RowMid${i}-Quantity`}  
         placeholder={1}
         default={1}
         />
      </td>

      <td>
         <input id={`$RowMid${i}-Oil`}
            name="toOil"
            type="checkbox" 
            value={toOil}
            onChange={() => {setToOil(!toOil)}}
         />
      </td>
      
      {!h.isMobile() &&
         <td>
            <select id={`RowMid${i}-Status`} 
            name={"status"} 
            value={status} 
            onChange={event => { setStatus(parseInt(event.target.value)) }}>  

               {h.statusNames.getArray().map((name, index) => {
                  return <option key={name} value={index}>
                     {h.capitalize(name)}
                  </option>
               })}
            </select>
         </td>
      }

      <td>
         <input id={`$RowMid${i}-HighPriority`}
            name={"highPriority"} 
            type="checkbox" 
            style={{height: 20}} 
            value={highPriority}
            onChange={() => {setHighPriority(!highPriority)}}
         />
      </td> 
   </>
}
