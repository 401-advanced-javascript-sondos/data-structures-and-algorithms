'use strict';


const BinarySearch = require('../array-binary-search.js');

describe('test the binary function',()=>{
    it('test case [4,8,15,16,23,42], 15',()=>{
        expect(BinarySearch([4,8,15,16,23,42], 15)).toEqual(2)
    })

    it('test case [11,22,33,44,55,66,77], 90',()=>{
        expect(BinarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1)
    })
})


