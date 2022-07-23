import React from "react"
import { useContext } from "../contexts/contextProvider"

export function TodoModelRows(props)  {
   const context = useContext()

   React.useEffect(() => {
      fetch("http://192.168.0.16:8000/api/todo/?format=json")
         .then(request => request.json())
         .then(data => { 
            if (data !== undefined) context.setTodoModel(data) 
         })
   }, [])
   
   return (!Array.isArray(context.todoModel) ? <tr><td>Not valid data</td></tr> :
      context.todoModel.map(row => <tr key={row.id}>
         <td>{row.id}</td>
         <td>{row.title}</td>
         <td>{row.part_no}</td>
         <td>{row.quantity}</td>
         <td>{row.lastModified}</td>
         <td>{row.completed}</td>
      </tr>)
   )
}

export default function Dashboard() {
   const context = useContext()

   React.useEffect(() => {
      document.title = "Dashboard"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])

   return <div id="Dashboard">

      priority value?

      <div id="messages"></div>

      <table id="DashboardTable">
         <thead>
            <tr>
               <td className="titleColumn">
                  id
               </td>
               <td>
                  title
               </td>
               <td>
                  part_no
               </td>
               <td>
                  quantity
               </td>
               <td>
                  lastModified
               </td>
               <td>
                  completed
               </td>
            </tr>
         </thead>
         <tbody>
            {<TodoModelRows />}
         </tbody>
      </table>
   </div>
}