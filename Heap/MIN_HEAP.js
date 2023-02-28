class Heap{
    constructor(){
        this.heap = [];
    }
    
    //MIN HEAP
    insertion(data){
        let length = this.heap.length;
        if(!length) this.heap.push(data);
        else {
            this.heap.push(data)
            let index = this.heap.length-1;
            let parent = Math.floor((index -1)/2)
            while(index>0 && this.heap[parent] > this.heap[index]){
                //swapping elements
                [this.heap[parent],this.heap[index]] = [ this.heap[index],this.heap[parent]]
                index = parent;
                parent = Math.floor((index -1)/2)
            }
        }
    }
    
    leftChild(index){
        return (2*index)+1;
    }
        rightChild(index){
        return (2*index)+2;
    }
    
    deletion(){
        if(!this.heap.length) return ("Empty heap"); 
        let last = this.heap.pop();
        this.heap[0] = last;
        let index = 0;
        while(!this.leftChild(index)){
        let leftChild = this.leftChild(index);
        let rightChild = this.rightChild(index);
        let minIndex = index;
        if(!leftChild) {
            break
        } ;
        if(this.heap[leftChild]<this.heap[rightChild]) minIndex = leftChild
        if(this.heap[rightChild]<this.heap[leftChild]) minIndex = rightChild
        if(this.heap[index]<this.heap[minIndex]){
            break;
        }
        else{
            let temp = this.heap[index];
            this.heap[index] = this.heap[minIndex];
            this.heap[minIndex] = temp ; 
            
            index = minIndex;
        }
        
        }
        return last
    }

    heapSort(){
        let sortedArray = [];
        for(let i = 0;i<this.heap.length;i++){
            sortedArray.push(this.deletion())
        }
        return sortedArray;
    }
}


const min = new Heap();
min.insertion(10);
min.insertion(4);
min.insertion(5);
min.insertion(8);


console.log(min.heapSort())