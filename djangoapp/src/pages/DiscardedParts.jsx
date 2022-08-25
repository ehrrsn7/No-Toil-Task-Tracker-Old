import React                     from "react"
import { documentTitleSuffix }   from "../App"
import { useContext }            from "../contexts/contextProvider"
import * as Buttons              from "../components/buttons"
import { DiscardedPartsTable }   from "../components/tables"
import { Tooltip } from "@mui/material"

export default function DiscardedParts() {
   const context = useContext()

   React.useEffect(() => {
      document.title = "Discarded Parts"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title + 
         documentTitleSuffix + ' ' + new Date().toLocaleString()
   }, [])

   return <div id="DiscardedParts" className="table-width">
      <span id="topButtons">
         <Buttons.BackToDashboardButton />
         <Buttons.PrintAndDeleteAllDiscardedButton />
      </span> 
      
      <DiscardedPartsTable context={context} /> 

      <br></br>

      <Tooltip style={{width: "fit-content"}} title="Hello world!">
         <p>Notes:</p>
      </Tooltip>

      <div contentEditable={true} />
   </div>
}