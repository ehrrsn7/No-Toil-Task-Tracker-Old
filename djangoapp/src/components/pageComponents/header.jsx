import React                     from "react"
import { NavLink }               from "react-router-dom"
import { Breadcrumb }            from "antd"
import { HomeOutlined }          from '@ant-design/icons'
import * as h                    from "../../data/helperFunctions"
import { useContext }            from "../../contexts/contextProvider"
import { ToggleSidebarButton }   from "../buttons"

function MyBreadcrumb() {
   return <div id="Breadcrumb" style={{display: "block"}}>
      <Breadcrumb separator=" " style={{display: "block"}}>
         <Breadcrumb.Item>
            <NavLink to="/">
               <HomeOutlined />
            </NavLink>
         </Breadcrumb.Item>
         {window.location.pathname.split('/').map(item => {
            return <Breadcrumb.Item>
               <NavLink to="/">
                  {item ? ' /  ' + item : ""}
               </NavLink>
            </Breadcrumb.Item>
         })}
      </Breadcrumb>
   </div>
}

export default function Header() {
   const { activeSidebar } = useContext()
   const [ date, setDate ] = React.useState(undefined)

   React.useEffect(() => {
      setInterval(() => {
         setDate(h.getCurrentDate())
      }, 1)
   }, [])

   return <header id="header" className="App-header">

      <div style={{display: "flex", flexDirection: "inline-row", justifyContent: "space-between"}}>
         <span>

            <ToggleSidebarButton />

            <h1 id="headerTitle" className={activeSidebar ? "activeSidebar" : ""} >
               fill in
            </h1>
         </span>

         {!h.isMobile() && <h1 className="" style={{textAlign: "right"}}>
            {date && date.toDateString()}<br></br>
            {date && date.toLocaleTimeString()}
         </h1>}
      </div>
   </header> /* End Header Div */
}