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
    
    //bubbleSort
    bubbleSort(){
        let i = this.head;
        while(i.next!=null){
            let j = this.head;
            while(j.next!=null){
                if(j.data>j.next.data){
                    let temp = j.data;
                    j.data = j.next.data;
                    j.next.data = temp;
                }
                j = j.next;
            }
            i = i.next
        }
    }
    
         //To print the values
     printList(){
        let current = this.head;
        let data = " ";
        while (current != null) {
            data += current.data + " "
            current = current.next;
        }
        return data
     }


}

const n = new LinkedList();

const array = [6,4,1,0,-1];
array.map(e => n.append(e))
console.log("Array        : " , n.printList());
n.bubbleSort();
console.log("Sorted Array : " , n.printList());