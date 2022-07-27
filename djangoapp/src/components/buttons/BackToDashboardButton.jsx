import React         from "react"
import { NavLink }   from "react-router-dom"

export default function BackToDashboardButton() {
   return <div className="BackToDashboardButton">
      <NavLink to="/">
         <button>
            ← Back to dashboard
         </button>
      </NavLink>
   </div>
}
