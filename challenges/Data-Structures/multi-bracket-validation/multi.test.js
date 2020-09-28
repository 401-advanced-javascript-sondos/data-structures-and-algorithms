'use strict';

const multi=require('./multi-bracket-validation');

describe('testing for mult vaidation brackets',()=>{
  it('test for brackets {}',()=>{
    let input='{}';
    expect(multi(input)).toBe(true);

  });

  it('test for brackets {}(){}',()=>{
    let input='{}(){}';
    expect(multi(input)).toBe(true);

  });

  it('test for brackets ()[[Extra Characters]]',()=>{
    let input='()[[Extra Characters]]';
    expect(multi(input)).toBe(true);

  });
    

  it('test for brackets (){}[[]]',()=>{
    let input='(){}[[]]';
    expect(multi(input)).toBe(true);

  });


    
  it('test for brackets {}{Code}[Fellows](())',()=>{
    let input='{}{Code}[Fellows](())';
    expect(multi(input)).toBe(true);

  });

  

    
  it('test for brackets (](',()=>{
    let input='(](';
    expect(multi(input)).toBe(false);

  });
    

  it('test for brackets {(})',()=>{
    let input='{(})';
    expect(multi(input)).toBe(false);

  });

  it('test for brackets [({}]',()=>{
    let input='[({}]';
    expect(multi(input)).toBe(false);

  });
    

});