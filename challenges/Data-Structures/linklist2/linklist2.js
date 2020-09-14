'use strict';

const Node = require('./node.js');

class Link {

  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
      return this;
    }

    let current = this.head;
    // current.next===null;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return this;

  }

  insertBefore(value, newVal) {

    if(!this.head)
      return 'there is no list' ;
        
    let node = new Node(newVal);
    if (this.head.value === value) {
      node.next = this.head,
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value == value) {
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    current.next = node;
    return 'Exception';

  }


  insertAfter(value, newVal) {

    if (!this.head)
      return 'there is no list' ;

    let node = new Node(newVal);
    let current = this.head;

    while (current.next) {
      if (current.value == value) {
        node.next=current.next;
        current.next=node;

        return this;
      }
      current = current.next;
    }
    current.next = node;
    // return this;
    return 'Exception';


  }


}

module.exports = Link;