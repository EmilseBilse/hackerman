const smallMaze = [
    ['S', '0', '1', '0', 'E'],
    ['1', '0', '1', '0', '1'],
    ['0', '0', '0', '0', '0']
  ];

const medMaze = [
    ['S', '0', '1', '1', '0', 'E'],
    ['1', '0', '0', '1', '0', '1'],
    ['1', '1', '0', '0', '0', '1'],
    ['0', '0', '0', '1', '1', '0']
  ];

const bigMaze = [
    ['S', '0', '1', '1', '0', '0', 'E'],
    ['0', '0', '0', '1', '1', '0', '1'],
    ['1', '1', '0', '0', '0', '0', '0'],
    ['0', '0', '1', '1', '0', '1', '0'],
    ['0', '0', '0', '1', '1', '0', '0']
  ];

function solveMaze(maze) {
    const rows = maze.length;
    const cols = maze[0].length;
    let start = null, end = null;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (maze[i][j] === 'S') start = [i, j];
        if (maze[i][j] === 'E') end = [i, j];
      }
    }
    const directions = [
      [-1, 0], // up
      [1, 0],  // down
      [0, -1], // left
      [0, 1]   // right
    ];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const path = [];
    function dfs(x, y) {
      if (x === end[0] && y === end[1]) {
        path.push([x, y]);
        return true;
      }
      visited[x][y] = true;
      path.push([x, y]);
      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;
        if (
          newX >= 0 &&
          newX < rows &&
          newY >= 0 &&
          newY < cols &&
          !visited[newX][newY] &&
          maze[newX][newY] !== '1'
        ) {
          if (dfs(newX, newY)) {
            return true; // Found the exit
          }
        }
      }
      path.pop();
      return false;
    }
    dfs(start[0], start[1]);
    return path.length ? path : "No path found";
  }
  
  
  // Example usage:
  console.log(solveMaze(smallMaze)); // Output the path for the small maze
  console.log(solveMaze(medMaze));   // Output the path for the medium maze
  console.log(solveMaze(bigMaze));   // Output the path for the big maze




/* const form = document.getElementById('myForm');

const chars = [];

const str = 'a';

const aaa = str.split('');

let i = 0;

aaa.forEach(element => {

    if (chars.includes(element)) {
        console.log(i);
        return;
    }
    chars.push(element);
    i++;

}); */


/* form.addEventListener('submit', function(event) {
    event.preventDefault();
    matchRegex();
    poop();
});

function matchRegex() {
    const paragraph = document.getElementById('input').value;

    const regex = /[A-Z]/g;
    const found = paragraph.match(regex);
    console.log(found);
}

function poop() {
    const paragraph = document.getElementById('input').value;
    console.log(paragraph);
} */


