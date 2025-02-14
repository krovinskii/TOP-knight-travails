// Use an **undirected graph** since the knight's movement is bidirectional.
// The only restriction is the knight's unique movement pattern; otherwise, movement is unrestricted.
// An undirected graph allows traversal in both directions efficiently.

// This project finds the shortest possible path for a knight on a chessboard.
// It takes two inputs: the starting position and the target position.
// Moves that go off the board or are invalid will be rejected.
// Chessboard is 8x8

//First we will create a vertex class. (Vertex is interchangeable with nodes)
class Vertex {
  constructor(position) {
    this.position = position;
    const moves = determineMoves(position); // Returns an array

    this.possibleMoves = {
      1: moves[0],
      2: moves[1],
      3: moves[2],
      4: moves[3],
      5: moves[4],
      6: moves[5],
      7: moves[6],
      8: moves[7],
    };
  }
}

const determineMoves = (position) => {
  //Position needs to be (x, y) format which would also be an array [0, 1]
  //Knight can move 2 squares horizontally(x) and 1 vertically(y)
  //Knight can move 2 squares vertically(y) and 1 horizontally(x)
  if (position.length !== 2) {
    console.log(
      "The position array in determineMoves() is not in [x, y] format"
    );
    return;
  }
  const oldX = position[0];
  const oldY = position[1];
  const move1 = (position) => {
    console.log(position);
    const newX = oldX + 2;
    const newY = oldY + 1;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("move 1 invalid move");
      return null;
    }
    return [newX, newY];
  };
  const move2 = (position) => {
    const newX = oldX + 2;
    const newY = oldY - 1;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("move 2 invalid move");
      return null;
    }
    return [newX, newY];
  };
  const move3 = (position) => {
    const newX = oldX - 2;
    const newY = oldY + 1;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("move 3 invalid move");
      return null;
    }
    return [newX, newY];
  };
  const move4 = (position) => {
    const newX = oldX - 2;
    const newY = oldY - 1;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("move 4 invalid move");
      return null;
    }
    return [newX, newY];
  };
  const move5 = (position) => {
    const newX = oldX + 1;
    const newY = oldY + 2;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("move 5 invalid move");
      return null;
    }
    return [newX, newY];
  };
  const move6 = (position) => {
    const newX = oldX + 1;
    const newY = oldY - 2;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("move 6 invalid move");
      return null;
    }
    return [newX, newY];
  };
  const move7 = (position) => {
    const newX = oldX - 1;
    const newY = oldY + 2;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("move 7 invalid move");
      return null;
    }
    return [newX, newY];
  };
  const move8 = (position) => {
    const newX = oldX - 1;
    const newY = oldY - 2;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("move 8 invalid move");
      return null;
    }
    return [newX, newY];
  };
  return [
    move1(),
    move2(),
    move3(),
    move4(),
    move5(),
    move6(),
    move7(),
    move8(),
  ];
};

const test = new Vertex([1, 0]);
console.log(test);

// We now need an algorithm to search the quickest way to get to the users desired input. This should be done with recursion.

const knightMoves = (start, end) => {
  // Input validation
  if (start.length !== 2 || end.length !== 2) {
    console.log("Invalid inputs in knightMoves. Should be x,y format.");
    return;
  }

  const queue = [[start]];
  const visited = new Set([start.toString()]);

  while (queue.length > 0) {
    const currentPath = queue.shift();
    const currentPosition = currentPath[currentPath.length - 1];

    if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
      return {
        path: currentPath,
        moves: currentPath.length - 1,
      };
    }

    // Get all possible moves from current position
    const currentVertex = new Vertex(currentPosition);
    const possibleMoves = Object.values(currentVertex.possibleMoves).filter(
      (move) => move !== null
    );

    // Try each possible move
    for (const move of possibleMoves) {
      const moveStr = move.toString();

      if (!visited.has(moveStr)) {
        visited.add(moveStr);
        const newPath = [...currentPath, move];
        queue.push(newPath);
      }
    }
  }

  return null;
};
const formatKnightPath = (result) => {
  if (!result) return "No path found!";

  const { path, moves } = result;
  let output = `You made it in ${moves} moves! Here's your path:\n`;

  path.forEach((position, index) => {
    output += `[${position[0]}, ${position[1]}]`;
    if (index < path.length - 1) output += " -> ";
  });

  return output;
};

const start = [0, 0];
const end = [7, 7];
const result = knightMoves(start, end);
console.log(formatKnightPath(result));
