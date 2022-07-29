import React                  from "react"
import { useContext }         from "../../contexts/contextProvider"
import { todo_api_url }       from "../../App"
import * as h                 from "../../data/helperFunctions"
import { TodoAccordionDiv }   from "../accordionDivs"
import * as Buttons           from "../buttons"

export default function TodoTable(props) {
   const { selectedTasks, setSelectedTasks } = props
   const context = useContext()
   const { screenSize } = context
   const [ sortBy, setSortBy ] = React.useState("")
   const [ TaskListLength, setTaskListLength ] = React.useState(0)

   React.useEffect(() => {
      setSortBy("quantity")
      
      // is empty after filter?
      setTaskListLength(5)
   }, [ TaskListLength, setTaskListLength ])

   function sort(a, b) {
      switch (sortBy) {
         case "title":
            return a.title - b.title
         case "quantity":
            return a.quantity - b.quantity
         default:
            return a < b
      }
   }

   function handleAccordion(rowData) {
      h.handleShowHideAccordion(
         rowData, selectedTasks, 
         setSelectedTasks, "Todo", 
         <TodoAccordionDiv rowData={rowData} screenSize={screenSize} />
      )
   }

   return <table id={props.filter + "TodoTable"} className="TodoTable">

      <thead>
         <tr>
            <td className="titleColumn">  Title       </td>
            <td>                          Quantity    </td>
            <td>                          !    </td>
            <td align="right" >
               <Buttons.CollapseAllButton 
               selectedTasks={selectedTasks} 
               setSelectedTasks={setSelectedTasks} 
               />
            </td>
         </tr>
      </thead>

      {TaskListLength <= 0 ? <tbody>No rows to display</tbody> : 
      <tbody>
         {(Array.isArray(context.todoModel)) ? 

            context.todoModel.filter(
               rowData => h.statusNames.get(rowData.status) === props.filter.toLowerCase()
            ).sort((a, b) => {sort(a, b)}).map(rowData => {
               return <tr id={"TodoRow" + rowData.id} key={rowData.id}
               onClick={() => handleAccordion(rowData)}>
                  <td>{rowData.title}</td>
                  <td>{rowData.quantity}</td>
                  <td>{rowData.high_priority ? "True" : "False"}</td>
                  <td width={100}>
                     <button>
                        {selectedTasks.includes(rowData.id) ? "cancel" : "update"}
                     </button>
                     <Buttons.AccordionButton selected={selectedTasks.includes(rowData.id)} />
                  </td>
               </tr>
            }) : 

         <tr className="invalidRow">        
            <td>Not valid data</td>
            <td>
               <a href={todo_api_url} target="_blank" rel="noreferrer">
                  failed to fetch data from {todo_api_url}
               </a>
            </td>
         </tr>}
      </tbody>
   }
   </table>
}
