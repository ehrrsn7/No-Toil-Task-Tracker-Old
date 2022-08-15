import React                     from "react"
import { documentTitleSuffix }   from "../App"
import * as h                    from "../data/helperFunctions"
import * as buttons              from "../components/buttons"
import { SortByDropdown }        from "../components/dropdowns"
import { CreateTodoForm }        from "../components/forms"
import { DashboardTodoTable }    from "../components/tables"
import { useContext }            from "../contexts/contextProvider"
import { NavLink } from "react-router-dom"

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
      <span id="topButtons">
         <span style={{gap: "0"}}>
            <SortByDropdown />
            <buttons.NextPageButton to="Stamp" />
         </span>
      </span>

      <DashboardTodoTable 
      selectedTask={selectedTask} 
      setSelectedTask={setSelectedTask} 
      />

      <span id="bottomButtons">
         <button className="add" onClick={() => {
            if (h.isMobile && activeSidebar) return // disable
            setAddMore(!addMore)
         }}>
            {addMore ? "Cancel" : "Add more" }
         </button>

         <NavLink to="/DiscardedParts">
            <button>
               Go to Discarded Parts →
            </button>
         </NavLink>
      </span>

      <span id="addMoreDropdown" style={{
         visibility: addMore ? "visible" : "hidden",
      }}>
         <CreateTodoForm />
      </span>

   </div>
}