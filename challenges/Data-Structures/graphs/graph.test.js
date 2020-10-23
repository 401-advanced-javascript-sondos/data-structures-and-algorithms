'use strict';

let Graph = require('./graph').Graph;
let Vertex = require('./graph').Vertex;
let Edge = require('./graph').Edge;

describe('test the graph', () => {
  const graph = new Graph();

  const two = new Vertex(2);
  const three = new Vertex(3);
  const six = new Vertex(6);
  graph.addVertex(two);
  graph.addVertex(three);


  it('addNode()', () => {
    expect(graph.addVertex(two).value).toBe(2);
  });


  it('addEdge()', () => {
    expect(graph.addEdge(two, six)).toBe('Vertex not found !!!');
    expect(graph.addEdge(two, three)).toBe(Edge);
  });


  it('getNeighbours()', () => {
    expect(graph.getNeighbours(six)).toBe('vertex does not exist');
    let result = graph.getNeighbours(two);
    expect(result).toBeDefined();
    expect(result[0].vertex).toBe(three);

  });

  it('getsize()', () => {
    let result = graph.getSize();
    expect(result).toBeDefined();
    expect(result).toEqual(2);

  });

  it('getVertexs()', () => {
    let result = graph.getNodes();
    expect(result).toBeDefined();

  });

});

