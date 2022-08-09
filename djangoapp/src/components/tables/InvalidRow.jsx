import React            from "react"
import { todo_api_url } from "../../App"

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