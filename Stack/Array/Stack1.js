//Node class
class Node{
    constructor(data , next= null){
        this.data = data;
        this.next = next ;
    }
}

//Create a stack
class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }
    //peek
    peek()
    {
        console.log(this.top.data)
    }

    //Add data 
    push(data){
        const n = new Node(data);
        if(this.size === 0){
            this.top = n;
        }
        else{
            let next = this.top;
            this.top = n;
            this.top.next = next;   
        }
        this.size++
    }
    //pop
    pop(){
        if(this.top == null){
            console.log("List is empty");
        }
        else{
            this.top = this.top.next
        }
        this.size -- 
    }

    //print data
    print(){
        let current = this.top;
        let data = " ";
        while(current != null){
            data += current.data + "  ";
            current = current.next;
        }
        console.log(data)
    }

}

const n = new Stack()
n.push(1)
n.push(2)
n.push(3)
n.pop()
n.pop()
n.pop()
n.print()