import java.util.HashMap;

public class MazeSolverWithPower implements IMazeSolverWithPower {
	private static final int NORTH = 0, SOUTH = 1, EAST = 2, WEST = 3;
	private static int[][] DELTAS = new int[][] {
		{ -1, 0 }, // North
		{ 1, 0 }, // South
		{ 0, 1 }, // East
		{ 0, -1 } // West
	};

	private Maze maze;
	private Stack<DPRQuery> frontier;
	private DPRoom[][] dpRooms;
	private HashMap<Integer, Integer> depthHash;

	public MazeSolverWithPower() {
	}

	@Override
	public void initialize(Maze maze) {
		this.maze = maze;
		int rows = maze.getRows();
		int cols = maze.getColumns();
		this.dpRooms = new DPRoom[rows][cols];
		this.frontier = new Stack<DPRQuery>();
		this.depthHash = new HashMap<Integer, Integer>();
	}

	@Override
	public Integer pathSearch(int startRow, int startCol, int endRow, int endCol) throws Exception {
		return pathSearch(startRow, startCol, endRow, endCol, 0);
	}

	public void process(DPRQuery q, Stack<DPRQuery> f) {
		if (q.p < 0) return;
		q.dpr.put(q);
		for (int dir = 0; dir < 4; dir++) {
			int goExtent = canGo(q, dir);
			if (goExtent >= 0) {
				int newRow = q.dpr.cr.row+DELTAS[dir][0];
				int newCol = q.dpr.cr.col+DELTAS[dir][1];
				DPRoom dpr = this.dpRooms[newRow][newCol];
				DPRQuery newQ = new DPRQuery(q.d+1, q.p-goExtent, dpr);
				f.add(newQ);
			}
		}
	}

	public int canGo(DPRQuery q, int dir) {
		// -1 -> cannot
		// 1 -> can go through wall
		// 0 -> can go freely
		int row = q.dpr.cr.row;
		int col = q.dpr.cr.col;
		int newRow = row + DELTAS[dir][0];
		int newCol = col + DELTAS[dir][1];
		if (newRow < 0 || newRow >= maze.getRows()) return -1;
		if (newCol < 0 || newCol >= maze.getColumns()) return -1;
		DPRoom dpr = this.dpRooms[newRow][newCol];
		Producer<Integer> checker = b -> {
			if (b) {
				if (dpr.addable(q.d+1, q.p-1)) {
					return 1;
				}
				return -1;
			} else if (dpr.addable(q.d+1, q.p)) {
				return 0;
			}
			return -1;
		};
		boolean b;
		switch (dir) {
			case NORTH:
				b = q.dpr.cr.room.hasNorthWall();
				return checker.produce(b);
			case SOUTH:
				b = q.dpr.cr.room.hasSouthWall();
				return checker.produce(b);
			case EAST:
				b = q.dpr.cr.room.hasEastWall();
				return checker.produce(b);
			case WEST:
				b = q.dpr.cr.room.hasWestWall();
				return checker.produce(b);
		}
		return -1;
	}

	public boolean backtrack(DPRoom dpr, int d, int p) {
		if (d == 0) {
			dpr.cr.room.onPath = true;
			return true;
		}
		for (int dir = 0; dir < 4; dir++) {
			int goExtent = canGoBack(dpr, dir, d, p);
			if (goExtent >= 0) {
				int row = dpr.cr.row;
				int col = dpr.cr.col;
				int newRow = row+DELTAS[dir][0];
				int newCol = col+DELTAS[dir][1];
				DPRoom newDpr = this.dpRooms[newRow][newCol];
				boolean b = backtrack(newDpr, d-1, goExtent);
				if (b) {
					dpr.cr.room.onPath = true;
					return true;
				}
			}
		}
		return false;
	}
	public int canGoBack(DPRoom dpr, int dir, int d, int p) {
		// -1 -> cannot
		// 1 -> can go through wall
		// 0 -> can go freely
		int row = dpr.cr.row;
		int col = dpr.cr.col;
		int newRow = row+DELTAS[dir][0];
		int newCol = col+DELTAS[dir][1];
		if (newRow < 0 || newRow >= maze.getRows()) return -1;
		if (newCol < 0 || newCol >= maze.getColumns()) return -1;
		DPRoom ddpr = this.dpRooms[newRow][newCol];
		Producer<Integer> checker = b -> {
			//System.out.println(ddpr.dp.get(d-1));
			if (b) {
				if (ddpr.dp.containsKey(d-1) && ddpr.dp.get(d-1) == p+1) return p+1;
				return -1;
			}
			if (ddpr.dp.containsKey(d-1) && ddpr.dp.get(d-1) == p) return p;
			return -1;
		};
		boolean b;
		switch (dir) {
			case NORTH:
				b = dpr.cr.room.hasNorthWall();
				return checker.produce(b);
			case SOUTH:
				b = dpr.cr.room.hasSouthWall();
				return checker.produce(b);
			case EAST:
				b = dpr.cr.room.hasEastWall();
				return checker.produce(b);
			case WEST:
				b = dpr.cr.room.hasWestWall();
				return checker.produce(b);
		}
		return -1;
	}

