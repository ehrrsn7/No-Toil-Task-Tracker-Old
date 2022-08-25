import React                     from "react"
import CreateTodoFormRow         from "./CreateTodoFormRow"
import CreateTodoFormHeaderRow   from "./CreateTodoFormHeaderRow"
import { onSubmit, onReset }     from "./crud"
import { useContext }            from "../../../contexts/contextProvider"
import * as h                    from "../../../data/helperFunctions"

const bottomButtonsStyle = {
   border: "1px solid lightgray",
   padding: ".5em"
}

export default function CreateTodoForm({style}) {
   const { activeSidebar } = useContext()
   const [ rowsAmount, setRowsAmount ] = React.useState(5)

   return <form id="CreateTodoForm" style={style} 
   onSubmitCapture={onSubmit} onReset={onReset}>
      <span>
         <table>

            <thead>
               <CreateTodoFormHeaderRow />
            </thead>

            <tbody>
               {h.range(rowsAmount).map(
                  i => <CreateTodoFormRow key={i} i={i} />
               )}
            </tbody>
         </table>
      </span>

      {/* Bottom Buttons Bar */}
      <span style={{marginTop: "1em", gap: "1em"}}>

         {/* Submit Button */}
         <button id="submitCreateTodoFormButton" style={bottomButtonsStyle}>
            <input type="submit" value="Submit" />
         </button>

         {/* Reset All Input Fields Button */}
         <button style={bottomButtonsStyle}>
            <input type="reset" value="Reset" />
         </button>

         {/* Spacer */}
         <div style={{flexGrow: 1}}></div>

         {/* Add 5 Rows Button */}
         <button id="add5RowsButton" type="primary"
         style={bottomButtonsStyle} 
         onClick={() => {
            if (h.isMobile && activeSidebar) return // disable
            setRowsAmount(rowsAmount + 5) 
         }}>
            Add 5 Extra Rows
         </button>
      </span>
   </form>
}
