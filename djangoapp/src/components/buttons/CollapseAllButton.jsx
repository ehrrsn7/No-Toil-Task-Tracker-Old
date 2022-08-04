import React from "react"

export default function CollapseAllButton(props) {
   const { selectedTask, setSelectedTask } = props

   return <div className="CollapseAllButton">
      <button onClick={() => {setSelectedTask(-1)}}
      style={{
         visibility: (selectedTask > 0 ? "visible" : "hidden"),
      }}>
         <p>-</p>
      </button> 
   </div>
}