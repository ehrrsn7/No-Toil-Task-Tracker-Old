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
   
      <br></br>
      <br></br>
      <br></br>
      <h2>Notes</h2>
      <p>
         bag - no count (just done button)
      </p>

      <p>
         barcode scan to remove items from the build list one by one
         needs to be well-tested to handle anomalous scans (for example) 
      </p>

      <p>
         <a href="https://solveforum.com/forums/threads/solved-using-usb-barcode-scanner-in-django.252306/">
            Potential solution: code to incorperate barcode scanner 
            I think it would need to be something where this would be the
            desktop application implementation of the app
         </a>
      </p>

   </div>
}