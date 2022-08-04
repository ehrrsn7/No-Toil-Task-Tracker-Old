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
   matches: function(statusId, statusName) {
      return this.get(statusId).toLowerCase() === statusName.toLowerCase()
   }
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
   return (!window.screen.orientation.type.includes("landscape") && 
      deviceIsMobile) || (window.matchMedia && 
      window.matchMedia("(max-width: 600px)").matches)
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

export function exportPDF(query) {
   console.log(`exportPDF(${query})`)
   window.print()
}

export function getCurrentDate() {
   return new Date
}