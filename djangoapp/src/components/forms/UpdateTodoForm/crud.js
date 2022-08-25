import { patchRow, postRow, deleteRow, getPatchInfo } from "../crud"

/************************************************************
 * Update Todo Form
 ************************************************************/
async function updateNormal(
   todoModel, rowData, newStatus, quantity 
) {
   const { patchID, patchQuantity } = 
      getPatchInfo(todoModel, newStatus, rowData)

   const patchMessage = 
      `add the quantity [${quantity}] of *this [${rowData.title}: 
      ${rowData.id}] to the quantity of the task with the same name that 
      is in the next status [${patchID}] [${patchQuantity}]`
   
   const deleteMessage = `delete(${rowData.id}: ${rowData.title}) success:`
   
   const data = {
      id: patchID,
      quantity: patchQuantity + quantity,
   }

   await patchRow(data, patchMessage)

   await deleteRow(rowData, deleteMessage)
}

async function updateLessThanExpected(
   todoModel, rowData, newStatus, quantity, expected
) {
   const { patchID, patchQuantity } = 
      getPatchInfo(todoModel, newStatus, rowData)

   const nextStatusMessage = 
      `update new task [${patchID}] with status += 1 to be it.quantity 
      [${patchQuantity}] + this.quantity [${quantity}]`

   const currentStatusMessage = "current task expected -= quantity"

   const nextStatusData = {
      id: patchID,
      quantity: patchQuantity + quantity,
   }

   const currentStatusData = {
      ...rowData,
      quantity: expected - quantity,
   }

   await patchRow(nextStatusData, nextStatusMessage)

   await patchRow(currentStatusData, currentStatusMessage)
}

async function updateGreaterThanExpected(
   todoModel, rowData, newStatus, quantity 
) {
   const { patchID, patchQuantity } = 
      getPatchInfo(todoModel, newStatus, rowData)

   const data = {
      id: patchID,
      quantity: patchQuantity + quantity,
   }

   const message = 
      `task expected += extra (or rather expected <- quantity), 
      and add it to task in the next status list [${patchID}]`

   await patchRow(data, message)

   await deleteRow({id: rowData.id}, "clean up old row")
}

/************************************************************
 * Shift Todo Form 
 * (Same as update, but no identical task in next status section)
 ************************************************************/
async function shiftNormal(rowData, newStatus) {
   const data = {
      ...rowData,
      status: newStatus,
   }

   const message = "update task status += 1 (and ++1 if skipping oil)"

   await patchRow(data, message)
}

async function shiftLessThanExpected(rowData, quantity, expected) {
   const postData = {
      ...rowData,
      id: undefined, // let django model assign new id for the ect
      quantity: quantity,
      status: rowData.status + 1,
   }

   const patchData = {
      ...rowData,
      quantity: expected - quantity,
   }

   const postMessage = "new task of quantity with status += 1"
   const patchMessage = "current task expected -= quantity"

   await postRow(postData,  postMessage)

   await patchRow(patchData, patchMessage)
}

async function shiftGreaterThanExpected(rowData, quantity) {
   const data = {
      ...rowData,
      quantity: quantity, // new quantity
      status: rowData.status + 1,
   }

   const message =  
      "task expected += extra (or rather expected <- quantity)," +
      "and status += 1"

   await patchRow(data, message)
}

export async function onCreate(newStatus, rowData, numVal) {
   if (!(newStatus && rowData && numVal)) throw Error("Undefined Parameters")

   const quantity = parseInt(numVal)
   const expected = parseInt(rowData.quantity)
   
   if (quantity === expected)
      shiftNormal(rowData, newStatus)
   
   else if (quantity < expected)
      shiftLessThanExpected(rowData, quantity, expected)
   
   else if (quantity > expected)
      shiftGreaterThanExpected(rowData, quantity) 
}

export async function onUpdate(todoModel, rowData, numVal) {
   
   try {
      // define
      const quantity = parseInt(numVal)
      const expected = parseInt(rowData.quantity)

      let newStatus = rowData.status + 1
      if (!rowData.toOil && (rowData.status + 1) === 3) newStatus++
      if (newStatus > 5) // abort
         throw new Error("cannot update status above 5")

      // if item with same title/new status not found, create new
      const statusFound = r => r.status === newStatus
      const titleFound = r => r.title === rowData.title
      if (todoModel.filter(statusFound).filter(titleFound).length <= 0) {
         console.log("no matching task found to merge")
         onCreate(newStatus, rowData, numVal)
         return
      }

      // else update
      if (quantity === expected)
         await updateNormal(todoModel, rowData, newStatus, quantity)

      if (quantity < expected)
         await updateLessThanExpected(
            todoModel, rowData, newStatus, quantity, expected
         )

      if (quantity > expected)
         await updateGreaterThanExpected(
            todoModel, rowData, newStatus, quantity
         )
   }

   catch (error) {
      console.error(error)
   }
}

export async function onDiscard(rowData) {

   try {
      const data = {
         ...rowData,
         discarded: true
      }

      const message = `discarding ${data.id}:${data.title}`
      
      await patchRow(data, message)
   }
   
   catch(error) {
      console.error(error)
   }
}
