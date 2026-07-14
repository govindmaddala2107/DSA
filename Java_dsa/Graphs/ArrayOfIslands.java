package Graphs;

import java.util.HashSet;

public class ArrayOfIslands {

    public int noOfIslands(char[][] allIslands) {
        HashSet hashSet = new HashSet<>();
        int rows = allIslands.length;
        int cols = allIslands[0].length;
        boolean visited[][] = new boolean[allIslands.length][allIslands[0].length];
        int islandCount = 0;
        int maxArea = 0;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (!visited[i][j] && allIslands[i][j] == '1') {
                    int maxIslandLength = dfs(allIslands, i, j, visited);
                    if(maxIslandLength > maxArea){
                        maxArea = maxIslandLength;
                    }
                    islandCount++;
                }
            }
        }
        System.out.println("Maximum area of Island " + maxArea);
        // hashSet.add(maxArea:"djd");
        hashSet.add(maxArea);
        
        return islandCount;
    }

    public int dfs(char[][] allIslands, int rows, int cols, boolean[][] visited) {
        int islandLength = 0;
        if (rows < 0 || cols < 0 || rows >= allIslands.length || cols >= allIslands[0].length || visited[rows][cols]
                || allIslands[rows][cols] == '0') {
            return islandLength;
        }

        visited[rows][cols] = true;
        islandLength = 1;
        // check for surrounding elements
        int down = dfs(allIslands, rows, cols + 1, visited);
        int up = dfs(allIslands, rows, cols - 1, visited);
        int right = dfs(allIslands, rows + 1, cols, visited);
        int left = dfs(allIslands, rows - 1, cols, visited);
        islandLength = islandLength + down + up + right + left;
        return islandLength;
    }

    public static void main(String[] args) {
        char[][] allIslands = new char[4][4];
        char[] zeroIndex = "1110".toCharArray();
        char[] firstIndex = "1000".toCharArray();
        char[] secondIndex = "0010".toCharArray();
        char[] thirdIndex = "0001".toCharArray();
        allIslands[0] = zeroIndex;
        allIslands[1] = firstIndex;
        allIslands[2] = secondIndex;
        allIslands[3] = thirdIndex;

        ArrayOfIslands arrayOfIslands = new ArrayOfIslands();

        int islandCount = arrayOfIslands.noOfIslands(allIslands);
        System.out.println("islandCount " + islandCount);
    }
}
