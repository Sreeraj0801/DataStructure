class Stack{
    constructor(){
        this.item = [];
        this.count = 0;
    }

    //insertion 
    push(element){
        this.item[this.count] = element;
        this.count ++ ;
    }
    //deletion in stack
    pop(){
        let deleteItem = this.item[this.count - 1];
        console.log(deleteItem);
        this.item.length -= 1;
        //delete this.item[this.count]
    }
}

const st = new Stack();
st.push(100);
st.push(200);
st.push(300);
st.push(400);

//st.pop();

console.log(st.item);