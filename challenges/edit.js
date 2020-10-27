class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Link {
  constructor() {
    this.head = null;

  }

  insertTo(value) {
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

    

}

let newlinklist = new Link();
Link.insertTo(5);
Link.insertTo(10);


function traverse(linklist){

  let curr=linklist.head;

  while(curr){
    let temp=curr;
    temp.next=curr.next;
    temp.next=curr;
    curr=curr.next;

  }
  return linklist;
}

