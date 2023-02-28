class Node{
    constructor(data){
        this.head = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
}

    //add element to the queue;
    enqueue(data){
        const n = new Node(data);
        if(!this.front){
            this.front = n;
            this.back  = n;
        }
        else{
            this.back.next = n;
            this.back = n;

        }
        this.size++
    }
    //delete element from a queue
    dequeue(){
        this.front = this.front.next;
        this.size--
    }

    //print values
    printList(){
        let current = this.front
        let data  = " "
        while(current!=null){
            data += current.head + " "
            current = current.next;
        }
        console.log(data);
    }
}

const n = new Queue();
n.enqueue(30)
n.enqueue(20)
n.enqueue(10)
n.dequeue()

n.printList()