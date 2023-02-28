class Queue{
    constructor(){
        this.array = [];
    }

    //insert an element in a queue;
    enqueue(data){
        this.array.push(data)
    }
    dequeue(data){
        this.array.shift();
    }
}

const n = new Queue();
n.enqueue(30);
n.enqueue(20);
n.enqueue(10);
n.dequeue()
console.log(n);