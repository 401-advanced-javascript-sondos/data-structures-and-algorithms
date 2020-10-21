'use strict';

const HashTable = require('../hashTable/hash');

function repeatedWord(word) {

  let words = word.replace(/,/g,'').split(' ');
  console.log('words',words);
  let hashtable = new HashTable(words.length);

  for (let i = 0; i < words.length; i++) {
    let key=words[i].toLowerCase();
    console.log('key',key);
      
    if (hashtable.contains(key)) {
      let repeatedword = words[i];
      // console.log('hash',hashtable)
      return repeatedword;    
            
    }else{
      hashtable.add(key,'string');     
    }
        
  }
  return 'Uniqe string';

}

module.exports=repeatedWord;