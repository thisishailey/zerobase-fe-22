class Graph {
    constructor() {
        this.edge = {};
    }

    addVertex(v) {
        this.edge[v] = [];
    }
    addEdge(v1, v2) {
        this.edge[v1].push(v2);
    }

    removeEdge(v1, v2) {
        if (this.edge[v1]) {
            let idx = this.edge[v1].indexOf(v2);

            if (idx !== -1) {
                this.edge[v1].splice(idx, 1);
            }

            if (this.edge[v1].length === 0) {
                this.removeVertex(v1);
            }
        }
    }
    removeVertex(v) {
        if (this.edge[v] === undefined) return;
        delete this.edge[v];
    }
}

let graph = new Graph();
let vertices = ['A', 'B', 'C', 'D', 'E'];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.edge);

graph.removeEdge('B', 'F');
graph.removeEdge('B', 'E');
console.log(graph.edge);

graph.removeVertex('B');
console.log(graph.edge);

graph.removeVertex('D');
console.log(graph.edge);
