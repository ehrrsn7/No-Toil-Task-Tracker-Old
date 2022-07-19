import React from "react"
import image from "../images/lamppost.jpg"

export default function Dashboard() {
   React.useEffect(() => {
      document.title = "Dashboard"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])
   
   return <div id="dashboard">
      <p> Dashboard Content </p>

      <img src={image} alt="lamppost" />

      {window.innerWidth < 600 ? 
      <p>mobile width</p> : 
      <p>not mobile width</p>}
   </div>
}