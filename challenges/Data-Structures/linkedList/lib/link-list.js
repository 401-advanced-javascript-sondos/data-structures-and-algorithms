'use strict'

const Node = require('./node.js');

class Link {

    constructor() {
        this.head = null;
    };

    insertTo(value) {
        let node = new Node(value);

        if (this.head === null) {
            this.head = node;
            return this;
        }

        let current = this.head;
        // current.next===null;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        return this;

    }

    includes(valueinclude) {

        let current = this.head;

        while (current) {
            if (current.value === valueinclude) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    toString(){
        let current=this.head;
        let str='';
        while(current){
            str=str+`{ ${current.value} } -> `;
            current=current.next;
        }
        str+='NULL';
        return str;
    }


}

module.exports=Link;