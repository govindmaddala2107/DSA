package Graphs;

public class AdjacencyMartixGraph {

    int adjMatrix[][];
    int vertices = 0;
    int edges = 0;

    public AdjacencyMartixGraph(int nodeCount) {
        adjMatrix = new int[nodeCount][nodeCount];
        vertices = nodeCount;
    }

    public void addNewNode(int u, int v) {
        this.adjMatrix[u][v] = 1;
        this.adjMatrix[v][u] = 1;
        this.edges++;
    }

    public String toString() {

        StringBuilder sb = new StringBuilder();
        sb.append(this.vertices + " vertices and " + this.edges + " edges \n");
        for (int i = 0; i < this.vertices; i++) {
            sb.append(i + ": ");
            for (int x : this.adjMatrix[i]) {
                sb.append(x + " ");
            }
            sb.append("\n");
        }

        return sb.toString();
    }

    public static void main(String[] args) {
        AdjacencyMartixGraph adjacencyMartixGraph = new AdjacencyMartixGraph(4);

        /*
         * 
         * [0]------[1]
         * | |
         * | |
         * [3]------[2]
         * 
         */
        adjacencyMartixGraph.addNewNode(0, 1);
        adjacencyMartixGraph.addNewNode(1, 2);
        adjacencyMartixGraph.addNewNode(2, 3);
        adjacencyMartixGraph.addNewNode(3, 0);

        /*
         * 
         * Resultant matrix will be like
         * 
         * 0 1 0 1
         * 1 0 1 0
         * 0 1 0 1
         * 1 0 1 0
         * 
         * 4 vertices and 4 edges
         * 0: 0 1 0 1
         * 1: 1 0 1 0
         * 2: 0 1 0 1
         * 3: 1 0 1 0
         * 
         */

        System.out.println(adjacencyMartixGraph);
    }

}
