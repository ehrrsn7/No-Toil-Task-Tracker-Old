import React                     from "react"
import * as h                    from "../../data/helperFunctions"
import { useContext }            from "../../contexts/contextProvider"
import { ToggleSidebarButton }   from "../buttons"

export default function Header() {
   const { activeSidebar } = useContext()
   const [ date, setDate ] = React.useState(undefined)

   React.useEffect(() => {
      setInterval(() => {
         setDate(h.getCurrentDate())
      }, 1)
   }, [])

   return <header id="header" className="App-header">

      <span style={{padding: ".5em"}}>
         <span style={{width: "fit-content", gap: "1em"}}>
            <ToggleSidebarButton />

            <h1 id="headerTitle" className={activeSidebar ? "activeSidebar" : ""} >
               No Toil Task Tracker
            </h1>
         </span>

         <h1 className="hideOnMobile" style={{textAlign: "right"}}>
            {date && date.toDateString()}<br></br>
            {date && date.toLocaleTimeString()}
         </h1>
      </span>
   </header> /* End Header Div */
}