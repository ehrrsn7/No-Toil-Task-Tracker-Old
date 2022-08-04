import React                     from "react"
import { useContext }            from "../../contexts/contextProvider"
import { columnNames, sortBy }   from "../../data/sort"

export default function SortByDropdown() {
   const context = useContext()

   function onChange(event) {
      if (event.target.value === undefined) return
      sortBy(`${event.target.value}`.replace(" — ", '-'), context)
   }

   const columnNamesWithDirection = [
      ...columnNames.map(columnName => columnName + "-descending"),
      "————————————",
      ...columnNames.map(columnName => columnName + "-ascending"),
   ]

   return <div style={{padding: "1em 0 1em 1em"}}>
      <span style={{display: "inline-flex", gap: "1em"}}>
         <p>{context.sortedBy === '' ? "Sort By:" : "Sorted By:"}</p>
         <select onChange={onChange}>
            {columnNamesWithDirection.map(name => {
               return <option key={name}>
                  {name.replace('-', " — ")}
               </option>
            })}
         </select>
      </span>
   </div>
}
