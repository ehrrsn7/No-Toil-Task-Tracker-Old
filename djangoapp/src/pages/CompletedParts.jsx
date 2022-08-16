import React                    from "react"
import { documentTitleSuffix }  from "../App"
import { useContext }           from "../contexts/contextProvider"
import * as Buttons             from "../components/buttons"
import { CompletedPartsTable }  from "../components/tables"

export default function CompletedParts() {
   const context = useContext()

   React.useEffect(() => {
      document.title = "Completed Parts"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title + 
         documentTitleSuffix + ' ' + new Date().toLocaleString()
   }, [])

   return <div id={ document.title.replace(' ', '') }>
      <span id="topButtons">
         <Buttons.PreviousPageButton to="Bag" />
         <Buttons.PrintAndDeleteAllCompleteButton />
      </span> 
      
      <CompletedPartsTable context={ context } /> 

      <span>
         <Buttons.BackToDashboardButton />
      </span>
   </div>
}