class Node{
    constructor(data){
        this.data = data;
        this.left = this.right = null;
    }
}
//implementation of binary search tree ; 
class BinarySearchTree{
    constructor(data){
        this.root = null;
    }
    
    //checking wether its empty or not ;
    isEmpty(){
        return this.root === null;
    }
    
    //To insert  a node in tree
    insertNode(data){
        let node = new Node(data);
        if(!this.root)this.root = node;
        else{
            let current = this.root;
            while(true){
                if(data<current.data){
                    if(!current.left){
                        current.left = node;
                        break;
                    }else current = current.left;
                }
                else{

                    if(!current.right){
                        current.right = node;
                        break;
                    }
                    else current = current.right ; }}}}
    
    //To insert a data using recursion
    insertion(data){
        let node = new Node(data);
        if(!this.root)this.root = node;
        else this.insertHelper(this.root,node);
    }
    
    insertHelper(root,node){
        if(node.data<root.data){
            if(!root.left)root.left = node;
            else this.insertHelper(root.left,node);
        }
        else{
            if(!root.right) root.right = node;
            else this.insertHelper(root.right) = node;
        }
    }
    
    //To find a data;
    find(data){
        if(!this.root) return "Empty tree";
        else {
            let current = this.root;
            while(true){
                if(data < current.data){
                if(current.data === data) return data ;
                else current = current.left;
                }
                else if(current.data === data) return data;
                else if(current.data != data) return "Value not present in the table";
                else {
                    if(current.data === data) return data;
                    else current = current.right;}}}
        
    }
    
    //Recursive search method
    recursionFind(data){
        if(!this.root) return false;
        else{
           return  this.recursionHelper(this.root,data)
        }
    }
    
    recursionHelper(root,data){
        if(!root) return false;
        if(root.data === data) return true;
            
            if(data<root.data){
                if(root.data === data) return true;
                else return this.recursionHelper(root.left , data);
            }
            else{
                if(root.data === data) return true;
                else return  this.recursionHelper(root.right , data)
            }}
    
    
    //Traverse through
    // #DFS preOrder 
    preOrder(root,parent){
        if(root){
            console.log(root.data, "   ----------->   ",parent.data);
            this.preOrder(root.left,root);
            this.preOrder(root.right,root)}
    }
    
    //#DFS InOrder

    
    //DFS PostOrder
    postOrder(root){
        if(root){
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.data)
        }
    }
    
    //BFS 
    printOrder(){
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            let current = queue.shift();
            console.log(current.data);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }
    
    //Minimum value
    min(root){
        if(!root.left){return root.data}
        else{
            let current = root;
            while(true){
                if(current.left) current = current.left;
                else return current.data
            }}
        
    }
    
    //Maximum Value 
    max(root){
        if(!root.right) return root.data;
        else{
        let current = root;
        while(true){
            if(current.right) current = current.right;
            else return current.data;
        }
        }
    }
    
    //Delete Node
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    
    deleteNode(root,value){
        if(!root) return root;
        if(value < root.data) root.left = this.deleteNode(root.left,value);
        else if(value> root.data) root.right = this.deleteNode(root.right,value);
        else{
            if(!root.left && !root.right) return null;
            if(!root.left) return root.right;
            else if(!root.right) return root.left;
            root.data = this.min(root.right);
            root.right = this.deleteNode(this.right,root.data);
        }
        return root;
    }
    
}



const BST = new BinarySearchTree();
BST.insertion(10);
BST.insertNode(5);
BST.insertNode(3);
BST.insertNode(7);
BST.insertNode(15);
//BST.preOrder(BST.root,BST.root)
//BST.inOrder(BST.root)
//BST.postOrder(BST.root)
// console.log(BST.min(BST.root))
BST.delete(15)
BST.printOrder();