import axios            from "axios"
import { todo_api_url } from "../../App"
import { toast }        from "react-toastify"

// helper functions
function deleteRow(todoModel, setTodoModel, rowData) {
   axios.delete(todo_api_url + rowData.id + '/')
   .then(request => {
      console.log(`delete(${rowData.id}: ${rowData.title}) success:`, request)
      setTodoModel(todoModel.filter(row => row.id !== rowData.id))
   }).catch(error => {throw new Error(error)})
}

/************************************************************
 * Delete all Discarded Items
 ************************************************************/
export async function deleteAll(filter, todoModel, setTodoModel) {
   try {
      // known error conditions 
      if (todoModel === undefined) 
         throw new Error("'todoModel' is undefined")
      if (!Array.isArray(todoModel)) 
         throw new Error("'todoModel' not an Array")

      // do nothing if filtered list is empty
      if (todoModel.filter(filterLambda).length <= 0) {
         console.log(`No rows detected matching '${filter}'`)
         return
      }

      // set filter lambda function according to param
      const filterLambda = {
         complete: () => rowData => rowData.status === 5,
         Complete: () => rowData => rowData.status === 5,
         completed: () => rowData => rowData.status === 5,
         Completed: () => rowData => rowData.status === 5,
         completedParts: () => rowData => rowData.status === 5,
         CompletedParts: () => rowData => rowData.status === 5,
         discarded: () => rowData => rowData.discarded,
         Discarded: () => rowData => rowData.discarded,
      }[filter] // error throws Key error and aborts here

      todoModel.filter(filterLambda).forEach(rowData => {
         try { 
            // perform delete on each matching row
            deleteRow(todoModel, setTodoModel, rowData)
         } 
         catch (error) {
            // pass error to catch in upper scope
            throw new Error("[in forEach] " + error) 
         }
      })

   } catch (error) {
      console.error(error)
      toast(error)
   }
}
