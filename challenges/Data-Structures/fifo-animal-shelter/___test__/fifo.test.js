'use strict';


const Animal = require('../fifo-animal-shelter');



describe('Animal Shelter tests', () => {

  it('can successfully instantiate an empty Animal shelter  (with two empty stacks)', () => {
    let animal = new Animal();
    expect(animal).toBeDefined;
  });

  it('test enqueue in animal shelter', () => {
    let shelter = new Animal();
    shelter.enqueue('salmon');
    expect(shelter.enqueue('salmon')).toBe('It\'s not in shelter');
    shelter.enqueue('cat');
    expect(shelter.animal[0].animalType).toBe('cat');
    shelter.enqueue('dog');
    expect(shelter.animal[0].animalType).toBe('cat');
    expect(shelter.animal[1].animalType).toBe('dog');
  });

  it('test  dequeue in animal shelter', () => {
    let shelter = new Animal();
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    shelter.enqueue('ccat');

    expect(shelter.dequeue('lion')).toBe(null);
    expect(shelter.animal[0].animalType).toBe('cat');
    expect(shelter.dequeue('cat')).toBe('cat');
    expect(shelter.animal[0].animalType).toBe('dog');
    expect(shelter.dequeue('dog')).toBe('dog');
    expect(shelter.animal[0].animalType).toBe('dog');
    expect(shelter.dequeue('dog')).toBe('can not dequeue from null');
  });

});