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
  
    bfs(startingNode) {
      const visited = new Set();
      const queue = [];
  
      visited.add(startingNode);
      queue.push(startingNode);
  
      while (queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode);
  
        const neighbors = this.adjList.get(currentNode);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }
  
  // Example usage:
  const g = new Graph();
  g.addVertex(1);
  g.addVertex(2);
  g.addVertex(3);
  g.addVertex(4);
  
  g.addEdge(1, 2);
  g.addEdge(1, 3);
  g.addEdge(2, 4);
  
  g.bfs(1);
  