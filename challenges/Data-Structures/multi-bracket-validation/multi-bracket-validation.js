'use strict';

let {stack}=require('../stacksAndQueues/stacks-and-queues');

function multi(param) {
  let input = param.split('');
  let open = ['(', '{', '['];
  let close = [')', '}', ']'];
  let st = new stack();
  const match = {
    ']': '[',
    '}': '{',
    ')': '(',
  };
    // console.log(input);

  if (input.length <= 1) {
    throw new RangeError('Cannot validate an input of length 0');
  }


  for (let i = 0; i < input.length; i++) {
    if (open.includes(input[i])) {
      st.push(input[i]);
      // console.log(i,input[i]);
    }
    // console.log(st.peek())



    if (close.includes(input[i])) {
      console.log(st.peek());

      let poping = st.pop();
      console.log(i,input[i],poping);
      if (poping !== match[input[i]]) {
        return false;
      } 
      // else {
      // }
    }

  }
  return true;

  // } else {
  //     return false;
  // }
}


module.exports = multi;