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

      // set filter lambda function according to param
      const filterLambda = {
         complete: () => row => row.status === 5,
         Complete: () => row => row.status === 5,
         completed: () => row => row.status === 5,
         Completed: () => row => row.status === 5,
         completedParts: () => row => row.status === 5,
         CompletedParts: () => row => row.status === 5,
         discarded: () => row => row.discarded,
         Discarded: () => row => row.discarded,
      }[filter] // error throws Key error and aborts here

      // do nothing if filtered list is empty
      if (todoModel.filter(filterLambda).length <= 0) {
         console.log(`No rows detected matching '${filter}'`)
         return
      }

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
