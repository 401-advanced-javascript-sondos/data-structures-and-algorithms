'use strict';


const Queue = require('../pseudoQueue');



describe('PseudoQueue tests', () => {

  it('can successfully instantiate an empty PseudoQueue (with two empty stacks)', () => {
    let queue = new Queue();
    expect(queue).toBeDefined;
    expect(queue.stack1.isEmpty()).toBe(true);
    expect(queue.stack2.isEmpty()).toBe(true);
  
  });

  it('can successfully enqueue a value into an empty PseudoQueue', () => {
    let queue = new Queue();
    queue.enqueue('salmon');
    expect(queue.stack1.peek()).toBe('salmon');
  });


  it('can successfully enqueue a value into an empty PseudoQueue', () => {
    let queue = new Queue();
    queue.enqueue(20);
    queue.enqueue(15);
    queue.enqueue(10);
    expect(queue.stack1.peek()).toBe(10);
  });

  it('can successfully dequeue a value into an empty PseudoQueue', () => {
    let queue = new Queue();
    queue.enqueue(15);
    queue.enqueue(10);
    queue.enqueue(5);
    // console.log(queue.dequeue())
    // queue.dequeue();
    expect(queue.stack1.peek()).toBe(5);
    expect(queue.dequeue()).toBe(15);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(5);
    
  
  });

});