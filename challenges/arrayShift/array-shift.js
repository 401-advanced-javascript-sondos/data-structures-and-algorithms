'use strict'
let arr=[[2,4,6,8], 5]

function insertShiftArray(test){
   
      let sh=[];
    
      for(let i=0; i<arr[0].length; i++){
     if(arr[0][i]<arr[0][i+1] && arr[0][i]>arr[1]){
    
      sh.push(arr[1])
    }
    sh.push(arr[0][i])
      }
      return sh;

}
insertShiftArray(arr)