import React                        from "react"
import { Form, Button }             from "antd"
import CreateTodoFormRow            from "./CreateTodoFormRow"
import CreateTodoFormHeaderRow      from "./CreateTodoFormHeaderRow"
import { onSubmit }                 from "./crud"
import { useContext }               from "../../../contexts/contextProvider"
import * as h                       from "../../../data/helperFunctions"

export default function CreateTodoForm(props) {
   const { activeSidebar } = useContext()
   const { style } = props
   const [ rowsAmount, setRowsAmount ] = React.useState(5)
   const [ rowsStatus, setRowsStatus ] = React.useState({})
   const [ rowsToOil, setRowsToOil ]   = React.useState({})
   const [ highPriorityRows, setHighPriorityRows ] = React.useState({})

   return <Form id="CreateTodoForm" style={style} onSubmitCapture={onSubmit}>
      <span>
         <table>

            <thead>
               <CreateTodoFormHeaderRow />
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

         <span style={{marginTop: "1em"}}>
            <Button id="submitCreateTodoFormButton" type="primary" 
            style={{
               border: "1px solid lightgray",
               padding: ".5em"
            }} htmlType="submit" 
            onSubmit={onSubmit}>
               Submit
            </Button>

            <div></div>

            <Button id="add5RowsButton" type="primary"
            style={{
               border: "1px solid lightgray",
               padding: ".5em"
            }} 
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
