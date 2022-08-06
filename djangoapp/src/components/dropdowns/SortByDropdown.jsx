import React                     from "react"
import { useContext }            from "../../contexts/contextProvider"
import { isMobile } from "../../data/helperFunctions"
import { columnNames, sortBy }   from "../../data/sort"

export default function SortByDropdown() {
   const context = useContext()
   const { activeSidebar, sortedBy } = context

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
      <span>
         <p>{sortedBy === '' ? "Sort By:" : "Sorted By:"}</p>
         <select value={sortedBy} onChange={onChange} disabled={isMobile && activeSidebar}>
            {columnNamesWithDirection.map(name => {
               return <option key={name} value={name}>
                  {name.replace('-', " — ")}
               </option>
            })}
         </select>
      </span>
   </div>
}
