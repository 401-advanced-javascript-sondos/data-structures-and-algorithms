'use strict';

let Depthfirst = require('./dfs');
let Vertex = require('../graphs/graph').Vertex;

describe('test the graph', () => {


  const graph = new Depthfirst();


  const A = new Vertex('A');
  const B = new Vertex('B');
  const C = new Vertex('C');
  const D = new Vertex('D');
  const E = new Vertex('E');
  const F = new Vertex('F');
  const G = new Vertex('G');
  const H = new Vertex('H');

  graph.addVertex(A);
  graph.addVertex(B);
  graph.addVertex(C);
  graph.addVertex(D);
  graph.addVertex(E);
  graph.addVertex(F);
  graph.addVertex(G);
  graph.addVertex(H);

  graph.addEdge(A, D, 0);
  graph.addEdge(A, B, 0);
  graph.addEdge(B, C, 0);
  graph.addEdge(C, G, 0);
  graph.addEdge(D, H, 0);
  graph.addEdge(D, E, 0);
  graph.addEdge(H, F, 0);


  it('the bfs output', () => {
    expect(graph.dfs(A)).toString('["A", "B", "C", "G", "D", "E", "H", "F"]');

  });
});
