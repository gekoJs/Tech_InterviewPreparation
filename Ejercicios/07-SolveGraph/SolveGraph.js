function SolveGraph(graph, start, end, visited=[]) {
  // Your code here:
  if(visited.includes(start))return false
  visited.push(start)

  for (const node of graph[start]) {
    if (node === end) return true;
    if(SolveGraph(graph, node, end, visited)) return true
  }
  return false
}

const graph = {
  a: ["c"],
  b: ["c"],
  c: ["s", "r"],
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"],
};

console.log(SolveGraph(graph, "a", "s")); //to.equal(true);
console.log(SolveGraph(graph, "a", "d")); //to.equal(true);
console.log(SolveGraph(graph, "s", "b")); //to.equal(false);

module.exports = SolveGraph;

// function SolveGraph(graph, start, end, visited = []) {
//   // Your code here:
//   if (visited.includes(start)) return false;
//   visited.push(start);
//   console.log(visited);
//   console.log(start);
//   console.log(end);
//   /* if (graph[start].includes(end)) return true */
//   for (const vertex of graph[start]) {
//     if (vertex === end) return true;
//     console.log(vertex);
//     if (SolveGraph(graph, vertex, end, visited) === true) return true;
//   }
//   return false;
// }
// ​
// ​
// module.exports = SolveGraph;









// function SolveGraph (graph, start, target, visited = []) {
//   // Your code here:
//   console.log(target) 
//   console.log(start)
//   console.log(visited)
//                    //                                                      |----|
//   if(visited.includes(start)) return false
//   visited.push(start)
//   console.log(visited)
//                 //                                    |----|
//   for (const node of graph[start]) {
//     console.log(node)
//     if(node === target) return true
//     if(SolveGraph(graph,node ,target, visited)) return true
//   }
//   return false


// }

// module.exports = SolveGraph
// const graph = {
//   a: ['c'],
//   b: ['c'],
//   c: ['s', 'r'],
//   d: ['a'],
//   s: ['a', 'c'],
//   r: ['d'],
//   z: ['z']
// }

// // console.log(SolveGraph(graph, 'a', 'c'))//  (true)

// console.log(SolveGraph(graph, 'a', 'r'))//  (true)
// console.log(SolveGraph(graph, 'a', 'd'))//  (true)
// console.log(SolveGraph(graph, 's', 'b'))//  (false)