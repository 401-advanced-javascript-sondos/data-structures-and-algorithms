'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues').stack;
// const Queue = require('../stacksAndQueues/stacks-and-queues').queue;

class PesudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }


  enqueue(value) {
    this.stack1.push(value);

  }



  dequeue() {

    if (this.stack1.isEmpty()) {
      return 'the stack is Empty';
    }



    let current = this.stack1.top;
    while (current) {
      console.log(current);
      current = current.next;

      this.stack2.push(this.stack1.pop());

    }

    let firstOut = this.stack2.pop();

    current = this.stack2.top;
    while (current) {
      current = current.next;
      this.stack1.push(this.stack2.pop());
    }

    return firstOut;

  }

}

module.exports = PesudoQueue;