import React            from "react"
import { todo_api_url } from "../../App"

// placeholder object that fetch.catch will set context.todoModel as
export const invalidRow = {
   id: -1,
   title: "invalidRow",
   quantity: -1,
   status: -1,
}

export function isInvalid(todoModel) {
   console.table({
      "is array": Array.isArray(todoModel),
      "has at least one obj": todoModel.length > 0,
      "is invalidRow obj": todoModel[0] === invalidRow
   })
   if (!Array.isArray(todoModel)) return true
   if (todoModel.length > 0 && todoModel[0] === invalidRow) return true
   console.log("todoModel invalidRow object not found")
   return false
}

export default function InvalidRow() {

   return <tr className="InvalidRow">        
      <td colSpan={"100%"}>
         <p> Not valid data </p>
         <a href={todo_api_url} target="_blank" rel="noreferrer">
            <p> Failed to fetch data from {todo_api_url} </p>
         </a>
      </td>
   </tr>
}