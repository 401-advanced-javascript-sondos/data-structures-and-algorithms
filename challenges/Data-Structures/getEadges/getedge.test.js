'use strict';


let GetEdges = require('./getedge');
let Vertex = require('../graphbft/bft').Vertex;
// let Edge = require('../graphbft/bft').Edge;




describe('test the graph', () => {


  const graph = new GetEdges();


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

  graph.addEdge(pandora, arendella, 150);
  graph.addEdge(pandora, mitroville, 82);
  graph.addEdge(arendella, mitroville ,99);
  graph.addEdge(arendella, monstroplolis , 42);
  graph.addEdge(mitroville, narnia, 37);
  graph.addEdge(mitroville, naboo,26);
  graph.addEdge(monstroplolis, mitroville,105);
  graph.addEdge(monstroplolis, naboo,73);
  graph.addEdge(narnia, naboo,250);


  it('the bfs output', () => {
    expect(graph.getedges([arendella, monstroplolis,naboo])).toEqual('true,115$');
    expect(graph.getedges([pandora, mitroville])).toEqual('true,82$');
    expect(graph.getedges([naboo,pandora])).toEqual('false,0$');
    expect(graph.getedges([narnia,arendella, naboo])).toEqual('false,0$');

  });
});


