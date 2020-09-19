'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.top = null;
    this.storge = 0;
  }

  isEmpty() {
    return this.storge === 0;
  }


  push(value) {

    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.storge++;
    // return this.top.value;

  }

  pop() {

    if (this.isEmpty()) {
      return 'the stack is empty';
    }

    let temp = this.top;
    this.top = this.top.next;
    this.storge--;
    return temp.value;

  }

  peek() {
    if (this.isEmpty()) {
      return 'the stack is empty';
    }
    return this.top.value;
  }

}


class Queue {

  constructor() {
    this.front = null;
    this.rear = null;
    this.storge = 0;
  }


  enqueue(value) {
    let node = new Node(value);

    if (this.isEmpty()) {
      this.front = node;
      this.rear = this.front;
      this.storge++;
      return ;
    }

    this.rear.next = node;
    this.rear=this.rear.next;
    this.storge++;
    return ;

  }

  dequeue() {

    if (this.isEmpty()) {
      return 'the Queue is empty';
    }

    let temp = this.front;
    this.front = this.front.next;
    this.storge--;
    return temp.value;

  }

  peek() {
    if (this.isEmpty()) {
      return 'the Queue is empty';
    }
    return this.front.value;
  }

  isEmpty() {
    return this.storge === 0;
  }


}




module.exports = { stack: Stack ,queue:Queue };