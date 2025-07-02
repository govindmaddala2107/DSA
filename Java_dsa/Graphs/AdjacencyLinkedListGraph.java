package Graphs;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class AdjacencyLinkedListGraph {

    LinkedList<Integer>[] adj;
    int vertices = 0;
    int edges = 0;

    public AdjacencyLinkedListGraph(int nodes) {
        vertices = nodes;
        adj = new LinkedList[nodes];
        for (int i = 0; i < nodes; i++) {
            adj[i] = new LinkedList<>();
        }
    }

    public void addEdge(int u, int v) {
        this.adj[u].add(v);
        this.adj[v].add(u);
        this.edges++;
    }

    public String toString() {

        StringBuilder sb = new StringBuilder();
        sb.append(this.vertices + " vertices and " + this.edges + " edges \n");
        for (int i = 0; i < this.vertices; i++) {
            sb.append(i + ": ");
            for (int x : this.adj[i]) {
                sb.append(x + " ");
            }
            sb.append("\n");
        }

        return sb.toString();
    }

    public void bfs(int initialNode) {
        boolean visitedNodesTracker[] = new boolean[this.vertices];
        Queue<Integer> queue = new LinkedList<>();
        visitedNodesTracker[initialNode] = true;
        queue.offer(initialNode);
        while (!queue.isEmpty()) {
            int u = queue.poll();
            System.out.print(u + " ");
            for (int v : this.adj[u]) {
                if (!visitedNodesTracker[v]) {
                    visitedNodesTracker[v] = true;
                    queue.offer(v);
                }
            }
        }
    }

    public void iterativeDFS(int initialNode) {
        boolean visitedNodesTracker[] = new boolean[this.vertices];
        Stack<Integer> stack = new Stack<>();
        stack.push(initialNode);
        while (!stack.isEmpty()) {
            int u = stack.pop();
            if (!visitedNodesTracker[u]) {
                visitedNodesTracker[u] = true;
                System.out.print(u + " ");
                for (int v : this.adj[u]) {
                    if (!visitedNodesTracker[v]) {
                        stack.push(v);
                    }
                }
            }
        }
    }

    public void recursiveDFS() {
        boolean[] visited = new boolean[this.vertices];
        for (int v = 0; v < vertices; v++) {
            if (!visited[v]) {
                recursiveDFS(v, visited);
            }
        }
    }

    public void recursiveDFS(int v, boolean[] visited) {
        visited[v] = true;
        System.out.print(v + " ");
        for (int w : this.adj[v]) {
            if (!visited[w]) {
                recursiveDFS(w, visited);
            }
        }
    }

    public void connectedComponents() {
        boolean[] visited = new boolean[this.vertices];
        int[] complId = new int[this.vertices];
        int count = 0;
        for (int v = 0; v < this.vertices; v++) {
            if (!visited[v]) {
                connectedComponents(v, visited, complId, count);
                count++;
            }
        }
        System.out.println("Connected components "+ count);
    }

    public void connectedComponents(int v, boolean[] visited, int[] complId, int count) {
        visited[v] = true;
        complId[v] = count;
        for (int w : this.adj[v]) {
            if (!visited[w]) {
                connectedComponents(w, visited, complId, count);
            }

        }
    }

    public static void main(String[] args) {
        AdjacencyLinkedListGraph adjacencyLinkedListGraph = new AdjacencyLinkedListGraph(4);

        /*
         * 
         * [0]------[1]
         * | |
         * | |
         * [3]------[2]
         * 
         */
        adjacencyLinkedListGraph.addEdge(0, 1);
        adjacencyLinkedListGraph.addEdge(1, 2);
        adjacencyLinkedListGraph.addEdge(2, 3);
        adjacencyLinkedListGraph.addEdge(3, 0);
        // adjacencyLinkedListGraph.addEdge(1, 1);

        /*
         * index: Linked List
         * [0] 1->3->null
         * [1] 0->2->null
         * [2] 1->2->null
         * [3] 2->0->null
         * 
         * 
         * 4 vertices and 4 edges
         * 0: 1 3
         * 1: 0 2
         * 2: 1 3
         * 3: 2 0
         */

        System.out.println(adjacencyLinkedListGraph);
        // adjacencyLinkedListGraph.bfs(1);
        adjacencyLinkedListGraph.iterativeDFS(0);
        System.out.println("\n---------------------------------");
        adjacencyLinkedListGraph.recursiveDFS();
        System.out.println("\n---------------------------------");
        adjacencyLinkedListGraph.connectedComponents();
    }

}
