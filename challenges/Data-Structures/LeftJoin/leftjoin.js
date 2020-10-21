'use strict';




function leftJoin(table1, table2) {


  let arr = Object.entries(table1);
  // console.log(arr)

  arr.forEach(item => {
    // console.log(item)
    let key = item[0];
    if (table2[key]) {
      item.push(table2[key]);
    } else {
      item.push(null);
    }
  });

  return arr;
}

module.exports=leftJoin;