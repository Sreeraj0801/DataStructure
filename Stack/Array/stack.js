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
        if(this.array.length-1 <= 0){
            console.log("empty array");
        }
        this.array.pop();
    }

    //print all elements
    printList(){
        let i = this.array.length-1;
        while(i != -1){
        console.log(this.array[i])
        i--
        }
    }

}

const a = new Stack();
a.push(30)
a.push(20)
a.push(10)
a.push(50)
a.pop()
a.pop()
a.pop()
a.pop()
a.printList()

