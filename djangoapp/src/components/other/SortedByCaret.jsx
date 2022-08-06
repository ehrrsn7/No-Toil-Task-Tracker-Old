import React from "react"

export default function SortedByCaret(props) {
   const { sortedBy, columnName } = props
   if (typeof sortedBy !== "string" || 
      typeof columnName !== "string" ||
      !sortedBy.toLowerCase().includes(columnName.toLowerCase())
   ) return <></>

   if (sortedBy.toLowerCase().includes("ascending")) 
      return <p style={{transform: "rotate(90deg)"}}>{"<"}</p>

   if (sortedBy.toLowerCase().includes("descending")) 
      return <p style={{transform: "rotate(-90deg)"}}>{"<"}</p>
}
