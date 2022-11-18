class Node {
  // Your code here:

}

class MinStack {
  // Your code here:

}

module.exports = {
  Node,
  MinStack
}


// class Old_stack {
//   constructor(){
//       this.data_array=[]
//   }
// }


// // [{},{},{}]
// Old_stack.prototype.push = function(value){
//   this.data_array.push(value)
// }
// Old_stack.prototype.pop = function(){
//   this.data_array.pop()
// }
// Old_stack.prototype.peek = function(){
//   return this.data_array[this.data_array.length-1].value
// }
// const test_old = new Old_stack()
// test_old.push({value:3})
// test_old.push({value:8})
// test_old.push({value:1})
// console.log(test_old) // Old_stack { data_array: [] }
// console.log(test_old.peek())