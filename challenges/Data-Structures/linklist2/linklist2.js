'use strict';

const Node = require('./node.js');

class Link {

    constructor() {
        this.head = null;
    }

    append(value) {
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

    insertBefore(value, newVal) {

        if(!this.head)
        return 'Exception';

        let node = new Node(newVal);

        if (this.head.value === value) {
            this.head.next = this.head,
            this.head = node;
            return this;
        }

        let current = this.head;
        // current.next===null;
        while (current.next) {
            if(current.value== value){
                node.next=current;
                current.inxt=node;
                break;
            }
            current = current.next;
        }
        current.next = node;
        // return this;
        return 'Exception';

    }


    insertAfter(value, newVal){
        if(!this.head)
        return 'Exception';

        let node=new Node(newVal);

        // if (this.head.value === value) {
        //     this.head.next = node,
            
        //     return this;
        // }
        let current = this.head;

        while (current.next) {
            if(current.value== value){
                current.next=node.next;
                current.next=node;
                
                return this;
            }
            current = current.next;
        }
        current.next = node;
        // return this;
        return 'Exception';


    }


}

module.exports = Link;