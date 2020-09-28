'use strict';

const {Node} = require('./tree');
const {Tree} = require('./tree');

describe(' Tree', ()=> {
  // create a binary tree.
  // traverse it using the 3 methods

  let tree; 
  beforeAll(()=> {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.right = three;
    one.left = two;
    two.left = six;
    six.right = seven;
    seven.right = nine;
    seven.left = eight;
    three.right = five;
    three.left = four;

    tree = new Tree(one);

  });

  it('preOrder()', ()=> {
    let expected = [1, 2, 6, 7, 8, 9 ,3, 4, 5];
    let preOrderOutput = tree.preorder();
    console.log('preOrderOutput >> ',preOrderOutput);
    expect(preOrderOutput).toEqual(expected);
  });

  it('inOrder()', ()=> {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrderOutput = tree.inorder();
    expect(inOrderOutput).toEqual(expected);
  });

  it('postOrder()', ()=> {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrderOutput = tree.postorder();
    expect(postOrderOutput).toEqual(expected);
  }); 


});

describe(' Tree', ()=> { 
  it('add()',()=>{
    let t=new Tree();
    expect(t.root).toBeNull();
    t.add(5);
    expect(t.root.value).toEqual(5);
    t.add(6);
    t.add(4);
    expect(t.preorder()).toEqual([5,4,6]);
    expect(t.inorder()).toEqual([4,5,6]);
    expect(t.postorder()).toEqual([4,6,5]);
    t.add(8);
    t.add(1);
    expect(t.preorder()).toEqual([5,4,1,6,8]);


  });
});



describe(' Tree', ()=> { 
  it('add()',()=>{
    let t=new Tree();
    expect(t.root).toBeNull();
    t.add(5);
    expect(t.root.value).toEqual(5);
    t.add(6);
    t.add(4);
    // expect(t.preorder()).toEqual([5,4,6]);
    // expect(t.inorder()).toEqual([4,5,6]);
    // expect(t.postorder()).toEqual([4,6,5]);
    t.add(8);
    t.add(1);
    expect(t.preorder()).toEqual([5,4,1,6,8]);
    expect(t.contains(1)).toEqual(true);
    expect(t.contains(5)).toEqual(true);
    expect(t.contains(8)).toEqual(true);

    
    
  });

});

