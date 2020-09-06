'use strict'

let arr=[1, 2, 3, 4, 5, 6];

function reverseArray (ar){
    let reserved=[]
for( var i=ar.length; i>0; i--){
reserved.push(ar[i])
};
return reserved;
}

reverseArray(arr)