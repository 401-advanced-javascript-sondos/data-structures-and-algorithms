'use strict';



let arr = [8,4,23,42,16,15];

function sortArray(arr) {
  let min = arr[0];
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        min = temp;
      }
    }
  }
  return arr;
}

console.log(sortArray(arr));


module.exports= sortArray;