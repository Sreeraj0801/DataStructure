class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = null;
    }
}

class linkedList{
    constructor(head = null,size=0){
        this.head = head;
        this.size = size;
    }
    
    //add value to the beginning
    prepend(data){
        const n = new Node(data);
        if(this.head == 0)
        {
            this.head = n;
          
        }
        else{
            n.next = this.head;
            this.head = n;
        }
            this.size++
    }
    
    //add value at the end
    append(data){
      const n = new Node(data);
      let current = this.head;
       if(this.size == 0)
       {
           this.head = n;
       }
           while(current.next!=null){
           current = current.next;
       }
        current.next = n;
        this.size++;
    }
    
    

    //printing the values
    print(){
        let current = this.head
        while(current!=null){
            console.log(current);
            current = current.next
        }
    }
    
    //deleting the value from the front
    deletePrepend(){
        if(this.head == null)
        {
            console.log("no node are present")
        }
        else{
            console.log(this.head.data+" is deleted")
            this.head = this.head.next;
            this.size--
        }
    }
    
    //deleting the value from the end
    deleteAppend(){
        let current = this.head;
        let prev = null;
        if(this.head == null)
        {
            console.log("no nodes are present to delete")
        }
        else{
        while (current.next != null) {
            prev = current
            current = current.next;   
        }
        console.log(current.data, " Is deleted")
        prev.next = null;
        this.size--;
     }
    }
    //find a value
    findValue(value){
        let current = this.head
        if(current.data !==null){
            
        }
        else{
        while(current.data !=value){
         current = current.next
        }
        }
        
        if(current.next.data == value)
        {
            return "The value is present"
        }
        return "The value is not present"
        
    }
    
    //delete value after a specific position 
    deleteValuePosition(value){
        let current = this.head;
        let next = current.next
            while(current.data!=value){
            current =  current.next;
            next = current.next.next;
        }
        if(next ==null){
            this.deleteAppend();
        }
        else{
            console.log(current.next.data+"   is deleted")
            current.next = next;
            this.size--
        }
        
    }
    
     //To print the values
     printList(){
        let current = this.head
        let data ='';
        while (current){
            //console.log(current.data);
            data+= current.data + '   '
            current = current.next;
        }
        console.log(data)
     }
     
     //reversing a linked list
     reverseLinkedList(){
         let current = this.head;
         let prev = null;
         let next = null;
         while(current){
             next = current.next;
             current.next = prev;
             prev = current;
             current = next;
         }
         this.head = prev;
     }
     
     //reversing linked list using recursion 
     reverseRecursion(node=this.head,prev=null){
         if(!node){
             this.head = prev;
             return
         }
         let next = node.next;
         node.next = prev;
         this.reverseRecursion(next,node)
     }
}

//calling the class functions
const n = new linkedList()
 n.prepend(20)
 n.prepend(30)
 n.prepend(40)
 n.append(50)
//  n.deletePrepend()
//  n.deleteAppend()
//n.deleteValuePosition(30)
 n.printList();
n.reverseRecursion();
 n.printList();
