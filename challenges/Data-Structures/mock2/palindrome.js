'use strict';

const Node = require('../link3/link3');



function palindrome(list) {

  let array = [];

  let current = list.head;
    
  let j=0;
  while (current) {

    // array.push(current.value);
    array[j]=current.value;
    current = current.next;
    j++;
  }

  console.log(array);

  for (let i = 0; i < array.length; i++) {
    if (array[i] != array[array.length - i-1]) {
      console.log('first',array[i]);
      console.log('sec',array[array.length-i-1]);
      return false;
    }

  } return true;

}



module.exports = palindrome;