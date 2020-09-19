'use strict';

const Stack = require('../stacks-and-queues').stack;
const Queue = require('../stacks-and-queues').queue;



describe('test the Stack', () => {

    it('check for isEmpty', () => {
        let stack = new Stack();
        expect(stack.top).toEqual(null);
        expect(stack.isEmpty()).toBeTruthy();
    });

    it('check for push()', () => {
        let stack = new Stack();
        stack.push(5);
        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toEqual(5);
        expect(stack.top.value).toEqual(5);
        stack.push(25);
        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.top.value).toEqual(25);
        expect(stack.peek()).toEqual(25);

    });

    it('check for pop()', () => {
        let stack = new Stack();
        expect(stack.pop()).toBe('the stack is empty');
        expect(stack.isEmpty()).toBeTruthy();

        stack.push(5);
        stack.push(15);
        stack.push(25);
        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.pop()).toEqual(25);
        expect(stack.peek()).toEqual(15);
        expect(stack.pop()).toEqual(15);
        expect(stack.peek()).toEqual(5);
        expect(stack.pop()).toEqual(5);
        expect(stack.peek()).toEqual('the stack is empty');

    });

});



describe('test the Queue', () => {

    it('check for isEmpty', () => {
        let queue = new Queue();
        expect(queue.front).toEqual(null);
        expect(queue.rear).toEqual(null);
        expect(queue.isEmpty()).toBeTruthy();
    });

    it('check for enqueue ()', () => {
        let queue = new Queue();
        queue.enqueue(5);
        expect(queue.isEmpty()).toBeFalsy();
        expect(queue.peek()).toEqual(5);
        expect(queue.front.value).toEqual(5);
        expect(queue.rear.value).toEqual(5);
        queue.enqueue(25);
        expect(queue.isEmpty()).toBeFalsy();
        expect(queue.rear.value).toEqual(25);
        expect(queue.peek()).toEqual(5);

    });

    it('check for dequeue ()', () => {
        let queue = new Queue();
        expect(queue.dequeue ()).toBe('the Queue is empty');
        expect(queue.isEmpty()).toBeTruthy();

        queue.enqueue(5);
        queue.enqueue(15);
        queue.enqueue(25);
        expect(queue.isEmpty()).toBeFalsy();
        expect(queue.peek()).toEqual(5);
        expect(queue.dequeue()).toEqual(5);
        expect(queue.peek()).toEqual(15);
        expect(queue.dequeue()).toEqual(15);
        expect(queue.peek()).toEqual(25);
        expect(queue.dequeue()).toEqual(25);
        expect(queue.peek()).toEqual('the Queue is empty');

    });

});