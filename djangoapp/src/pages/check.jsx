import React         from "react"
import { TodoTable } from "../components/tables"
import * as Buttons  from "../components/buttons"

export default function Check() {
   const [ selectedTasks, setSelectedTasks ] = React.useState([])

   React.useEffect(() => {
      document.title = "Check"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])
   
   return <div id="Check">
      <span style={{display: "flex", justifyContent: "space-between"}}>
         <Buttons.BackToDashboardButton />
      </span>

      <TodoTable filter="Check" 
      selectedTasks={selectedTasks} 
      setSelectedTasks={setSelectedTasks} 
      />
     
      Check page content
   </div>
}