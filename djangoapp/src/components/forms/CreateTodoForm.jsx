import React                     from "react"
import { Form, Input, Button }   from "antd"
import axios                     from "axios"
import * as h                    from "../../data/helperFunctions"
import { useContext }            from "../../contexts/contextProvider"
import { todo_api_url }          from "../../App"
import { Tooltip }               from "@mui/material"

function FilterNumberAutocomplete() {
   const [ val, setVal ] = React.useState("")

   return <select name="part_no" value={val} onChange={setVal}>
      {h.sampleFilterNames.map(key => {
         return <option value={key} key={key}>{key}</option>
      })}
   </select>
}

function TodoFormRow(props) {
   const [ oil, setOil ] = React.useState(false)
   const [ highPriority, setHighPriority ] = React.useState(false)

   return <tr>
      todo row
   </tr>
}

export default function CreateTodoForm(props) {
   const { style } = props
   const { screenSize } = useContext()
   const [ rowsAmount, setRowsAmount ] = React.useState(5)

   const onSubmit = async (event) => {
      event.preventDefault()
      if (!event.target.elements) return
      const elements = Array.from(event.target.elements)

      let chunks = []

      elements.forEach(element => {

         // ignore anything except for the values we'll submit in our form
         if (!(String(element.id).includes("RowMid") ||
               String(element.id).includes("RowStart"))) return // continue

         // new chunk
         if (!chunks.length || String(element.id).includes("RowStart"))
            chunks.push([])

         // add each new value to last chunk
         chunks[chunks.length - 1].push(element)
      })

      chunks = chunks.map(chunk => {
         // parse chunk into data
         const chunkObj = {}
         chunk.forEach(element => {
            chunkObj[element.name] = element.value
         })
         if (chunkObj.quantity == '') return
         else console.log(chunkObj.quantity)
         return chunkObj
      }).filter(element => element !== undefined)

      console.log(chunks)

      axios.post(todo_api_url, chunks[0])
      .then(request => console.log(request))
      .catch(error => console.warn(error))

   }

   return <Form id="CreateTodoForm" style={style} onSubmitCapture={onSubmit}>
      <span display="flex">
         <table>
            <thead>
               <tr>
                  <td style={{width: "100%"}} > title </td>
                  <td> quantity </td>
                  {!h.isMobile() ? <>
                     <td>
                        <Tooltip title="Oil? Click this if the filter requires oiling. (Oiled filters usually have a hyphen, i.e. @000-00) Leaving this box unchecked will skip the oiling step." placement="top">
                           <p>
                              oil 
                           </p>
                        </Tooltip>
                     </td> 
                     <td> status </td> 
                     <td style={{width: 20, whiteSpace: "nowrap"}}> ! </td> 
                  </> : "" }
               </tr>
            </thead>
            <tbody>
               {h.range(rowsAmount).map(i => <tr key={i}>
                  <td>
                     <Input 
                     name="title"    
                     id={`RowStart${i}`}         
                     placeholder="title" 
                     type="text"
                     />
                  </td>
                  <td>
                     <Input 
                     name="quantity" 
                     type="number"
                     id={`RowMid${i}-Quantity`}  
                     placeholder={10}
                     default={0}
                     />
                  </td>

                  {h.isMobile() ? "" : <>

                     <td>
                        <input type="checkbox" />
                     </td>
                     
                     <td>
                        <select>
                           {h.statusNames.getArray().map(name => {
                              return <option key={name} value={0}>
                                 {h.capitalize(name)}
                              </option>
                           })}
                        </select>
                     </td>
                     
                     <td>
                        <input type="checkbox" style={{height: 20}} />
                     </td> 
                  
                  </>}
               </tr>)}
            </tbody>
         </table>

         <br></br>

         <span display="flex">
            <Button id="submitCreateTodoFormButton" type="primary" 
            style={{border: "1px solid lightgray"}} htmlType="submit" 
            onSubmit={onSubmit}>
               Submit
            </Button>

            {" "}

            <Button id="add5RowsButton" type="primary"
            style={{border: "1px solid lightgray"}} 
            onClick={() => { setRowsAmount(rowsAmount + 5) }}>
               Add 5 Extra Rows
            </Button>
         </span>
      </span>
   </Form>
}
