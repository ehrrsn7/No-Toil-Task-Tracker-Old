import React from "react"

export default function AccordionButton(props) {
   const { selected, setSelected, style, onClick, children } = props

   function onClickInherited(event) {
      // toggle [selected] (from props/parent)
      if (setSelected && selected !== undefined) setSelected(!selected)
            
      // any additional functionality (from props)
      if (onClick) onClick(event)
   }
   
   return <span onClick={onClickInherited} 
   style={{...style, display: "inline-row", marginRight: 0}}>

      {children && 
         <button style={{marginRight: "5px"}} className="AccordionButtonChild">
            {children} 
         </button>
      }

      <button className="AccordionButton"
      style={{
         width: 25,
         height: 25,
         borderRadius: 15,
         transform: selected ? "rotate(-90deg)" : "rotate(0)",
         transition: ".3s",
      }}
      >{"<"}</button>
   </span>
}