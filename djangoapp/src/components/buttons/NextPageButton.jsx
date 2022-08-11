import React            from "react"
import { NavLink }      from "react-router-dom"
import { statusNames }  from "../../data/helperFunctions"
import { useContext }   from "../../contexts/contextProvider"

export default function NextPageButton(props) {
   const { to } = props
   const { activeSidebar } = useContext()

   const nextUrl = () => to ?? statusNames.nextUrl(window)

   const nextUrlName = () => {
      if ([to, statusNames.nextUrl(window)].includes("CompletedParts"))
         return "Completed Parts"
      else return nextUrl()
   }

   return <button style={{
      height: "fit-content",
      padding: ".5em",
      margin: ".5em 0 .5em 0",
   }}>
      <NavLink to={"/" + nextUrl()} onClick={event => {
         if (activeSidebar) event.preventDefault()
      }}>
         Go to {nextUrlName()} {" "} →
      </NavLink>
   </button>
}