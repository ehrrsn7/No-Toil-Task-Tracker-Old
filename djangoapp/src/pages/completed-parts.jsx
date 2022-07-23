import React from "react"

export default function CompletedParts(props) {
   React.useEffect(() => {
      document.title = "Completed Parts"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])

   return <div id="CompletedParts">
      Completed Parts Page
   </div>
}