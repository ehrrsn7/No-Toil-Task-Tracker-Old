import React                     from "react"
import * as buttons              from "../components/buttons"
import { statusNames }           from "../data/helperFunctions"
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
   }, [ name ])
   
   return <div id={document.title}>
      <span style={{maxWidth: "60em"}}>
         <span style={{gap: "0"}}>
            <buttons.BackToDashboardButton />
            <button onClick={() => {
               window.location.pathname = statusNames.nextUrl(window)
            }}
            style={{
               height: "fit-content",
               padding: ".5em",
               margin: ".5em 0 .5em 0",
            }}>
               Go to {statusNames.next(
                  window.location.pathname.replace("/djangoapp/", '')
               )} 
               {" "}
               →
            </button>
         </span>
         <span>
            <div></div>
            <SortByDropdown />
         </span>
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