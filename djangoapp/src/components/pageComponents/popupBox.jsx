import React            from "react"
import { useContext }   from "../../contexts/contextProvider"
import { isMobile }     from "../../data/helperFunctions"

export default function PopupBox(props) {
   const { activeSidebar, setAddMoreIsOpen } = useContext()

   function exitPopup() {
      if (isMobile && activeSidebar) return // disable
      setAddMoreIsOpen(false)
   }

   return <div id={props.id} className="Popup" style={props.style}>
      <div className="Background" onClick={exitPopup} />
      <div className="Box">
         <button className="CloseButton" onClick={exitPopup}>x</button>
         <div>{props.children}</div>
      </div>
   </div>
}