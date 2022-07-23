import React from "react"

export default function Stamp() {
   React.useEffect(() => {
      document.title = "Stamp"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])
   
   return <div id="stamp">
   
   </div>
}