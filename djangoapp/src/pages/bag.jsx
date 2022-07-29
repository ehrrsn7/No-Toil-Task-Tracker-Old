import React         from "react"
import { TodoTable } from "../components/tables"
import * as Buttons  from "../components/buttons"

export default function Bag() {
   const [ selectedTasks, setSelectedTasks ] = React.useState([])

   React.useEffect(() => {
      document.title = "Bag"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])
   
   return <div id="Bag">
      <span style={{display: "flex", justifyContent: "space-between"}}>
         <Buttons.BackToDashboardButton />
      </span>

      <TodoTable filter="Bag" 
      selectedTasks={selectedTasks} 
      setSelectedTasks={setSelectedTasks} 
      />
   </div>
}