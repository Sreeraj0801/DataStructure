class Queue{
    constructor(){
        this.storage = [];
        this.head = 0;
        this.tail = 0;
    }
    //to insert an element
    enqueue(element){
        this.storage[this.tail] = element;
        this.tail++;
    }

    //to delete an element
    dequeue(){
        this.storage.shift()
        this.head ++
    }
}

const queue = new Queue;
queue.enqueue(50)
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(40)

queue.dequeue()
console.log(queue.storage);