	@Override
	public Integer numReachable(int k) throws Exception {
		if (this.depthHash.get(k) == null) return 0;
		return this.depthHash.get(k);
	}

	@Override
	public Integer pathSearch(int startRow, int startCol, int endRow,
							  int endCol, int superpowers) throws Exception {
		if (maze == null) {
			throw new Exception("Oh no! You cannot call me without initializing the maze!");
		}

		if (startRow < 0 || startCol < 0 || startRow >= maze.getRows() || startCol >= maze.getColumns() ||
				endRow < 0 || endCol < 0 || endRow >= maze.getRows() || endCol >= maze.getColumns()) {
			throw new IllegalArgumentException("Invalid start/end coordinate");
		}

		// set all visited flag to false
		// before we begin our search
		this.depthHash = new HashMap<Integer, Integer>();
		for (int row = 0; row < maze.getRows(); ++row) {
			for (int col = 0; col < maze.getColumns(); ++col) {
				Room room = this.maze.getRoom(row, col);
				room.onPath = false;
				CoordRoom cr = new CoordRoom(row, col, room);
				this.dpRooms[row][col] = new DPRoom(cr, this.depthHash);
			}
		}
		DPRQuery firstQuery = new DPRQuery(0, superpowers, this.dpRooms[startRow][startCol]);
		this.frontier.add(firstQuery);
		while (!this.frontier.isEmpty()) {
			Stack<DPRQuery> newFrontier = new Stack<DPRQuery>();
			while (!this.frontier.isEmpty()) {
				DPRQuery q = this.frontier.pop();
				process(q, newFrontier);
			}
			this.frontier = newFrontier;
		}
		DPRoom finalRoom = this.dpRooms[endRow][endCol];
		Integer finalDepth = finalRoom.minDepth;
		if (finalDepth == null) return null;
		int finalPower = finalRoom.dp.get(finalDepth);
		//System.out.println(finalPower);
		boolean b = backtrack(finalRoom, finalDepth, finalPower);
		//System.out.println(this.dpRooms[3][0].cr.room.onPath);
		return finalDepth;
	}

	public static class CoordRoom {
		int row;
		int col;
		final Room room;
		public CoordRoom(int row, int col, Room room) {
			this.row = row;
			this.col = col;
			this.room = room;
		}
	}

	public static class DPRoom {
		private final HashMap<Integer, Integer> dp;
		private final CoordRoom cr;
		boolean processed;
		Integer minDepth;
		HashMap<Integer, Integer> h;
		public DPRoom(CoordRoom cr, HashMap<Integer, Integer> h) {
			this.dp = new HashMap<Integer, Integer>();
			this.cr = cr;
			this.processed = false;
			this.h = h;
		}
		public boolean addable(int d, int p) {
			if (p < 0) return false;
			if (this.dp.containsKey(d) && this.dp.get(d) >= p) return false;
			if (minDepth != null && this.dp.get(minDepth) >= p) return false;
			return !this.dp.containsValue(p);
		}
		public void put(DPRQuery q) {
			if (!this.processed) {
				if (h.containsKey(q.d)) {
					h.put(q.d, h.get(q.d)+1);
				} else {
					h.put(q.d, 1);
				}
				this.processed = true;
			}
			if (!this.dp.containsKey(q.d)) {
				this.dp.put(q.d, q.p);
			} else if (this.dp.get(q.d) < q.p) {
				this.dp.put(q.d, q.p);
			}
			if (this.minDepth == null || this.minDepth > q.d) {
				this.minDepth = q.d;
			}
		}
	}

	public static class DPRQuery {
		int d;
		int p;
		DPRoom dpr;
		public DPRQuery(int d, int p, DPRoom dpr) {
			this.d = d;
			this.p = p;
			this.dpr = dpr;
		}
	}

	public static class Stack<T> {
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
		public boolean isEmpty() {
			return this.length == 0;
		}
	}
	private interface Producer<T> {
		T produce(boolean b);
	}

	public static void main(String[] args) {
		try {
			Maze maze = Maze.readMaze("maze-dense.txt");
			IMazeSolverWithPower solver = new MazeSolverWithPower();
			solver.initialize(maze);

			System.out.println(solver.pathSearch(0, 0, 3, 1, 4));
			System.out.println(solver.pathSearch(0, 0, 18, 3, 80));
			MazePrinter.printMaze(maze);

			for (int i = 0; i <= 9; ++i) {
				System.out.println("Steps " + i + " Rooms: " + solver.numReachable(i));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
