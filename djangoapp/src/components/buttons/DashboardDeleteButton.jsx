import React            from "react"
import { Tooltip }      from "@mui/material"
import { todo_api_url } from "../../App"

export default function DashboardDeleteButton(props) {
   const { id } = props

   return <button className="DeleteButton">
      <Tooltip title="note, this will lead you to the api (backend) application to permanently delete this task. This is not reversible -- only use for input typos, canceled orders, etc.">
         <a href={todo_api_url + id} target="_blank" rel="noreferrer">
            Delete Task
         </a>
      </Tooltip>
   </button>
}