'use strict';
let ar= [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]

function sumMatrix(arr) {

let sum=[];
for(let i=0; i<arr.length ;i++){
  let sumindex=0
  for(var j=0;j<arr[i].length;j++){
  sumindex=sumindex+arr[i][j];
  // console.log(sumindex)
  }
sum[i]=sumindex
}
return sum;
 }

sumMatrix(ar)

module.exports=sumMatrix;