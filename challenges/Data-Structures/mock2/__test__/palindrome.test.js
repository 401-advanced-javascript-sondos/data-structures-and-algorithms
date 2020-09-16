'use strict'

const palindrome = require('../palindrome');
const Node = require('../../link3/link3');

describe('palindrome the link list', () => {

    it('test the palindrome for input list', () => {

        let list = new Node();
        list.append('t');
        list.append('a');
        list.append('c');
        list.append('o');
        list.append('c');
        list.append('a');
        list.append('t');
        

        let test = palindrome(list);
        expect(test).toBe(true);

    });

    it('test the palindrome for input list', () => {

        let list = new Node();
        list.append('m');
        list.append('o');
        list.append('o');
        list.append('m');

        let test = palindrome(list);
        expect(test).toBe(true);

    });

    it('test the palindrome for input list', () => {

        let list = new Node();
        list.append('h');
        list.append('o');
        list.append('u');
        list.append('s');
        list.append('e');

        let test = palindrome(list);
        expect(test).toBe(false);

    });

})