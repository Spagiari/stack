const Node = require('./lib/node.js');
const StringBuilder = require('string-builder');

class Stack {
    /**
     * Initializes an empty stack.
     */
    constructor() {
        this.first = null;
        this.n = 0;
    }

    /**
     * Returns true if this stack is empty.
     *
     * @return true if this stack is empty; false otherwise
     */
    isEmpty() {
        return first == null;
    }

    /**
     * Returns the number of items in this stack.
     *
     * @return the number of items in this stack
     */
    size() {
        return this.n;
    }

    /**
     * Adds the item to this stack.
     *
     * @param  item the item to add
     */
    push(data) {
        let oldfirst = this.first;
        this.first = new Node(data, oldfirst);
        this.n++;
    }

    /**
     * Removes and returns the item most recently added to this stack.
     *
     * @return the item most recently added
     * @throws NoSuchElementException if this stack is empty
     */
    pop() {
        if (isEmpty()) throw new Error('Stack underflow');
        let data = this.first.data; // save item to return
        this.first = this.first.next; // delete first node
        this.n--;
        return data; // return the saved item
    }

    /**
     * Returns (but does not remove) the item most recently added to this stack.
     *
     * @return the item most recently added to this stack
     * @throws NoSuchElementException if this stack is empty
     */
    peek() {
        if (isEmpty()) throw new Error('Stack underflow');
        return this.first.data;
    }

    /**
     * Returns a string representation of this stack.
     *
     * @return the sequence of items in this stack in LIFO order, separated by spaces
     */
    toString() {
        let s = new StringBuilder();
        for (let data of this) {
            s.append(data);
            s.append(' ');
        }
        return s.toString();
    }

    [Symbol.iterator]() {
        var index = this.first;
        return {
            next: function() {
                if (index) {
                    let data = index.data;
                    index = index.next;
                    return {value: data, done: false};
                }
                else
                    return {value: null, done: true};
            },
        };
    }
}

module.exports = Stack;
