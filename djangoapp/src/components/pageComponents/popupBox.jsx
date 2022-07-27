import React            from "react"
import { useContext }   from "../../contexts/contextProvider"

export default function PopupBox(props) {
   const context = useContext()

   function exitPopup() {
      context.setAddMoreIsOpen(false)
   }

   return <div id={props.id} className="Popup" style={props.style}>
      <div className="Background" onClick={exitPopup} />
      <div className="Box">
         <button className="CloseButton" onClick={exitPopup}>x</button>
         <div>{props.children}</div>
      </div>
   </div>
}