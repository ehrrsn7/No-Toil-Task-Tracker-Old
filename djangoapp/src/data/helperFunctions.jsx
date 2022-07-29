import React                           from "react"
import ReactDOM                        from "react-dom/client"
import { isMobile as deviceIsMobile }  from "react-device-detect"

export function range(n) { return [...Array(n).keys()] }

export const statusNames = {
   0: "stamp",
   1: "spray",
   2: "check",
   3: "oil",
   4: "bag",
   5: "complete",
   get: function(statusId) {
      if (Number.isInteger(statusId) && statusId >= 0 && statusId <= 5)
         return this[statusId]
      else return "unknown status"
   },
   getArray: function() {
      let arr = []
      range(6).forEach(i => arr.push(this[i]))
      return arr
   },
   getUrl: function(statusId) {
      if (!range(6).includes(statusId)) return ""
      let statusName = this[statusId]
      if (statusName === "complete") statusName = "CompletedParts"
      return statusName
   },
   isOilStatus: function(statusId) {
      return this[statusId] === "oil"
   },
}

export const sampleFilterNames = [
   "3111",
   "320-21",
   "1110",
   "1227",
   "2430",
   "230-12",
   "280-21",
   "c90",
]

export function capitalize(string) {
   if (!(typeof string === 'string' || string instanceof String)) return ""
   let arr = string.split(' ')
   arr = arr.map(word => `${word[0].toUpperCase()}${word.substring(1)}`)
   return arr.join(' ')
}

export const isMobile = () => {
   return (
      !window.screen.orientation.type.includes("landscape") && 
      deviceIsMobile || 
      window.matchMedia && 
      window.matchMedia("(max-width: 600px)").matches
   )
}

export function onNonSidebarClick(context) {
   const { activeSidebar, setActiveSidebar } = context
   
   // don't close sidebar on click #nonSidebar
   if (!isMobile) return 

   // click outside #sidebar to hide it (mobile only)
   if (activeSidebar) setActiveSidebar(false)
}

export function insertAfter(newNode, existingNode) {
   existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

// FUNCTION: handle show/hide accordion
// Helper function for tables
// Inserts a tr with 100% of the width of the table which displays any 
// React node passed in {children} within the specified <tr> tags.
// If the new task is already selected, remove the tr we created for that task.
// param - rowData : {json}
// param - selectedTasks : [int]
// param - id : string
// param - children : React node
export function handleShowHideAccordion(rowData, selectedTasks, setSelectedTasks, id, children) {
   // define
   const rowId = id + "Row" + rowData.id
   const accId = "tmpRowData" + rowData.id

   // if rowData.id in selectedTasks, remove that accordion div
   if (selectedTasks.includes(rowData.id)) {
      // remove accordion div
      document.getElementById(accId).remove() 

      // remove id from selected tasks[]
      const arr = [...selectedTasks]
      const i = arr.indexOf(rowData.id) 
      if (i > -1) arr.splice(i, 1)
      setSelectedTasks(arr)
   }

   // else if rowData.id not in selectedTasks, add new accordion div
   else {
      const reactElement = <td colSpan="100%">{children}</td>

      const newNode = document.createElement("tr")
      newNode.className = id + "AccordionDiv"
      newNode.id = accId
      insertAfter(newNode, document.getElementById(rowId))

      const root = ReactDOM.createRoot(document.getElementById(accId))
      root.render(reactElement)

      const arr = [...selectedTasks]
      arr.push(rowData.id)
      setSelectedTasks(arr)
   }
}
