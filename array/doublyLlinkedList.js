class Node{
    constructor(data,prev,next){
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList{
    constructor(head = null){
        this.head = head;
        this.size = 0;
    }
    //insert value at the begining
    prepend(data){
        let newNode = new Node(data);
        if(this.head)
        {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        else{
            this.head = newNode;
        }
    }
}

const a = new DoublyLinkedList();
a.prepend(20)
a.prepend(30)
console.log(a)