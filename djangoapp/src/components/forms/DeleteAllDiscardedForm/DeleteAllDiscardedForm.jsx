import React                  from "react"
import { isDarkMode }         from "../../../data/helperFunctions"
import { deleteAllDiscarded } from "./crud"

export default function DeleteAllDiscardedForm(props) {
   return <form id="DeleteDiscardedPartsForm">
      <button 
      style={{...props.style, 
         transition: "1s", 
         background: !isDarkMode(window) ? "pink" : "darkred",
         border: !isDarkMode(window) ? "red" : "darkred",
      }} 
      onClick={() => {
         deleteAllDiscarded(todoModel)
         window.location.reload()
      }}> 
      
         <p>Remove All Discarded Parts</p>

      </button>
   </form>
}