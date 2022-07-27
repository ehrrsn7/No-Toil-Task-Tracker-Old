import React                     from "react"
import { Form, Input, Button }   from "antd"
import axios                     from "axios"
import * as h                    from "../../data/helperFunctions"
import { useContext }            from "../../contexts/contextProvider"
import { todo_api_url }          from "../../App"

function FilterNumberAutocomplete() {
   const [ val, setVal ] = React.useState("")

   return <select name="part_no" value={val} onChange={setVal}>
      {h.sampleFilterNames.map(key => {
         return <option value={key} key={key}>{key}</option>
      })}
   </select>
}

export default function CreateTodoForm(props) {
   const { screenSize } = useContext()
   const { style } = props
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
                  {screenSize < 600 ? "" : 
                     <td> part_no </td> 
                  }
                  {screenSize < 600 ? "" : 
                     <td> status </td> 
                  }
                  {screenSize < 600 ? "" : 
                     <td style={{width: 20, whiteSpace: "nowrap"}}> ! </td> 
                  }
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
                  {screenSize < 600 ? "" : 
                  <td>
                     <FilterNumberAutocomplete />
                  </td> }
                  
                  {screenSize < 600 ? "" : 
                  <td>
                     <select>
                        {h.statusNames.getArray().map(name => {
                           return <option key={name} value={0}>
                              {h.capitalize(name)}
                           </option>
                        })}
                     </select>
                  </td> }
                  {screenSize < 600 ? "" : 
                  <td>
                     <input type="checkbox" style={{height: 20}} />
                  </td> }
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
