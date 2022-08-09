import React                     from "react"
import * as Buttons              from "../components/buttons"
import { documentTitleSuffix }   from "../App"
import { useContext }            from "../contexts/contextProvider"
import {CompletedPartsTable}     from "../components/tables"

export default function CompletedParts() {
   const context = useContext()

   React.useEffect(() => {
      document.title = "Completed Parts"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = 
         document.title + documentTitleSuffix
   }, [])

   return <div id={document.title.replace(' ', '')}>
      <span>
         <Buttons.BackToDashboardButton />

         <Buttons.PrintCompletedPartsButton />            
      </span>
      <CompletedPartsTable context={context} />
   </div>
}