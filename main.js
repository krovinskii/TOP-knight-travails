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
class Graph {
  constructor() {
    this.vertices = new Map(); // stores all vertices by position
  }

  addVertex(position) {
    const vertex = new Vertex(position);
    this.vertices.set(position.toString(), vertex);
    return vertex;
  }

  getVertex(position) {
    return this.vertices.get(position.toString());
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

//We now need an algorithm to search the quickest way to get to the users desired input. This should be done with recursion.

const knightMoves = (start, end, movesTaken) => {
  //Input validation
  if (start.length !== 2 || end.length !== 2) {
    console.log("invalid inputs in knightMoves. should be x,y format. ");
    return;
  }
  movesTaken = movesTaken || [start];
  //Base case
  if (start[0] === end[0] && start[1] === end[1]) {
    return movesTaken;
  }
  const startPosition = new Vertex(start);
  /*
  If the vertex.possible.moves.[1  - 8 ] !null

  then (knightMoves(possibleMoves[1 - 8] called on the position from the vertex.possible.moves[1-8]))

  keep track of movesTaken ( which is an array of x,y inputs so an array of arrays)
  movesTaken.length will give us our shortest length
  return the values of the shortest length
  */
};
