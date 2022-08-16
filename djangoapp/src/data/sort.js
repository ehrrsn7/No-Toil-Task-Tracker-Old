import { todo_api_url } from "../App"
import { isMobile }     from "./helperFunctions"

export const columnNames = [
   "id",
   "quantity",
   "status",
   "toOil",
   "highPriority",
   "lastModified",
   "partNumber",
   "title",
]

function sortByCallback(sortCallback, context) {
   if (!Array.isArray(context.todoModel)) context.setTodoModel([])
   let newSortedBy = [...context.todoModel]
   newSortedBy.sort(sortCallback) // sorts the array *in place*
   context.setTodoModel(newSortedBy)
}

function performSort(descending, columnName, context) {
   columnName = columnName.toLowerCase()
   
   if (descending) {
      switch (columnName) {
         // numbers/booleans/dates
         case "id":
         case "quantity":
         case "status":
         case "toOil":
         case "highpriority":
         case "lastmodified":
            sortByCallback((a, b) => a[columnName] - b[columnName], context)
            break
         
         // text
         case "partnumber":
         case "title":
            sortByCallback(
               (a, b) => a[columnName].localeCompare(b[columnName]), 
               context
            )
            break

         default:
            console.log("'columnName' - descending invalid:", columnName)
            break
      }
   }
   
   else {
      switch (columnName) {
         // numbers/booleans/dates
         case "id":
         case "quantity":
         case "status":
         case "toOil":
         case "highpriority":
         case "lastmodified":
            sortByCallback((b, a) => a[columnName] - b[columnName], context)
            break
         
         // text
         case "partnumber":
         case "title":
            sortByCallback(
               (b, a) => a[columnName].localeCompare(b[columnName]), 
               context
            )
            break

         default:
            console.log("'columnName' - ascending invalid:", columnName)
            break
      }
   }
}

export function sortBy(which, context) {
   const { activeSidebar } = context
   if (isMobile() && activeSidebar) return // disable

   // exception handling: undefined values
   try {
      if (context === undefined) throw Error(
         "context not defined " + 
         "(check to see if context was passed in as a parameter)"
      )

      if (!Array.isArray(context.todoModel)) throw Error(
         "Context.todoModel is not iterable... " + 
         "please wait for the application to fetch data from " + 
         todo_api_url + " and set it in the global context."
      )
   }
   catch (error) {
      console.warn("Error in sortBy(str, context):", error)
      return
   }

   // strip column names
   const contextSortedBy = 
      context.sortedBy.replace("-descending", '').replace("-ascending", '')
   const whichSortedBy = 
      which.replace("-descending", '').replace("-ascending", '')

   // handle which column name to sort by
   const toBeSortedBy = (contextSortedBy === whichSortedBy) ? 
      contextSortedBy : whichSortedBy

   // set descending (default to true unless specified)
   let descending = !which.includes("ascending")
   
   // toggle descending if existing context value matches selected sort value
   if (contextSortedBy === whichSortedBy) {
      descending = !context.sortedBy.includes("descending")
   }

   // reset which based on column name and descending boolean var 
   // and save to context
   context.setSortedBy(
      toBeSortedBy + (descending ? "-descending" : "-ascending")
   )

   // now, perform sort
   performSort(descending, toBeSortedBy, context)
}