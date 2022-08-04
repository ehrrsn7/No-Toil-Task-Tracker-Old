import React                     from "react"
import { documentTitleSuffix }   from "../App"
import { CreateTodoForm }        from "../components/forms"
import { DashboardTodoTable }    from "../components/tables"

export default function Dashboard() {
   const [ selectedTask, setSelectedTask ] = React.useState(-1)
   const [ addMore, setAddMore ] = React.useState(false)

   React.useEffect(() => {
      document.title = "Dashboard"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title + documentTitleSuffix
   }, [])
   
   return <div id={document.title}>
      <span style={{display: "flex", justifyContent: "space-between"}}>
         {/* Buttons Here? */}
      </span>

      <DashboardTodoTable 
      selectedTask={selectedTask} 
      setSelectedTask={setSelectedTask} 
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