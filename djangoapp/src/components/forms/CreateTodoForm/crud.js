import axios            from "axios"
import { todo_api_url } from "../../../App"

/************************************************************
 * On CreateTodoForm Submit
 ************************************************************/
export async function onSubmit(event) {
   if (!event.target.elements) return
   const elements = Array.from(event.target.elements)

   let chunks = []

   elements.forEach(element => {

      // ignore anything except for the values we'll submit in our form
      if (!(String(element.id).includes("RowMid") ||
            String(element.id).includes("RowStart"))) return // continue

      // new chunk
      if (!chunks.length || String(element.id).includes("RowStart"))
         chunks.push([])

      // add each new value to last chunk
      chunks[chunks.length - 1].push(element)
   })

   chunks = chunks.filter(
      // only parse when 'title' field exists, use default for the rest
      chunk => chunk[0].value !== ''

   ).map(chunk => {
      // parse chunk into data
      const chunkObj = {}
      
      chunk.forEach(element => {
         let value = element.value
         
         // handle sets to quantity
         if (["quantity"].includes(element.name)) {
            if (isNaN(value) || value <= 0) value = 1 // default 1 
            value *= 18 // sets to quantity
         }
         
         // handle sets to quantity
         if (["status"].includes(element.name)) {
            if (typeof value === "string") value = parseInt(value)
            if (isNaN(value)) console.warn("status val parsing error")
            if (value < 0 || value > 5) value = 0 // min-max
         }
         
         // handle str to bool (toOil/highPriority)
         if (["toOil", "highPriority"].includes(element.name)) {
            if (typeof value === "string") 
               value = value.toLowerCase() === "true"
            else console.warn("non-string boolean repr", value)
         }
         
         chunkObj[element.name] = value
      })

      console.table(chunkObj)
      return chunkObj
   }).filter(element => element !== undefined)

   // pull the trigger
   chunks.forEach(chunk => {
      axios.post(todo_api_url, chunk)
      .then(request => console.log(request))
      .catch(error => console.warn(error))
   })

   // this just makes things nicer, and prevents duplicates
   // window.location.reload()
}