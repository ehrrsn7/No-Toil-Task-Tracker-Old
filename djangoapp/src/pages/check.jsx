import React from "react"

export default function Check() {
   React.useEffect(() => {
      document.title = "Check"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])
   
   return <div id="Check">
      Check page content
   </div>
}