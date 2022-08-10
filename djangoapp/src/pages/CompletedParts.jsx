import React                    from "react"
import { documentTitleSuffix }  from "../App"
import { useContext }           from "../contexts/contextProvider"
import * as Buttons             from "../components/buttons"
import { CompletedPartsTable }  from "../components/tables"

export default function CompletedParts() {
   const context = useContext()

   React.useEffect(() => {
      const currentDateTime = ' ' + new Date().toLocaleString()
      document.title = "Completed Parts"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent =
         document.title + documentTitleSuffix + currentDateTime
   }, [])

   return <div id={ document.title.replace(' ', '') }>
      <span>
         <Buttons.BackToDashboardButton />
         <Buttons.PrintCompletedPartsButton />
      </span> 
      
      <CompletedPartsTable context={ context } /> 
   </div>
}