'use strict';

const Node = require('../../link3/link3');
const zip = require('../zip');



describe('test the link list', () => {

  it('check for ll-zip', () => {
    let list = new Node();
    expect(list.head).toEqual(null);
    expect(list.head).toBeNull();

    list.append(1);
    list.append(3);
    list.append(3);
    // list.append(3);

    let list2 = new Node();
    expect(list2.head).toEqual(null);
    expect(list2.head).toBeNull();
    expect(list.toString()).toEqual('{ 1 } -> { 3 } -> { 3 } -> NULL');

    list2.append(5);
    list2.append(9);
    list2.append(4);
    // list2.append(3);

    expect(list2.toString()).toEqual('{ 5 } -> { 9 } -> { 4 } -> NULL');

    let test =zip(list, list2);
    expect(test.head.value).toEqual(1);
    expect(test.head.next.value).toEqual(5);
    expect(test.head.next.next.value).toEqual(3);
    expect(test.toString()).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 3 } -> { 4 } -> NULL');

  });


});