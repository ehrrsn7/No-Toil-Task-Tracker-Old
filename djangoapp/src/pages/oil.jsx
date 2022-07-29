import React         from "react"
import { TodoTable } from "../components/tables"
import * as Buttons  from "../components/buttons"

export default function Oil() {
   const [ selectedTasks, setSelectedTasks ] = React.useState([])
   
   React.useEffect(() => {
      document.title = "Oil"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])
   
   return <div id="Oil">
      <span style={{display: "flex", justifyContent: "space-between"}}>
         <Buttons.BackToDashboardButton />
      </span>

      <TodoTable filter="Oil" 
      selectedTasks={selectedTasks} 
      setSelectedTasks={setSelectedTasks} 
      />
   </div>
}