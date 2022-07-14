import React from "react"
import { useContext } from "../contexts/contextProvider"
import ToggleSidebarButton from "./toggleSidebarButton"

export default function Header() {
   const { activeSidebar } = useContext()

   return <header id="header" className="App-header">

      <ToggleSidebarButton />

      <h1 id="headerTitle" className={activeSidebar ? "activeSidebar" : ""} >
         Dashboard
      </h1>
   </header> /* End Header Div */
}