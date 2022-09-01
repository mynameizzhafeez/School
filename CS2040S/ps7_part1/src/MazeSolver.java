import java.util.*;

public class MazeSolver implements IMazeSolver {
	private static final int NORTH = 0, SOUTH = 1, EAST = 2, WEST = 3;
	private static int[][] DELTAS = new int[][] {
		{ -1, 0 }, // North
		{ 1, 0 }, // South
		{ 0, 1 }, // East
		{ 0, -1 } // West
	};

	private Maze maze;
	private Stack<CoordRoom> frontier;
	private int[][] depths;
	private int depth;
	private HashMap<Integer, Integer> depthHash;

	public MazeSolver() {
		maze = null;
	}

	@Override
	public void initialize(Maze maze) {
		this.maze = maze;
		int rows = maze.getRows();
		int cols = maze.getColumns();
		this.depths = new int[rows][cols];
		this.frontier = new Stack<CoordRoom>();
		this.depthHash = new HashMap<Integer, Integer>();
	}

	@Override
	public Integer pathSearch(int startRow, int startCol, int endRow, int endCol) throws Exception {
		if (maze == null) {
			throw new Exception("Oh no! You cannot call me without initializing the maze!");
		}

		if (startRow < 0 || startCol < 0 || startRow >= maze.getRows() || startCol >= maze.getColumns() ||
				endRow < 0 || endCol < 0 || endRow >= maze.getRows() || endCol >= maze.getColumns()) {
			throw new IllegalArgumentException("Invalid start/end coordinate");
		}

		// set all visited flag to false
		// before we begin our search
		for (int i = 0; i < maze.getRows(); ++i) {
			for (int j = 0; j < maze.getColumns(); ++j) {
				this.depths[i][j] = -1;
			}
		}

		this.depth = 0;
		this.frontier.add(new CoordRoom(startRow, startCol, maze.getRoom(startRow, startCol)));
		while (this.frontier.get() != null) {
			Stack<CoordRoom> newFrontier = new Stack<CoordRoom>();
			while (this.frontier.get() != null) {
				CoordRoom c = this.frontier.pop();
				visit(c, newFrontier);
			}
			this.depth++;
			this.frontier = newFrontier;
		}
		int finalDepth = this.depths[endRow][endCol];
		if (finalDepth == -1) return null;
		backtrack(endRow, endCol, finalDepth);
		return finalDepth;
	}

	private void backtrack(int row, int col, int depth) {
		this.maze.getRoom(row, col).onPath = true;
		if (depth == 0) return;
		for (int dir = 0; dir < 4; dir++) {
			if (canGoBack(row, col, dir)) {
				int newRow = row+DELTAS[dir][0];
				int newCol = col+DELTAS[dir][1];
				if (this.depths[newRow][newCol] == depth-1) {
					backtrack(newRow, newCol, depth-1);
					break;
				}
			}
		}
	}

	private boolean canGo(int row, int col, int dir) {
		// not needed since our maze has a surrounding block of wall
		// but Joe the Average Coder is a defensive coder!

		int newRow = row + DELTAS[dir][0];
		int newCol = col + DELTAS[dir][1];
		if (newRow < 0 || newRow >= maze.getRows()) return false;
		if (newCol < 0 || newCol >= maze.getColumns()) return false;
		if (this.depths[newRow][newCol] != -1) return false;

		switch (dir) {
			case NORTH:
				return !maze.getRoom(row, col).hasNorthWall();
			case SOUTH:
				return !maze.getRoom(row, col).hasSouthWall();
			case EAST:
				return !maze.getRoom(row, col).hasEastWall();
			case WEST:
				return !maze.getRoom(row, col).hasWestWall();
		}

		return false;
	}

	private boolean canGoBack(int row, int col, int dir) {
		// not needed since our maze has a surrounding block of wall
		// but Joe the Average Coder is a defensive coder!

		int newRow = row + DELTAS[dir][0];
		int newCol = col + DELTAS[dir][1];
		if (newRow < 0 || newRow >= maze.getRows()) return false;
		if (newCol < 0 || newCol >= maze.getColumns()) return false;
		//if (this.depths[newRow][newCol] != -1) return false;

		switch (dir) {
			case NORTH:
				return !maze.getRoom(row, col).hasNorthWall();
			case SOUTH:
				return !maze.getRoom(row, col).hasSouthWall();
			case EAST:
				return !maze.getRoom(row, col).hasEastWall();
			case WEST:
				return !maze.getRoom(row, col).hasWestWall();
		}

		return false;
	}

	public void visit(CoordRoom coordRoom, Stack<CoordRoom> newFrontier) {
		int row = coordRoom.row;
		int col = coordRoom.col;
		this.depths[row][col] = this.depth;
		if (this.depthHash.get(this.depth) == null) {
			this.depthHash.put(this.depth, 1);
		} else {
			this.depthHash.put(this.depth, this.depthHash.get(this.depth)+1);
		}
		for (int dir = 0; dir < 4; dir++) {
//			System.out.println(String.format("%d,%d", row, col));
			if (canGo(row, col, dir)) {
				int newRow = row+DELTAS[dir][0];
				int newCol = col+DELTAS[dir][1];
//				System.out.println(String.format("%d,%d", newRow, newCol));
				newFrontier.add(new CoordRoom(newRow, newCol, this.maze.getRoom(newRow, newCol)));
				this.depths[newRow][newCol] = -2;
			}
		}
	}

	@Override
	public Integer numReachable(int k) throws Exception {
		if (this.depthHash.get(k) == null) return 0;
		return this.depthHash.get(k);
	}

	private static class CoordRoom {
		int row;
		int col;
		Room room;
		public CoordRoom(int row, int col, Room room) {
			this.row = row;
			this.col = col;
			this.room = room;
		}
	}

	private class Stack<T> {
		Node head;
		int length;
		private class Node {
			Node nextN;
			T v;
			public Node(T v, Node next) {
				this.v = v;
				this.nextN = next;
			}
		}
		public Stack() {
			this.head = null;
			this.length = 0;
		}
		public void add(T v) {
			this.head = new Node(v, this.head);
			this.length++;
		}
		public T pop() {
			T v = this.head.v;
			this.head = this.head.nextN;
			this.length--;
			return v;
		}
		public Node get() {
			return this.head;
		}
		public int len() {
			return this.length;
		}
	}

	public static void main(String[] args) {
		try {
			Maze maze = Maze.readMaze("maze-sample.txt");
			IMazeSolver solver = new MazeSolver();
			solver.initialize(maze);

			System.out.println(solver.pathSearch(0, 0, 2, 3));
			MazePrinter.printMaze(maze);

			for (int i = 0; i <= 9; ++i) {
				System.out.println("Steps " + i + " Rooms: " + solver.numReachable(i));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
