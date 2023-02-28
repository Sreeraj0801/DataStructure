class Node{
    constructor(data){
            this.data = data;
            this.left = null;
            this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    //insertion 
    insertion(data){
        const node = new Node(data);
        if(!this.root) this.root = node;
        else{ this.insertionHelper(this.root,node)}
    }
    insertionHelper(root,node){
        console.log(node.data,root.data);
        if(node.data<root.data){
            if(root.left) this.insertionHelper(root.left,data)
            else {
                root.left = node;
                return
            }
        }
        else{
            if(root.right) this.insertionHelper(root.right,node)
            else {
                root.right= node;
                return
            }
        }
    }

    //Inorder 
    inOrder(root = this.root){
        if(root){
            this.inOrder(root.left);
            console.log(root.data)
            this.inOrder(root.right)
        }
    }
}

const BST = new BinarySearchTree();
BST.insertion(3)
BST.insertion(4)
BST.insertion(1)
BST.insertion(5)
BST.inOrder();
//console.log(BST)
