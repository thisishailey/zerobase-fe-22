class Graph {
    constructor() {
        this.edge = {};
    }

    addVertex(v) {
        this.edge[v] = [];
    }
    addEdge(v1, v2) {
        this.edge[v1].push(v2);
        this.edge[v2].push(v1);
    }

    _removeEdge(v, e) {
        let idx = this.edge[v].indexOf(e);

        if (idx !== -1) {
            this.edge[v].splice(idx, 1);
        }

        if (this.edge[v].length === 0) {
            delete this.edge[v];
        }
    }
    removeEdge(v1, v2) {
        if (this.edge[v1]) {
            this._removeEdge(v1, v2);
        }
        if (this.edge[v2]) {
            this._removeEdge(v2, v1);
        }
    }
    removeVertex(v) {
        if (this.edge[v] === undefined) return;

        let length = this.edge[v].length;
        let connectedVertex = [...this.edge[v]];

        for (let i = 0; i < length; i++) {
            this.removeEdge(v, connectedVertex[i]);
        }
    }

    sizeVertex() {
        return Object.keys(this.edge).length;
    }
    sizeEdge(vertex) {
        return this.edge[vertex] ? this.edge[vertex].length : 0;
    }

    print() {
        for (let vertex in this.edge) {
            let neighbors = this.edge[vertex];
            if (neighbors.length === 0) continue;

            process.stdout.write(`${vertex} -> `);
            for (let j = 0; j < neighbors.length; j++) {
                process.stdout.write(`${neighbors[j]} `);
            }
            console.log('');
        }
        console.log('');
    }
}

let graph = new Graph();
let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

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
graph.print();

graph.removeEdge('B', 'F');
graph.removeEdge('B', 'E');
graph.print();

graph.removeVertex('B');
graph.print();

graph.removeVertex('D');
graph.print();

console.log(graph.sizeVertex());
console.log(graph.sizeEdge('C'));
console.log(graph.sizeEdge('J'));
