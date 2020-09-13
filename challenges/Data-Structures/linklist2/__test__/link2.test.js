
'use strict';

const Link = require('../linklist2.js');

describe('test the link list', () => {

  let list = new Link();
  let value = 'a';
  let value2 = 'b';
  let value3 = 'c';


  it('test the  constructor()', () => {
    let list = new Link();
    expect(list.head).toEqual(null);
    expect(list.head).toBeNull();

  });


  it('test the append()', () => {

    list.append(value);
    expect(list.head.value).toEqual(value);
    expect(list.head.next).toBeNull();

    list.append(value2);
    expect(list.head.value).toEqual(value);
    expect(list.head.next).not.toBeNull();
    expect(list.head.next.value).toEqual(value2);
    expect(list.head.next.next).toBeNull();
        
  });


  it('test the insertBefore()', () => {

    let newlist=new Link();
    expect(newlist.head).toBeNull();

    newlist.append('test 3');
    expect(newlist.head).toEqual({value:'test 3',next:null});

    //at first
    newlist.insertBefore('test 3','test 2');
    expect(newlist.head.value).toEqual('test 2');
    expect(newlist.head).toEqual({value:'test 2',next:{value:'test 3',next:null}});
 //  expect(newlist.head.next.value).toBe('test 3')
    
    //exption
    newlist.insertBefore('test 4','test 5');
    expect( newlist.insertBefore('test 4','test 5')).toEqual('Exception');

    // at mid
    newlist.append('test 4');
    newlist.insertBefore('test 4','test 5');
   // expect( newlist.insertBefore('test 4','test 5')).toEqual({value:'test 2',next:{value:'test 3',next:{value:'test 5',next:{value:'test 4',next:null}}}});   
  // expect(newlist.head.next.next)


  });


  
  it('test the insertAfter()', () => {

    let newlist=new Link();
    expect(newlist.head).toBeNull();

    newlist.append('test 3');
    expect(newlist.head).toEqual({value:'test 3',next:null});


    //at first
    newlist.insertAfter('test 3','test 2');
    expect(newlist.head.value).toEqual('test 3');
    expect(newlist.head).toEqual({value:'test 3',next:{value:'test 2',next:null}});
    // {"next": null, "value": "test 2"}


    //exption
    newlist.insertBefore('test 4','test 5');
    expect( newlist.insertBefore('test 4','test 5')).toEqual('Exception');


    //at mid
    newlist.append('test 4');
    newlist.insertBefore('test 2','test 5');
    expect( newlist.head).toEqual({value:'test 3',next:{value:'test 2',next:{value:'test 5',next:{value:'test 4',next:null}}}});   
 


  });






});

