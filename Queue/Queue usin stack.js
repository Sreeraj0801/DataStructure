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

class Stack{
    constructor(){
        this.array = [];
    }

    //peek element
    peek(){
        console.log(this.array[this.array.length -1]);
    }

    //insert an  element
    push(data){
        this.array.push(data)
    }

    //delete an element
    pop(){
        return this.array.pop();
    }

    //print all elements
    printList(){
        let i = this.array.length-1;
        let data = " ";
        while(i != -1){
            data += this.array[i]+' '
        //console.log(this.array[i])
        i--
        }
        console.log(data);
    }

}

const q = new Queue();
const n = new Stack();
n.push(30)
n.push(40)
n.push(20)
n.push(50)

q.enqueue(n.pop())
q.enqueue(n.pop())
q.enqueue(n.pop())
q.enqueue(n.pop())
console.log(q);
n.printList()
