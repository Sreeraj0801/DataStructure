class Node{
    constructor(data,next=null,prev=null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
class DoublyLinkedList{
    constructor(head = null,size=0){
        this.head = head;
        this.size =size;
    }

    //add value at the begining
    append(data){
        const node = new Node(data);
        if(this.head == null)
        {
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++
    }


    //inset value at the end
    prepend(data){
        const n  = new Node(data);
        let current = this.head;
        if(current==null){
            this.head = n;
        }
        else{
            while(current.next!=null){
                current = current.next;
            }
            current.next = n;
            n.prev = current;
        }
        this.size++;
    }

    //delete from the begining
    deletePrepend(){
        if(this.head === null)
        {
            console.log("List is empty");
        }
        else if(this.head === null){
            this.head ==null;
        }else{

            this.head = this.head.next;
        }

        this.size--
    }


    //delete value from the end
    deleteAppend(){
        let current = this.head;
        if(this.head === null){
            console.log("List is empty")
        }
        else if(this.head.next === null){
            this.head = null;
        }
        else {
            while(current.next != null){
                current = current.next
            }
            current.prev.next = null
        }
       this.size--;
    }

    //find a value
    findValue(t){
        let current = this.head;
        let prev = null;
        let next  = null;
        let count = 0;
        while(current!=null){
            count++
            if(current.data == t){
                console.log("Present at the " + count + " position")
                console.log(prev.data,current.data);
                prev.next = current;
                current.prev = prev.next;

                current.next.next.prev = current;
            }
            prev = current.prev;
            next = current.next
            current = current.next;
           
        }  

    }

    //delete value before and after
    
    deleteBeforeAfter(target) {
        let current = this.head;
        while (current) {
            if (current.data === target) {
                let prev = current.prev;
                let next = current.next;
                if (prev) {
                    prev.prev.next = next;
                    next.prev = prev.prev;
                } else {
                    next.prev = null;
                    this.head = next;
                }
                break;
            }
            current = current.next;
        }
    }


    //for pritning the linked list
    printList(){
        if(this.head === null){
            console.log("Nothing to delete");
        }
        else{
            let data =" ";
            let current = this.head
            while(current!=null){
                data += current.data+"  "
                current = current.next
            }
            console.log(data);
        }
    }

}

const n = new DoublyLinkedList()
n.append(20);
n.append(30);
n.prepend(40);
n.prepend(50);
n.prepend(60);
n.deletePrepend()
n.deletePrepend()
n.deleteAppend()
n.deleteAppend()
n.deleteAppend();

let array = [1,2,3,4,5,6,7,8,9,10];
array.map((e)=>{
    n.prepend(e);
})
n.deleteBeforeAfter(8)
n.printList();


