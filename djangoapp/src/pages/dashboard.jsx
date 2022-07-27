import React                  from "react"
import { CollapseAllButton }  from "../components/buttons"
import { CreateTodoForm }     from "../components/forms"
import { DashboardTodoTable } from "../components/tables"

export default function Dashboard() {
   const [ selectedTasks,setSelectedTasks ] = React.useState([])
   const [ addMore, setAddMore ] = React.useState(false)

   React.useEffect(() => {
      document.title = "Dashboard"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])

   return <div id="Dashboard">
      <span style={{display: "flex", justifyContent: "space-between"}}>
         {/* Buttons Here? */}
      </span>

      <DashboardTodoTable 
      selectedTasks={selectedTasks} 
      setSelectedTasks={setSelectedTasks} 
      />

      <br></br>

      <button className="add" onClick={() => { setAddMore(!addMore) }}>
         {addMore ? "Cancel" : "Add more" }
      </button>

      <div id="addMoreDropdown" style={{
         visibility: addMore ? "visible" : "hidden",
      }}>
         <CreateTodoForm />
      </div>

   </div>
}