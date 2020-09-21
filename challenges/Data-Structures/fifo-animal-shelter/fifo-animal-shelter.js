'use strict';

class AnimalShelter {
  constructor() {
    this.animal = [];
  }


  enqueue(animal) {

    if (!(animal == 'dog' || animal == 'cat')) {
      return 'It\'s not in shelter';
    }
    else {
      this.animal.push({ animalType: animal });
    }

  }

  dequeue(pref) {

    if (!(pref == 'dog' || pref == 'cat')) {
      return null;
    } else {
      this.animal.shift();
      if (this.animal.length== 0) {
        return 'can not dequeue from null';
      }
      return pref;
    }
  }
}


module.exports = AnimalShelter;