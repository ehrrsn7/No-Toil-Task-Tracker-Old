import React            from "react"
import * as Buttons     from "../components/buttons"
import { useContext }   from "../contexts/contextProvider"
import {CompletedPartsTable} from "../components/tables"

export default function CompletedParts() {
   const context = useContext()

   React.useEffect(() => {
      document.title = "Completed Parts"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])

   return <div id="CompletedParts">
      <span style={{display: "inline-flex"}}>
         <Buttons.BackToDashboardButton />
         <Buttons.PrintCompletedPartsButton />
      </span>
      <CompletedPartsTable context={context} />
   </div>
}