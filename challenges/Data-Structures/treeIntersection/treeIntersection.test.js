'use strict';


const { Node } = require('./treeIntersection');
const { Tree } = require('./treeIntersection');
const { treeIntersection } = require('./treeIntersection');

let tree1;
let tree2;
beforeAll(() => {

    let one = new Node(150);

    let two = new Node(100);
    let three = new Node(160);
    let four = new Node(125);
    let five = new Node(175);
    let six = new Node(75);

    let seven = new Node(250);
    let eight = new Node(200);
    let nine = new Node(350);
    let ten = new Node(300);
    let eleven = new Node(500);

    one.left = two;
    two.left = six;
    two.right = three;
    three.left = four;
    three.right = five;

    one.right = seven;
    seven.right = nine;
    seven.left = eight;
    nine.right = eleven;
    nine.left = ten;

    tree1 = new Tree(one);


    //tree two
    let a = new Node(42);
    
    let b = new Node(100);
    let c = new Node(160);
    let d = new Node(125);
    let e = new Node(175);
    let f = new Node(15);

    let g = new Node(600);
    let h = new Node(200);
    let i = new Node(350);
    let j = new Node(4);
    let k = new Node(500);

    a.left = b;
    b.left = f;
    b.right = c;
    c.left = d;
    c.right = e;

    a.right = g;
    g.right = i;
    g.left = h;
    i.right = k;
    i.left = j;

    tree2 = new Tree(a);



});

describe(' Tree', () => {
    it('add()', () => {

        let expected =[150,100,75,160,125,175,250,200,350,300,500];
        let preOrderOutput = tree1.preorder();
        console.log("preOrderOutput >> ", preOrderOutput);
        expect(preOrderOutput).toEqual(expected);


        let expected2 =[42,100,15,160,125,175,600,200,350,4,500];
        let preOrderOutput2 = tree2.preorder();
        console.log("preOrderOutput >> ", preOrderOutput2);
        expect(preOrderOutput2).toEqual(expected2);

    });

    it('treeIntersection()',()=>{
      let out=treeIntersection(tree1,tree2);
      expect(out).toEqual([100,160,125,175,200,350,500]);


    });
});