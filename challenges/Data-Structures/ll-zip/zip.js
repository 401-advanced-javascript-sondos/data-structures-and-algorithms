
'use strict';

const Node = require('../link3/link3');



function zipLists(list1, list2) {

  

  let newList = new Node();
  newList.append(list1.head.value);
  newList.append(list2.head.value);
  let start = list1.head.next;
  // let start =list1.head;
  let currentl2 = list2.head.next;
  // lect sec node = newList.append(currentl2)


  while (start || currentl2) {
    if(start){
      // start=start.next;
      newList.append(start.value);
      start=start.next;
    }
           
    if(currentl2){
      newList.append(currentl2.value);
      currentl2=currentl2.next;

    }       
  }
  return newList;
}



module.exports=zipLists;