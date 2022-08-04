import axios            from "axios"
import { todo_api_url } from "../../App"

/************************************************************
 * Update Todo Form
 ************************************************************/
export async function updateTodoNormal(todoModel, rowData, newStatus, quantity) {
   const patchID = todoModel.filter(
      row => row.status === newStatus).filter(
         row => row.title === rowData.title)[0].id

   const patchQuantity = todoModel.filter(
      row => row.status === newStatus).filter(
         row => row.title === rowData.title)[0].quantity

   axios.patch(`${todo_api_url}${patchID}/`, {
      quantity: patchQuantity + quantity,
   })
   .then(request => {

      console.log(
         `add the quantity [${quantity}] of *this [${rowData.title}: ${rowData.id}]`,
         `to the quantity of the task with the same name that is in`,
         `the next status [${patchID}] [${patchQuantity}]`,
         request
      )
   })
   .catch(error => console.warn(error))

   // clean up
   axios.delete(`${todo_api_url}${rowData.id}/`)
   .then(request => {console.log("clean up old row", request)})
   .catch(error => console.warn(error))
}

export async function updateTodoLessThanExpected
   (todoModel, rowData, newStatus, quantity, expected) 
{
   const patchID = todoModel.filter(
      row => row.status === newStatus).filter(
         row => row.title === rowData.title)[0].id

   const patchQuantity = todoModel.filter(
      row => row.status === newStatus).filter(
         row => row.title === rowData.title)[0].quantity

   await axios.patch(`${todo_api_url}${patchID}/`, {
      quantity: patchQuantity + quantity,
   })
   .then(request => {
      console.log(
         `update new task [${patchID}] with status += 1 to be`,
         `it.quantity [${patchQuantity}] + this.quantity [${quantity}]`, 
         request
      )
   })
   
   await axios.patch(`${todo_api_url}${rowData.id}/`, {
      ...rowData,
      quantity: expected - quantity,
   })
   .then(request => {
      console.log(
         "current task expected -= quantity", 
         request
      )
   })
   .catch(error => console.warn(error))
}

export async function updateTodoGreaterThanExpected(todoModel, rowData, newStatus, quantity) {
   const patchID = todoModel.filter(
      row => row.status === newStatus).filter(
         row => row.title === rowData.title)[0].id

   const patchQuantity = todoModel.filter(
      row => row.status === newStatus).filter(
         row => row.title === rowData.title)[0].quantity

   await axios.patch(`${todo_api_url}${patchID}/`, {
      quantity: quantity /* new quantity */ + patchQuantity,
   })
   .then(request => console.log(
         `task expected += extra (or rather expected <- quantity),`,
         `and add it to task in the next status list [${patchID}]`, 
         request
   ))

   // clean up
   axios.delete(`${todo_api_url}${rowData.id}/`)
   .then(request => {console.log("clean up old row", request)})
   .catch(error => console.warn(error))
}

/************************************************************
 * Shift Todo Form 
 * (Same as update, but no identical task in next status section)
 ************************************************************/
export async function shiftTodoNormal(rowData, newStatus) {

   await axios.patch(`${todo_api_url}${rowData.id}/`, { // else
      ...rowData,
      status: newStatus,
   })
   .then(request => {
      console.log(
         "update task status += 1 (and ++1 if skipping oil)", 
         request
      )
   })
   .catch(error => console.warn(error))
}

export async function shiftTodoLessThanExpected(rowData, quantity, expected) {
   
   await axios.patch(`${todo_api_url}${rowData.id}/`, { // else
      ...rowData,
      quantity: quantity,
      status: rowData.status + 1,
   })
   .then(request => {
      console.log(
         "new task of quantity with status += 1", 
         request
      )
   })
   
   await axios.patch(`${todo_api_url}${rowData.id}/`, {
      ...rowData,
      quantity: expected - quantity,
   })
   .then(request => {
      console.log(
         "current task expected -= quantity", 
         request
      )
   })
   .catch(error => console.warn(error))
}

export async function shiftTodoGreaterThanExpected(rowData, quantity) {

   await axios.patch(`${todo_api_url}${rowData.id}/`, {
      ...rowData,
      quantity: quantity, // new quantity
      status: rowData.status + 1,
   })
   .then(request => {
      console.log(
         "task expected += extra (or rather expected <- quantity),",
         "and status += 1", 
         request
      )
   })
}

/************************************************************
 * Todo Reset (Update)
 ************************************************************/
export async function todoResetUpdate(todoModel, newStatus, rowData) {
   const patchID = todoModel.filter(row => row.status === newStatus).filter(row => row.title === rowData.title)[0].id

   const patchQuantity = todoModel.filter(row => row.status === newStatus).filter(row => row.title === rowData.title)[0].quantity

   await axios.patch(todo_api_url + patchID + '/', {
      quantity: patchQuantity + rowData.quantity,
   })
   .then(request => console.log(
      `reset task (adding this.quantity [${rowData.quantity}] to task`,
      `with same name of status 0 -->>quantity [${patchQuantity}]:`,
      `[${rowData.quantity + patchQuantity}])`, 
      request
   ))
   .catch(error => console.warn(error))
}

/************************************************************
 * Todo Reset (Shift)
 ************************************************************/
export async function todoResetShift(newStatus, rowData) {
   await axios.patch(todo_api_url + rowData.id + '/', {
      status: newStatus,
   })
   .then(request => console.log("reset task", request))
   .catch(error => console.warn(error))
}

/************************************************************
 * Delete all Completed Items
 ************************************************************/
export async function deleteAllComplete(todoModel) {
   console.log(`deleteAllComplete(${todoModel})`)
   
   const debug = true
   if (debug)
      todoModel && todoModel.filter(rowData => rowData.status === 5).forEach(rowData => {

         axios.delete(todo_api_url + rowData.id + '/')
         .then(request => console.log(`delete(${rowData.title}) success:`, request))
         .catch(error => console.log(error))
      })
}