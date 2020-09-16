'use strict';

const Node = require('../link3/link3');



function palindrome(list) {

    let array = [];

    let current = list.head;

    while (current) {

        array.push(current.value);
        current = current.next;
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