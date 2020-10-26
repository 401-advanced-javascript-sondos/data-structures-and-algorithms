'use strict';

// vertex wich reprsent the nodes
class Vertex {
  constructor(value) {
    this.value = value;
  }
}


// edge which represent the line beteween nodes 
class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}



class Graph {
  constructor() {
    this.list = new Map();
  }


  // AddNode(node)
  addVertex(vertex) {
    // const node=new Vertex(vertex);
    this.list.set(vertex, []);
    return vertex;
  }

  // AddEdge(start,end,wt)
  addEdge(startVertex, endVertex, weight) {
    if (!this.list.has(startVertex) || !this.list.has(endVertex)) {
      // console.log("Vertex not found !!!");
      return 'Vertex not found !!!';
    } else {
      const adjacencies = this.list.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
      return Edge;
    }

  }

  // GetNeighbors()
  getNeighbours(vertex) {
    if (!this.list.has(vertex)) {
      return 'vertex does not exist';
    } else {
      return this.list.get(vertex);
    }
  }



  // GetNodes()
  getNodes() {
    console.log('intr', this.list.entries());
    return this.list.entries();
  }


  // Get size
  getSize() {
    return this.list.size;
  }


  bfs(node) {
    if (node == undefined || node.value == undefined) { return 'wrong input'; }

    let visited = [];
    let complete = [];

    visited.push(node);
    complete.push(node.value);


    while (visited.length > 0) {
      let current = visited.shift();
      let neighbours = this.getNeighbours(current);
      // console.log('ni', neighbours);
      for (let k of neighbours) {
        // console.log('vertex ni', k.vertex);
        const niNode = k.vertex;
        if (!complete.includes(k.vertex)) {
          complete.push(niNode.value);
          // console.log('add',niNode.value)
          visited.push(niNode);
        }
      }

    }
    // console.log('visited', complete);
    return complete;
  }



 



}

module.exports = { Vertex: Vertex, Edge: Edge, Graph: Graph };



