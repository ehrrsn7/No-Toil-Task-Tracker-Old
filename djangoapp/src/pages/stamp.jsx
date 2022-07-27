import React         from "react"
import { TodoTable } from "../components/tables"
import * as Buttons  from "../components/buttons"

export default function Stamp() {
   const [ selectedTasks, setSelectedTasks ] = React.useState([])

   React.useEffect(() => {
      document.title = "Stamp"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])
   
   return <div id="Stamp">
      <span style={{display: "flex", justifyContent: "space-between"}}>
         <Buttons.BackToDashboardButton />
      </span>

      <TodoTable filter="Stamp" 
      selectedTasks={selectedTasks} 
      setSelectedTasks={setSelectedTasks} 
      />

   </div>
}