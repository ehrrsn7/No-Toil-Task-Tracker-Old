
const sortByIdLambdaDescending = (a, b) => a - b
const sortByIdLambdaAscending = (a, b) => b - a
const sortByTitleLambdaDescending = (a, b) => a.title.localeCompare(b.title)
const sortByTitleLambdaAscending = (a, b) => b.title.localeCompare(a.title)
const sortByQuantityLambdaDescending = (a, b) => a.quantity - b.quantity
const sortByQuantityLambdaAscending = (a, b) => b.quantity - a.quantity
const sortByStatusLambdaDescending = (a, b) => a.status - b.status
const sortByStatusLambdaAscending = (a, b) => b.status - a.status
const sortByOilLambdaDescending = (a, b) => a.oil - b.oil
const sortByOilLambdaAscending = (a, b) => b.oil - a.oil
const sortByPriorityLambdaDescending = (a, b) => a.highPriority - b.highPriority
const sortByPriorityLambdaAscending = (a, b) => b.highPriority - a.highPriority
const sortByPartNumberLambdaDescending = (a, b) => a.partNumber - b.partNumber
const sortByPartNumberLambdaAscending = (a, b) => b.partNumber - a.partNumber
const sortByLastModifiedLambdaDescending = (a, b) => a.lastModified - b.lastModified
const sortByLastModifiedLambdaAscending = (a, b) => b.lastModified - a.lastModified

function sortByCallback(sortCallback, context) {
   if (!Array.isArray(context.todoModel)) context.setTodoModel([])
   let newSortedBy = [...context.todoModel]
   newSortedBy.sort(sortCallback) // sorts the array *in place*
   context.setTodoModel(newSortedBy)
}

const cols = [
   "id",
   "title",
   "quantity",
   "toOil",
   "status",
   "highPriority",
   "partNumber",
   "lastModified",
]

export function sortBy(which, context) {

   if (which.includes("ascending")) {
      let by = which.replace("-ascending", '')
      switch (by) {
         case "id":
            sortByCallback(sortByIdLambdaAscending, context)
            break
         case "title":
            sortByCallback(sortByTitleLambdaAscending, context)
            break
         default:
            console.log("'which'-ascending invalid:", which)
            break
      }
   }
   
   if (which.includes("descending")) {
      let by = which.replace("-descending", '')
      switch (by) {
         case "id":
            sortByCallback(sortByIdLambdaDescending, context)
            break
         case "title":
            sortByCallback(sortByTitleLambdaDescending, context)
            break
         default:
            console.log("'which'-descending invalid:", which)
            break
      }
   }

   else {
      console.log("'which' invalid:", which)
   }

}