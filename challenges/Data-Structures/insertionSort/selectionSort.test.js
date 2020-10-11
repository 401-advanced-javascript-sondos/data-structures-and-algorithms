'use strict';

const sort = require('./selectionSort');

describe('Selection Sort', () => {

    it('function output should be sotred array', () => {
        let arr = [8, 4, 23, 42, 16, 15];
        expect(sort(arr)).toEqual([4,8,15,16,23,42]);
    });

});