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
    
    //selection Sort
    selectionSort(){
        let i = this.head;
        while(i.next != null){
            console.log("hai");
            let min = i;
            let j = i.next;
            while(j!= null){
                if(j.data < min.data){
                    min = j
                }
            }
            let temp = i.data;
            i.data = min.data;
            min.data = temp;
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
n.selectionSort();
console.log("Sorted Array : " , n.printList());