'use strict';

const bft = require('./bft');

let Graph = require('./bft.js').Graph;
let Vertex = require('./bft.js').Vertex;
let Edge = require('./bft.js').Edge;




describe('test the graph', () => {


  const graph = new Graph();
  // const two = new Vertex(2);
  // const three = new Vertex(3);
  // const six = new Vertex(6);
  // graph.addVertex(two);
  // graph.addVertex(three);
  // graph.addVertex(six);
  // graph.addEdge(two, six);
  // graph.addEdge(two, six);
  // graph.addEdge(two, three);

  // const graph = new BreadthFirst();

  const pandora = new Vertex('Pandora');
  const arendella = new Vertex('Arendella');
  const mitroville = new Vertex('Metroville');
  const monstroplolis = new Vertex('Monstroplolis');
  const narnia = new Vertex('Narnia');
  const naboo = new Vertex('Naboo');

  graph.addVertex(pandora);
  graph.addVertex(arendella);
  graph.addVertex(mitroville);
  graph.addVertex(monstroplolis);
  graph.addVertex(narnia);
  graph.addVertex(naboo);

  graph.addEdge(pandora, arendella);
  graph.addEdge(arendella, mitroville);
  graph.addEdge(arendella, monstroplolis);
  graph.addEdge(mitroville, narnia);
  graph.addEdge(mitroville, naboo);
  graph.addEdge(monstroplolis, mitroville);
  graph.addEdge(monstroplolis, naboo);


  it('the bfs output', () => {
    expect(graph.bfs(pandora)).toEqual([ 'Pandora',
      'Arendella',
      'Metroville',
      'Monstroplolis',
      'Narnia',
      'Naboo',
      'Metroville',
      'Naboo',
      'Narnia',
      'Naboo' ]);
  });
});









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



