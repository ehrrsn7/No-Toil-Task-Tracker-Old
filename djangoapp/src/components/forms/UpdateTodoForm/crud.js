import axios            from "axios"
import { todo_api_url } from "../../../App"
import * as h           from "../../../data/helperFunctions"

function getPatchInfo(todoModel, newStatus, rowData) {
   const patchID = todoModel.filter(
      row => row.status === newStatus).filter(
         row => row.title === rowData.title)[0].id
   
   const patchQuantity = todoModel.filter(
      row => row.status === newStatus).filter(
         row => row.title === rowData.title)[0].quantity
         
   console.log(patchID, patchQuantity)
   return { patchID, patchQuantity }
}

/************************************************************
 * Update Todo Form
 ************************************************************/
async function updateNormal(todoModel, rowData, newStatus, quantity) {
   const { patchID, patchQuantity } = 
      getPatchInfo(todoModel, newStatus, rowData)

   axios.patch(`${todo_api_url}${patchID}/`, {
      quantity: patchQuantity + quantity,
   }).then(request => {console.log(
      `add the quantity [${quantity}] of *this [${rowData.title}: 
         ${rowData.id}] to the quantity of the task with the same name that 
         is in the next status [${patchID}] [${patchQuantity}]`,
      request
   )}).catch(error => {throw new Error(error)}) // let callee catch

   // clean up
   axios.delete(`${todo_api_url}${rowData.id}/`)
   .then(request => {console.log("clean up old row", request)})
   .catch(error => {throw new Error(error)})
}

async function updateLessThanExpected(
   todoModel, rowData, newStatus, quantity, expected
) {
   const { patchID, patchQuantity } = 
      getPatchInfo(todoModel, newStatus, rowData)

   await axios.patch(`${todo_api_url}${patchID}/`, {
      quantity: patchQuantity + quantity,
   }).then(request => {console.log(
      `update new task [${patchID}] with status += 1 to be it.quantity 
         [${patchQuantity}] + this.quantity [${quantity}]`, 
      request
   )}).catch(error => {throw new Error(error)})
   
   await axios.patch(`${todo_api_url}${rowData.id}/`, {
      ...rowData,
      quantity: expected - quantity,
   }).then(request => {console.log(
      "current task expected -= quantity", 
      request
   )}).catch(error => {throw new Error(error)})
}

async function updateGreaterThanExpected(
   todoModel, rowData, newStatus, quantity
) {
   const { patchID, patchQuantity } = 
      getPatchInfo(todoModel, newStatus, rowData)

   await axios.patch(`${todo_api_url}${patchID}/`, {
      quantity: patchQuantity + quantity, /* new quantity */
   })
   .then(request => console.log(
      `task expected += extra (or rather expected <- quantity),`,
      `and add it to task in the next status list [${patchID}]`, 
      request
   ))

   // clean up
   axios.delete(`${todo_api_url}${rowData.id}/`)
   .then(request => {console.log("clean up old row", request)})
   .catch(error => {throw new Error(error)})
}

/************************************************************
 * Shift Todo Form 
 * (Same as update, but no identical task in next status section)
 ************************************************************/
async function shiftNormal(rowData, newStatus) {
   await axios.patch(`${todo_api_url}${rowData.id}/`, { // else
      ...rowData,
      status: newStatus,
   }).then(request => {console.log(
      "update task status += 1 (and ++1 if skipping oil)", 
      request
   )}).catch(error => {throw new Error(error)})
}

async function shiftLessThanExpected(rowData, quantity, expected) {
   await axios.post(`${todo_api_url}`, { // else
      ...rowData, 
      id: undefined, // let django model assign new id for the new object
      quantity: quantity,
status: rowData.status + 1,
   }).then(request => {console.log(
      "new task of quantity with status += 1", 
      request
   )}).catch(error => {throw new Error(error)})
   
   await axios.patch(`${todo_api_url}${rowData.id}/`, {
      ...rowData,
      quantity: expected - quantity,
   }).then(request => {console.log(
      "current task expected -= quantity", 
      request
   )}).catch(error => {throw new Error(error)})
}

async function shiftGreaterThanExpected(rowData, quantity) {
   await axios.patch(`${todo_api_url}${rowData.id}/`, {
      ...rowData,
      quantity: quantity, // new quantity
      status: rowData.status + 1,
   }).then(request => {console.log(
      "task expected += extra (or rather expected <- quantity),",
      "and status += 1", 
      request
   )})
}

export async function onCreate(newStatus, rowData, numVal) {
   try { 
      if (!(numVal && rowData && newStatus))
         throw Error("Undefined Parameters")
   } catch(error) { console.log(error); return }

   const quantity = parseInt(numVal)
   const expected = parseInt(rowData.quantity)
   
   if (quantity === expected)
      shiftNormal(rowData, newStatus)
   
   else if (quantity < expected)
      shiftLessThanExpected(rowData, quantity, expected)
   
   else if (quantity > expected)
      shiftGreaterThanExpected(rowData, quantity) 
}

export async function onUpdate(activeSidebar, todoModel, rowData, numVal) {
   if (h.isMobile && activeSidebar) return // disable

   console.log({
      "activeSidebar": activeSidebar,
      "todoModel": todoModel,
      "rowData": rowData,
      "numVal": numVal
   })

   const quantity = parseInt(numVal)
   const expected = parseInt(rowData.quantity)
   let newStatus = rowData.status + 1
   if (!rowData.toOil && newStatus === 3) newStatus++
   if (newStatus > 5) throw new Error("cannot update status above 5")

   if (!todoModel.filter(
   row => row.status === newStatus).filter(
   row => row.title === rowData.title).length > 0) {
      onCreate(newStatus, rowData, numVal)
      return
   }

   if (quantity === expected)
      updateNormal(
         todoModel, rowData, newStatus, quantity)

   if (quantity < expected)
      updateLessThanExpected(
         todoModel, rowData, newStatus, quantity, expected)

   if (quantity > expected)
      updateGreaterThanExpected(
         todoModel, rowData, newStatus, quantity)

}

export async function onDiscard(activeSidebar, todoModel, rowData) {
   if (h.isMobile && activeSidebar) return // disable
   todoModel.filter(r => r.id === rowData.id).forEach(task => {
      axios.patch(`${todo_api_url}${task.id}/`, { discarded: true })
      .then(request => console.log(request))
      .catch(error => {throw new Error(error)})
   })
}
