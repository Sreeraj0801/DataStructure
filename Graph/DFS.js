class Graph {
    constructor() {
      this.adjList = new Map();
    }
  
    addVertex(v) {
      this.adjList.set(v, []);
    }
  
    addEdge(v, w) {
      this.adjList.get(v).push(w);
      this.adjList.get(w).push(v);
    }
  
    dfsHelper(node, visited) {
      visited.add(node);
      console.log(node);
  
      const neighbors = this.adjList.get(node);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this.dfsHelper(neighbor, visited);
        }
      }
    }
  
    dfs(startingNode) {
      const visited = new Set();
      this.dfsHelper(startingNode, visited);
    }
  }
  
  // Example usage:
  const g = new Graph();
  g.addVertex(1);
  g.addVertex(2);
  g.addVertex(3);
  g.addVertex(4);
  g.addVertex(6);
  
  g.addEdge(1, 2);
  g.addEdge(1, 3);
  g.addEdge(2, 6);
  
  g.dfs(1);
  