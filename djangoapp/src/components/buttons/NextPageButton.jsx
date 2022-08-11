import React                     from "react"
import { NavLink }               from "react-router-dom"
import { statusNames, isMobile } from "../../data/helperFunctions"
import { useContext }            from "../../contexts/contextProvider"

export default function NextPageButton(props) {
   const { to } = props
   const { activeSidebar } = useContext()

   const nextUrl = () => to ?? statusNames.nextUrl(window)

   return <button style={{
      height: "fit-content",
      padding: ".5em",
      margin: ".5em 0 .5em 0",
   }}>
      <NavLink to={"/" + nextUrl()} onClick={event => {
         if (activeSidebar && isMobile()) event.preventDefault()
      }}>
         Go to {nextUrl()} {" "} →
      </NavLink>
   </button>
}