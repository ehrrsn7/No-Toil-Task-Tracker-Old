import React from "react"

export default function Oil() {
   React.useEffect(() => {
      document.title = "Oil"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])
   
   return <div id="Oil">

      oil - no count (just done button)
   
   </div>
}