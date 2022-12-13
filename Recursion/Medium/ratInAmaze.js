/*
Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it.
Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell.
*/

let input = [ [1, 0, 0, 0],
              [1, 1, 0, 1],
              [1, 1, 0, 0],
              [0, 1, 1, 1]
            ]
 let N = input.length
            function printSolution(sol)
            {
                for (let i = 0; i < N; i++) {
                        for (let j = 0; j < N; j++)
                            console.log(
                                " " + sol[i][j] + " ");
                }   
            }
             
           
            function isSafe(maze,x,y)
            {
                // if (x, y outside maze) return false
                    return (x >= 0 && x < N && y >= 0
                            && y < N && maze[x][y] == 1);
            }
             
           
            function solveMaze(maze)
            {
                let sol = new Array(N);
                for(let i=0;i<N;i++)
                {
                    sol[i]=new Array(N);
                    for(let j=0;j<N;j++)
                    {
                        sol[i][j]=0;
                    }
                }
              
                    if (solveMazeUtil(maze, 0, 0, sol) == false) {
                        console.log("Solution doesn't exist");
                        return false;
                    }
              
                    printSolution(sol);
                    return true;
            }
          
            function solveMazeUtil(maze,x,y,sol)
            {
               
                    if (x == N - 1 && y == N - 1
                        && maze[x][y] == 1) {
                        sol[x][y] = 1;
                        return true;
                    }
              
                    
                    if (isSafe(maze, x, y) == true) {
                          
                          if (sol[x][y] == 1)
                              return false;
                        
                       
                        sol[x][y] = 1;
              
                        
                        if (solveMazeUtil(maze, x + 1, y, sol))
                            return true;
              
                      
                        if (solveMazeUtil(maze, x, y + 1, sol))
                            return true;
                        
                      
                        if (solveMazeUtil(maze, x - 1, y, sol))
                            return true;
              
                        if (solveMazeUtil(maze, x, y - 1, sol))
                            return true;
              
                      
                        sol[x][y] = 0;
                        return false;
                    }
              
                    return false;
            }

             solveMaze(input)
