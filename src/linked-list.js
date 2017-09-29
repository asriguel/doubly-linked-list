const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;


    }

    append(data) {
        let node = new Node(data);
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let currentNode = this._head;
        let length = this.length;
        let count = 1;

        if (length === 0 || index < 0 || index > length) {
            return false;
        }

        while (count <= index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode.data;

    }

    insertAt(index, data) {
        let currentNode = this._head,
            length = this.length,
            count = 0,
            beforeNodeToInsert = null,
            nodeToInsert = new Node(data),
            insertedNode = null,
            afterNodeToInsert = null;
        if (length === 0 || index < 0 || index > length) {
            return false;
        }
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        this.length++;

        beforeNodeToInsert = currentNode.prev;

        beforeNodeToInsert.next = nodeToInsert;
        nodeToInsert.next = currentNode;

        return this;
    }

    isEmpty() {
        if (!this._head && !this._tail) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._head = new Node();
        this._tail = new Node();
        return this;
    }

    deleteAt(index) {
        let currentNode = this._head;
        let count = 0;
        while (currentNode) {
            if (index == count) {
                if (currentNode.next) {
                    currentNode.next.prev = currentNode.prev;
                }
                if (currentNode.prev) {
                    currentNode.prev.next = currentNode.next;
                }
                currentNode = null;
                this.length--;
                break;
            }
            currentNode = currentNode.next;
            count++;
        }
        return this;
    }

    reverse() {
        let currentNode = this._head,
            length = this.length,
            count = 0;

        this._head = this._tail;
        this._tail = currentNode;
        let node = null;
        while (currentNode) {
            node = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = node;
            currentNode = currentNode.prev;
        }

        return this;
    }

    indexOf(data) {
        let currentNode = this._head;
        let length = this.length;
        let count = 0;

        while (count < length) {
            if (currentNode.data === data) {
                return count;
            }
            currentNode = currentNode.next;
            count++;
        }
        return -1;
    }
}

module.exports = LinkedList;