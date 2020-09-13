'use strict'

const Link = require('../lib/link-list.js');

describe('test the link list', () => {

    let list = new Link();
    let value = 'a';
    let value2 = 'b';
    let value3 = 'c';


    it('test the  constructor()', () => {
        expect(list.head).toEqual(null)
        expect(list.head).toBeNull();

    })


    it('test the insert()', () => {

        list.insertTo(value)
        expect(list.head.value).toEqual(value);
        expect(list.head.next).toBeNull();

        list.insertTo(value2);
        expect(list.head.value).toEqual(value);
        expect(list.head.next).not.toBeNull();
        expect(list.head.next.value).toEqual(value2);
        expect(list.head.next.next).toBeNull();
        


    })


    it('test the includes()', () => {

        list.includes(value)
        expect(list.head.value).toEqual(value);
        expect(list.includes(value)).toBeTruthy();

        list.includes(value2)
        expect(list.head.next.value).toEqual(value2);
        expect(list.includes(value2)).toBeTruthy();

        list.includes(value3)
        expect(list.includes(value3)).toBeFalsy();


    })

    
    it('test the  toString()', () => {
        console.log(list.toString())
        expect(list.toString()).toEqual("{ a } -> { b } -> NULL")
        // expect(list.head).toBeNull();

    })


})