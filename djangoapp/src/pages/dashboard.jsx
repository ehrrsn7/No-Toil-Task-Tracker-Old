import React                     from "react"
import { documentTitleSuffix }   from "../App"
import * as h                    from "../data/helperFunctions"
import { SortByDropdown }        from "../components/dropdowns"
import { CreateTodoForm }        from "../components/forms"
import { DashboardTodoTable }    from "../components/tables"
import { useContext }            from "../contexts/contextProvider"

export default function Dashboard() {
   const context = useContext()
   const { activeSidebar } = context
   const [ selectedTask, setSelectedTask ] = React.useState(-1)
   const [ addMore, setAddMore ] = React.useState(false)

   React.useEffect(() => {
      document.title = "Dashboard"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = 
         document.title + documentTitleSuffix
   }, [])
   
   return <div id={document.title}>
      <span style={{display: "flex", justifyContent: "space-between"}}>
         <div></div>
         <SortByDropdown />
      </span>

      <DashboardTodoTable 
      selectedTask={selectedTask} 
      setSelectedTask={setSelectedTask} 
      />

      <button className="add" onClick={() => {
         if (h.isMobile && activeSidebar) return // disable
         setAddMore(!addMore)
      }}
      style={{
         marginBottom: "1em",
         marginTop: "1em",
      }}>
         {addMore ? "Cancel" : "Add more" }
      </button>

      <div id="addMoreDropdown" style={{
         visibility: addMore ? "visible" : "hidden",
      }}>
         <CreateTodoForm />
      </div>

   </div>
}