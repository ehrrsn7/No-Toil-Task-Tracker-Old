import React                     from "react"
import { NavLink }               from "react-router-dom"
import { Breadcrumb }            from "antd"
import { HomeOutlined }          from '@ant-design/icons'
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

   return <header id="header" className="App-header">

      <div>
         <ToggleSidebarButton />

         <h1 id="headerTitle" className={activeSidebar ? "activeSidebar" : ""} >
            fill in
         </h1>
      </div>
   </header> /* End Header Div */
}