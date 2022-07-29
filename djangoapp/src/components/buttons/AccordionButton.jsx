import React from "react"

export default function AccordionButton(props) {
   const { selected, onClick } = props
   return <button className="AccordionButton" onClick={onClick} style={
      {
         width: 25,
         height: 25,
         borderRadius: 15,
         transform: selected ? "rotate(-90deg)" : "rotate(0)",
         transition: ".3s",
      }
   }>{"<"}</button>
}