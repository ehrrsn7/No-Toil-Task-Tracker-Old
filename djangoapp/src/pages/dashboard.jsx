import React, { useEffect } from "react"
import image from "../images/lamppost.jpg"

export default function Dashboard() {
   useEffect(() => {
      document.title = "Dashboard"
   }, [])
   
   return <div id="dashboard">
      <p> Dashboard Content </p>

      <img src={image} alt="lamppost" />

      {window.innerWidth < 600 ? 
      <p>mobile width</p> : 
      <p>not mobile width</p>}
   </div>
}