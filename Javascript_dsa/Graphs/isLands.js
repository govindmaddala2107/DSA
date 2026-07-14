class Graphs{
    
    findAreaOfMaximumIsland = (island) => {

        let row = island.length;
        let col = island[0].length;

        let visited;
        for(let i=0; i < row; i++){
            for (let j=0; j < col; j++){
                visited[i][j] = false;
            }
        }

        for(let i=0; i < row; i++){
            for (let j=0; j < col; j++){
                if(!visited[i][j] && island[i][j] == 1){

                }
            }
        }
    }

    dfs = (island, i, j, visited) => {

    }
}