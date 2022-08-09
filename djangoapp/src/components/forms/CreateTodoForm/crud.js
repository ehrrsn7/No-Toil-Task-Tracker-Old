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

   chunks = chunks.filter(chunk => {
      // don't parse any empty fields
      return chunk[0].value !== '' && chunk[1].value !== ''
   
   }).map(chunk => {
      // parse chunk into data
      const chunkObj = {}
      
      chunk.forEach(element => {
         let value = element.value
         
         // handle sets to quantity
         if (element.id && element.id.toLowerCase().includes("quantity")) {
            value = parseInt(value) * 18
            console.log("quantity", value)
         }
         
         // handle str to bool
         if (["true", "false"].some(text => text.includes(element.value)))
            value = element.value === "true" 
         
         chunkObj[element.name] = value
      })

      return chunkObj
   }).filter(element => element !== undefined)

   // pull the trigger
   chunks.forEach(chunk => {
      axios.post(todo_api_url, chunk)
      .then(request => console.log(request))
      .catch(error => console.warn(error))
   })

   // this just makes things nicer, and prevents duplicates
   window.location.reload()
}