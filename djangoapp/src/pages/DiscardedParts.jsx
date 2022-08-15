import React                     from "react"
import { documentTitleSuffix }   from "../App"
import { useContext }            from "../contexts/contextProvider"
import * as Buttons              from "../components/buttons"
import { DiscardedPartsTable }   from "../components/tables"

export default function DiscardedParts() {
   const context = useContext()

   React.useEffect(() => {
      document.title = "Discarded Parts"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title + 
         documentTitleSuffix + ' ' + new Date().toLocaleString()
   }, [])

   return <div id={ document.title.replace(' ', '') }>
      <span id="topButtons">
         <Buttons.BackToDashboardButton />
         <Buttons.PrintAndDeleteAllDiscardedButton />
      </span> 
      
      <DiscardedPartsTable context={context} /> 
   </div>
}