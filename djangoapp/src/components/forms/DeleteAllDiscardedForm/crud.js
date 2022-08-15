import axios            from "axios"
import { todo_api_url } from "../../../App"

/************************************************************
 * Delete all Completed Items
 ************************************************************/
export async function deleteAllDiscarded(todoModel) {
   todoModel && todoModel.filter(rowData => rowData.discarded).forEach(
      rowData => {
         axios.delete(todo_api_url + rowData.id + '/')
         .then(request => console.log(
            `delete(${rowData.title}) success:`, 
            request
         )).catch(error => console.log(error))
      }
   )
}
