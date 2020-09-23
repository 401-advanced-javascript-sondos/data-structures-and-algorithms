'use strict';




class Stack {
    constructor() {
        // you need to do in Linked List.
        this.storage = [];
        this.top = null;
        this.maxSatck=null;
    }

    peek() {
        if (this.isEmpty()) {
            throw new RangeError('Cannot peek an empty stack');
        }
        return this.top;
    }

    push(value) {
        if (typeof(value) != 'number') {
            return ('validate just number');
        }
        this.storage.unshift(value); // [3,2,1]
        this.top = value; // this.storage[0]
        // console.log(this.top);
        if(this.maxSatck<value)
        this.maxSatck=value;
        // console.log(this.maxSatck);
    }

    pop() {
        if (this.isEmpty()) {
            throw new RangeError('Can not pop');
        }
        let item = this.storage.shift();
        this.top = this.storage[0];

        if(this.maxSatck==item){
            let newmax=this.storage[0];
        for(let i=0;i<this.storage.length;i++){
            if(newmax<this.storage[i]){
                newmax=this.storage[i];
            }
        }
       this.maxSatck=newmax;
        }
        return item;
    }

    isEmpty() {
        return this.storage.length === 0;
    }

    // max(){
    //     return this.maxSatck;
    // }

}

module.exports=Stack;