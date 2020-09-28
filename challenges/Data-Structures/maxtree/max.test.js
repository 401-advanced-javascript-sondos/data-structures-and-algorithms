'use strict';

const Tree=require('./max');


describe(' Tree', ()=> { 
  it('Max()',()=>{
    let t=new Tree();
    expect(t.root).toBeNull();
    t.add(5);
    expect(t.root.value).toEqual(5);
    t.add(6);
    t.add(4);
    t.add(8);
    t.add(1);
    expect(t.preorder()).toEqual([5,4,1,6,8]);
    expect(t.Max()).toBe(8);


  });
});



describe(' Tree', ()=> { 
  it('MAX()',()=>{
    let t=new Tree();
    expect(t.root).toBeNull();
    t.add(5);
    expect(t.root.value).toEqual(5);
    t.add(6);
    t.add(4);
  
    t.add(8);
    t.add(1);
    expect(t.preorder()).toEqual([5,4,1,6,8]);
    expect(t.contains(1)).toEqual(true);
    expect(t.contains(5)).toEqual(true);
    expect(t.contains(8)).toEqual(true);
    expect(t.Max()).toBe(8);


    
    
  });

});

