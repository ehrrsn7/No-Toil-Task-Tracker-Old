import React from "react"

export default function Spray() {
   React.useEffect(() => {
      document.title = "Spray"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])
   
   return <div id="Spray">
   
   </div>
}