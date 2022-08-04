function sortByCallback(sortCallback, context) {
   if (!Array.isArray(context.todoModel)) context.setTodoModel([])
   let newSortedBy = [...context.todoModel]
   newSortedBy.sort(sortCallback) // sorts the array *in place*
   context.setTodoModel(newSortedBy)
}

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

export function sortBy(which, context) {

   // exception handling: undefined values
   try {
      if (context === undefined)
         throw "context not defined (check to see if context was passed in as a parameter)"
   }
   catch (error) {
      console.warn("Error in sortBy(str, context):", error)
      return
   }

   // handle sort with parameter/context values:
   // init descending if not ascending
   let descending = !which.includes("ascending") 
   // toggle if matches context
   if (descending && context.sortedBy.includes("descending")) descending = false 
   if (!descending && context.sortedBy.includes("ascending")) descending = true
   // strip column name
   const columnName = which.replace("-descending", '').replace("-ascending", '')
   // reset which based on column name and descending boolean var and save to context
   context.setSortedBy(columnName + (descending ? "-descending" : "-ascending"))

   if (descending) {
      switch (columnName) {
         
         // numbers/booleans/dates
         case "id":
         case "quantity":
         case "status":
         case "toOil":
         case "highPriority":
         case "lastModified":
            sortByCallback((a, b) => a[columnName] - b[columnName], context)
            break
         
         // text
         case "partNumber":
         case "title":
            sortByCallback((a, b) => a[columnName].localeCompare(b[columnName]), context)
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
         case "highPriority":
         case "lastModified":
            sortByCallback((b, a) => a[columnName] - b[columnName], context)
            break
         
         // text
         case "partNumber":
         case "title":
            sortByCallback((b, a) => a[columnName].localeCompare(b[columnName]), context)
            break

         default:
            console.log("'columnName' - ascending invalid:", columnName)
            break
      }
   }
}