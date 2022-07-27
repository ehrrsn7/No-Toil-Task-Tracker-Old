import React from "react"

export default function CollapseAllButton(props) {
   const { selectedTasks, setSelectedTasks } = props

   function x() {
      setSelectedTasks([])
      document.querySelectorAll('[class*="AccordionDiv"]').forEach(item => {
         item.remove()
      })
   }

   return <div className="CollapseAllButton">
      <button onClick={x} 
      style={{
         visibility: (selectedTasks.length > 0 ? "visible" : "hidden"),
      }}>
         <p>-</p>
      </button> 
   </div>
}