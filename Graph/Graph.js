class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set() 
        }
    }
    addEdge(vertex1,vertex2,biDir){
        if(!this.adjacencyList[vertex1]){this.addVertex(vertex1)}
        if(!this.adjacencyList[vertex2]){this.addVertex(vertex2)}
        if(biDir){
            this.adjacencyList[vertex2].add(vertex1);
        }
        this.adjacencyList[vertex1].add(vertex2);
    }
    
    hasEdge(vertex1,vertex2){
        return( this.adjacencyList[vertex1].has(vertex2) &&
        this.adjacencyList[vertex2].has(vertex1))
    }
    edgeDelete(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
    
    deleteVertex(vertex){
        if(!this.adjacencyList[vertex])return "not a valid one"
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.edgeDelete(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " ---> " + [...this.adjacencyList[vertex]])
        }
    }
}

const n = new Graph();
n.addEdge(2,3,true);
n.addEdge(4,3,true);
n.addEdge(5,3,true);
console.log(n.deleteVertex(5))

n.display()
