import React         from "react"
import { TodoTable } from "../components/tables"
import * as Buttons  from "../components/buttons"

export default function Spray() {
   const [ selectedTasks, setSelectedTasks ] = React.useState([])

   React.useEffect(() => {
      document.title = "Spray"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])
   
   return <div id="Spray">
      <span style={{display: "flex", justifyContent: "space-between"}}>
         <Buttons.BackToDashboardButton />
      </span>

      <TodoTable filter="Spray" 
      selectedTasks={selectedTasks} 
      setSelectedTasks={setSelectedTasks} 
      />
   
   </div>
}