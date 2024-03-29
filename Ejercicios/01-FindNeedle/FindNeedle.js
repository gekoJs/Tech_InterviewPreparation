function FindNeedle (haystack, needle) {
  // Your code here:

}

module.exports = FindNeedle


// function FindNeedle(haystack, needle) {
//   console.log(haystack);
//   console.log(needle);

//   // O(n*m)
//   // for (let i = 0; i < haystack.length; i++) {
//   //   for (let j = 0; j < needle.length; j++) {
//   //     if (haystack[i + j] !== needle[j]) break;
//   //     if (j === needle.length - 1) return i;
//   //   }
//   // }
//   // return -1;

//   // O(n*m)
//   for (let i = 0; i < haystack.length; i++) {
//     const sliced = haystack.slice(i, needle.length + i);
//     if (sliced === needle) return i;
//   }
//   return -1;
// }

// console.log(FindNeedle("react-redux", "redux")); //6

// console.log(FindNeedle("pinky", "puntual")); // -1

// console.log(FindNeedle("rereredux", "reredux")); // 2







function FindNeedle (haystack, needle) {
  // Your code here:
  // for(let i = 0; i < haystack.length; i++){
  //   const element = haystack[i]

  //   for(let j = 0; j < needle.length; j++){
  //     if(haystack[i+j] !== needle[j]) break
  //     if(j+1 === needle.length) return i
  //   }
  // }
  
  for(let i = 0; i  < haystack.length; i++){
    if(haystack.slice(i, i+ needle.length) === needle) return i
  }
  return -1
}
// COMPLEJIDAD TEMPORAL

module.exports = FindNeedle

console.log(FindNeedle("react-redux", "redux"))
console.log(FindNeedle("pinky", "puntual"))
console.log(FindNeedle("rereredux", "reredux"))
