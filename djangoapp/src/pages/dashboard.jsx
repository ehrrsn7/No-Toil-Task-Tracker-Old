import React, { useEffect } from "react"

export default function Dashboard(props) {
   useEffect(() => {
      document.title = "Dashboard"
   }, [])
   
   return <div id="dashboard">
      <p> Dashboard Content </p>
   </div>
}