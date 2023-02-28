class Node{
    constructor(data = null ,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(head = null , size = 0){
        this.head = head;
        this.size = size;
    }
    //To insert value at the front
    prepending(data)
    {
        const n = new Node(data);

        if(this.head === null){
            this.head = n;
        }
        else {
            n.next = this.head;
            this.head = n;
        }
        this.size++
    }

    //To insert  value at the end
     append(data){
        const n = new Node(data);
        let current = this.head;    

       if(this.size == 0)
        {
            this.head = n;
        }
        else{
        while (current.next != null) {
            current = current.next;   
        }
        current.next = n;
     }
     this.size++;
     
    }

     //To print the values
     printList(){
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
     }

     //To delete the value
     removeFirst(){
        if(this.size === 0)
        {

        }
        if(this.size === 1){
        this.head = null;
        }
        else
        {this.head = this.head.next;
            this.size--
        }
        
     }

     //Remove from last
     removeLast(){
        if(this.size === 0){

        }
        if(this.size === 1){
            this.head = null;
        }
        else {
            let current = this.head;
            let pre = null;
            while (current.next != null) {
                pre = current;
                current = current.next;
            }
            pre.next = null;
           this.size--
        }
     }
     //add value specific position
     beforeSpecificValue(pos,node){
        const n = new Node(node);
        let current = this.head;
        let prev = null;
        while (current.data !== pos) {
            prev = current;
            current =  current?.next 
            if(!current)
            {
                break
            }
        }
        if(current){
         prev.next = n;
        n.next = current;
        this.size++
        }else{
            console.log('value not present');
        }
     } 

     //add value after specific positon
     afterSpecificPosition(pos,node){
        const n = new Node(node);
        let current = this.head;
        let next = null;
        while(current.data !== pos)
        {
            current = current.next;
            next = current.next;
        }
        current.next = n;
        n.next = next;
        this.size ++
     }

     //Linked list bubble sort
    bubbleSort(){
        let swapped = true;

        while(swapped)
        {
            let current = this.head;
            swapped = false;

            while(current && current.next){
                if(current.data > current.next.data)
                {
                    let temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;

                    swapped = true;
                }
                current = current.next;
            }

        }
        l.printList();
    }

    //linear search in linked list
    linear(value){
        let current = this.head;
        while(current != null)
        {
            if(current.data === value){
                console.log(current);
                        }
            current = current.next;
        }

    }
}



let l = new LinkedList();
l.prepending(20)
 l.prepending(30);
l.prepending(10);
 l.prepending(0);
 l.prepending(888);
 l.append(3000);
 l.append(4000);
// l.append(5000);
// l.append(5000);
// l.removeFirst();
// l.removeLast();
 //l.beforeSpecificValue(20,20);

//l.afterSpecificPosition(20,90)

//  l.bubbleSort(); 

//  let array = [1,2,3,4,5]
//  array.map((ele)=>{
//     l.prepending(ele)
//  })
//l.bubbleSort();

 l.linear(0)


