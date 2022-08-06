import React                     from "react"
import { Form, Button }          from "antd"
import axios                     from "axios"
import { Tooltip }               from "@mui/material"
import CreateTodoFormRow         from "./CreateTodoFormRow"
import * as h                    from "../../data/helperFunctions"
import { useContext }            from "../../contexts/contextProvider"
import { todo_api_url }          from "../../App"

export default function CreateTodoForm(props) {
   const { activeSidebar } = useContext()
   const { style } = props
   const [ rowsAmount, setRowsAmount ] = React.useState(5)
   const [ rowsStatus, setRowsStatus ] = React.useState({})
   const [ rowsToOil, setRowsToOil ]   = React.useState({})
   const [ highPriorityRows, setHighPriorityRows ] = React.useState({})

   const onSubmit = async (event) => {
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

      chunks = chunks.filter(chunk => {
         // don't parse any empty fields
         return chunk[0].value !== '' && chunk[1].value !== ''
      
      }).map(chunk => {
         // parse chunk into data
         const chunkObj = {}
         
         chunk.forEach(element => {
            let value = element.value
            
            // handle sets to quantity
            if (element.id && element.id.toLowerCase().includes("quantity"))
               value = parseInt(value) * 18
            
            // handle str to bool
            if (["true", "false"].some(text => text.includes(element.value)))
               value = element.value === "true" 
            
            chunkObj[element.name] = value
         })

         return chunkObj
      }).filter(element => element !== undefined)

      // pull the trigger
      chunks.forEach(chunk => {
         axios.post(todo_api_url, chunk)
         .then(request => console.log(request))
         .catch(error => console.warn(error))
      })

      // this just makes things nicer, and prevents duplicates
      window.location.reload()
   }

   return <Form id="CreateTodoForm" style={style} onSubmitCapture={onSubmit}>
      <span display="flex">
         <table>
            <thead>
               <tr>
                  <td style={{width: "100%"}} > 
                     <p>
                        Title
                     </p>
                  </td>
                  <td> 
                     <Tooltip title="1 Set = 18 Parts" placement="top">
                        <p>
                           Sets
                        </p> 
                     </Tooltip>
                  </td>
                  
                  {!h.isMobile() ? <>
                  
                     <td>
                        <Tooltip placement="top" title={
                           "Oil? Click this if the filter requires oiling." + 
                           "(Oiled filters usually have a hyphen, i.e. @000-00)" + 
                           "Leaving this box unchecked will skip the oiling step."
                        }>
                           <p>
                              Oil 
                           </p>
                        </Tooltip>
                     </td> 
                     
                     <td>
                        <p>
                           Status 
                        </p> 
                     </td> 
                     
                     <td style={{width: 20, whiteSpace: "nowrap"}}> 
                        <Tooltip title="High Priority" placement="top">
                           <p>
                              ! 
                           </p>
                        </Tooltip>
                     </td> 

                  </> : "" }
               </tr>
            </thead>
            <tbody>
               {h.range(rowsAmount).map(i => <tr key={i}>
                  <CreateTodoFormRow i={i} 
                     rowsStatus={rowsStatus}
                     setRowsStatus={setRowsStatus}
                     rowsToOil={rowsToOil}
                     setRowsToOil={setRowsToOil}
                     highPriorityRows={highPriorityRows}
                     setHighPriorityRows={setHighPriorityRows}
                  />
               </tr>
               )}
            </tbody>
         </table>

         <br></br>

         <span style={{marginTop: "1em"}}>
            <Button id="submitCreateTodoFormButton" type="primary" 
            style={{border: "1px solid lightgray"}} htmlType="submit" 
            onSubmit={onSubmit}>
               Submit
            </Button>

            {" "}

            <Button id="add5RowsButton" type="primary"
            style={{border: "1px solid lightgray"}} 
            onClick={() => {
               if (h.isMobile && activeSidebar) return // disable
               setRowsAmount(rowsAmount + 5) 
            }}>
               Add 5 Extra Rows
            </Button>
         </span>
      </span>
   </Form>
}
