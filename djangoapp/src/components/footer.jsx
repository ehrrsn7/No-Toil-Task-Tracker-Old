import React from "react"
import logo from "../images/icons/logo.svg"
import { Tooltip } from "@mui/material"

export default function Footer() {
   return <div id="footer">
      <div>
         <p>Made by elijah harrison</p>
      </div>
      <div>
         <p>
            <a href="https://github.com/ehrrsn7" target="_blank" rel="noreferrer">
               github
            </a>
         </p>
         <p>
            <a href="https://instagram.com/ejhfotos" target="_blank" rel="noreferrer">
               instagram
            </a>
         </p>
      </div>

      <div id="footerReactIcon">
         <Tooltip title="Made using react.js">
            <button>
               <img className="App-logo" src={logo} width={50} alt="logo" />
            </button>
         </Tooltip>
      </div>
   </div> /* End Footer Div */
}