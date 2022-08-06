import React                     from "react"
import * as buttons              from "../components/buttons"
import { TodoTable }             from "../components/tables"
import { documentTitleSuffix }   from "../App"
import SortByDropdown            from "../components/dropdowns/SortByDropdown"

export default function TaskPageTemplate(props) {
   const { name, sets } = props
   const [ selectedTask, setSelectedTask ] = React.useState(-1)

   React.useEffect(() => {
      document.title = name
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title + documentTitleSuffix
   }, [])
   
   return <div id={document.title}>
      <span style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
         <buttons.BackToDashboardButton />
         <SortByDropdown />
      </span>

      <TodoTable filter={name} sets={sets}
      selectedTask={selectedTask} 
      setSelectedTask={setSelectedTask} 
      />
   </div>
}

export function Stamp() { return <TaskPageTemplate name="Stamp" sets={true} /> }
export function Spray() { return <TaskPageTemplate name="Spray" sets={true} /> }
export function Check() { return <TaskPageTemplate name="Check" /> }
export function Oil()   { return <TaskPageTemplate name="Oil" /> }
export function Bag()   { return <TaskPageTemplate name="Bag" /> }