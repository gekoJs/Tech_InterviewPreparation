function subsetSum (nums, n) {
  // Your code here:

}

module.exports = subsetSum


// function subsetSum(nums, n) {
//   // Your code here:
//   //que nos llega?
//   // nums --> arr
//   //n --> int --> resultado de las sumas que se deben iterar en el arr
//   //espera si por algun motivo la combinacion entre los numeros del arr es = n return true, else false
//   //Esta de abajo es una solucion a medias
//   /* console.log(nums)
//   console.log(n)
//   let sum = 0
//   for (const num of nums) {
//     console.log(num)
//     if(num === n) return true
//     if(num < n)sum = sum + num
//     console.log(sum)
//     if(sum === n) return true
//   }
//   return false */
//   let sums =  new Set([0])
//   for (const num of nums) {
//     let sumAux = [...sums]
//     for (const sum of sumAux) {
//       let totalSum = sum + num;
//       if (totalSum === n) return true;
//       if(totalSum < n && !sums.has(totalSum))sums.add(totalSum);
//     }
//   }
// return false
// ​
// }
// /*
// console.log(subsetSum( [1,10,5,3], 4 ))// output: true <= 1 + 5 + 3
// ​
// console.log(subsetSum( [1,10,5,3], 19 ))// output:true <= add all 4
// ​
// console.log(subsetSum( [1,10,5,3], 17 ))// output:false
// ​
// console.log(subsetSum( [1,10,5,3], 2 ))// output:false
// ​
// console.log(subsetSum( [1,10,5,3], 10 ))// output:true <= 10 + 0 = 10  */
// ​
// module.exports = subsetSum;







function subsetSum(nums, objetivo) {
  // Your code here:
  //el array de sumas anteriores y que solo den menores al target

  //                            
  console.log(objetivo);

  let sums = [0];

  for (const num of nums) {
    let sumsCopy = [...sums];
    console.log(sums);

    for (const sum of sumsCopy) {
    console.log(sums);

      let actualSum = num + sum; //1
      if (actualSum === objetivo) return true;
      //if (actualSum < objetivo) 
      sums.push(actualSum);
    }
  }
  console.log(sums);
  return false;

  //O(2^N)
  //0(2^50)//   1.125.899.906.842.624 operaciones
  // la complejidad es de exponencial de 2 porque hay dos posibilidades de incluirlo al array o no, en el peor de los casos será incluir a todos las sumas y por cada elemento significan 2 elementos.
}

module.exports = subsetSum;

console.log(subsetSum([1,10,8], 99)); //output: true <= 1 + 5 + 3

// console.log(subsetSum([1, 10, 5, 3], 19)); // output:true <= add all 4

// console.log(subsetSum([1, 10, 5, 3], 17)); // output:false

// console.log(subsetSum([1, 10, 5, 3], 2)); //utput:false

// console.log(subsetSum([1, 10, 3], 10)); //output:true <= 10 + 0 = 10