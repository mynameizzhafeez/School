import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;
import java.util.function.Function;
public class MazeSolver implements IMazeSolver {
	private static final int TRUE_WALL = Integer.MAX_VALUE;
	private static final int EMPTY_SPACE = 0;
	private static final List<Function<Room, Integer>> WALL_FUNCTIONS = Arrays.asList(
			Room::getNorthWall,
			Room::getEastWall,
			Room::getWestWall,
			Room::getSouthWall
	);
	private static final int[][] DELTAS = new int[][] {
			{ -1, 0 }, // North
			{ 0, 1 }, // East
			{ 0, -1 }, // West
			{ 1, 0 } // South
	};
	private Maze maze;
	int maxRow;
	int maxCol;
	int[][] minFears;
	PriorityQueue<Node> queue;
	public MazeSolver() {
	}
	@Override
	public void initialize(Maze maze) {
		this.maze = maze;
	}
	public static class Node implements Comparable<Node> {
		Integer row;
		Integer col;
		Integer fear;
		Room room;
		public Node(Integer row, Integer col, Integer fear, Room room) {
			this.row = row;
			this.col = col;
			this.fear = fear;
			this.room = room;
		}
		@Override
		public int compareTo(Node node) {
			return this.fear.compareTo(node.fear);
		}
	}
	@Override
	public Integer pathSearch(int startRow, int startCol, int endRow, int endCol) throws Exception {
		this.maxRow = maze.getRows();
		this.maxCol = maze.getColumns();
		this.minFears = new int[this.maxRow][this.maxCol];
		this.queue = new PriorityQueue<Node>((x, y) -> x.compareTo(y));
		for (int i = 0; i < this.maxRow; i++) {
			this.minFears[i] = new int[this.maxCol];
			for (int j = 0; j < this.maxCol; j++) {
				this.minFears[i][j] = Integer.MAX_VALUE;
			}
		}
		this.minFears[startRow][startCol] = 0;
		Node startNode = new Node(startRow, startCol, 0, this.maze.getRoom(startRow, startCol));
		//Node endNode = new Node(endRow, endCol, this.minFears[endRow][endCol], this.maze.getRoom(endRow, endCol));
		this.queue.add(startNode);
		while (!this.queue.isEmpty()) {
			Node currNode = this.queue.poll();
			Room currRoom = currNode.room;
			int fear = currNode.fear;
			for (int i = 0; i < 4; i++) {
				Integer weight = MazeSolver.WALL_FUNCTIONS.get(i).apply(currRoom);
				if (weight.equals(MazeSolver.EMPTY_SPACE)) {
					weight = 1;
				}
				if (!weight.equals(MazeSolver.TRUE_WALL)) {
					int newRow = currNode.row+DELTAS[i][0];
					int newCol = currNode.col+DELTAS[i][1];
					int targetFear = this.minFears[newRow][newCol];
					if (targetFear > fear+weight) {
						Node newNode = new Node(newRow, newCol, fear+weight, this.maze.getRoom(newRow, newCol));
						this.minFears[newRow][newCol] = fear+weight;
						this.queue.add(newNode);
					}
				}
			}
		}
		Integer result = this.minFears[endRow][endCol];
		return result.equals(Integer.MAX_VALUE) ? null : result;
	}
	@Override
	public Integer bonusSearch(int startRow, int startCol, int endRow, int endCol) throws Exception {
		this.maxRow = maze.getRows();
		this.maxCol = maze.getColumns();
		this.minFears = new int[this.maxRow][this.maxCol];
		this.queue = new PriorityQueue<Node>((x, y) -> x.compareTo(y));
		for (int i = 0; i < this.maxRow; i++) {
			this.minFears[i] = new int[this.maxCol];
			for (int j = 0; j < this.maxCol; j++) {
				this.minFears[i][j] = Integer.MAX_VALUE;
			}
		}
		this.minFears[startRow][startCol] = 0;
		Node startNode = new Node(startRow, startCol, 0, this.maze.getRoom(startRow, startCol));
		//Node endNode = new Node(endRow, endCol, this.minFears[endRow][endCol], this.maze.getRoom(endRow, endCol));
		this.queue.add(startNode);
		while (!this.queue.isEmpty()) {
			Node currNode = this.queue.poll();
			Room currRoom = currNode.room;
			Integer fear = currNode.fear;
			for (int i = 0; i < 4; i++) {
				Integer weight = MazeSolver.WALL_FUNCTIONS.get(i).apply(currRoom);
				if (!weight.equals(MazeSolver.TRUE_WALL)) {
					int newRow = currNode.row+DELTAS[i][0];
					int newCol = currNode.col+DELTAS[i][1];
					Integer targetFear = this.minFears[newRow][newCol];
					Integer higher = fear > weight ? fear : weight;
					if (targetFear.compareTo(higher) > 0) {
						if (weight.equals(MazeSolver.EMPTY_SPACE)) {
							higher++;
						}
						Node newNode = new Node(newRow, newCol, higher, this.maze.getRoom(newRow, newCol));
						this.minFears[newRow][newCol] = higher;
						this.queue.add(newNode);
					}
				}
			}
		}
		Integer result = this.minFears[endRow][endCol];
		return result.equals(Integer.MAX_VALUE) ? null : result;
	}
	@Override
	public Integer bonusSearch(int startRow, int startCol, int endRow, int endCol, int sRow, int sCol) throws Exception {
		Integer normal = this.bonusSearch(startRow, startCol, endRow, endCol);
		int n = normal == null ? Integer.MAX_VALUE : normal;
		this.maxRow = maze.getRows();
		this.maxCol = maze.getColumns();
		this.minFears = new int[this.maxRow][this.maxCol];
		this.queue = new PriorityQueue<Node>((x, y) -> x.compareTo(y));
		for (int i = 0; i < this.maxRow; i++) {
			this.minFears[i] = new int[this.maxCol];
			for (int j = 0; j < this.maxCol; j++) {
				this.minFears[i][j] = Integer.MAX_VALUE;
			}
		}
		this.minFears[sRow][sCol] = -1;
		Node startNode = new Node(sRow, sCol, -1, this.maze.getRoom(sRow, sCol));
		this.queue.add(startNode);
		while (!this.queue.isEmpty()) {
			Node currNode = this.queue.poll();
			Room currRoom = currNode.room;
			Integer fear = currNode.fear;
			for (int i = 0; i < 4; i++) {
				Integer weight = MazeSolver.WALL_FUNCTIONS.get(i).apply(currRoom);
				if (!weight.equals(MazeSolver.TRUE_WALL)) {
					int newRow = currNode.row+DELTAS[i][0];
					int newCol = currNode.col+DELTAS[i][1];
					Integer targetFear = this.minFears[newRow][newCol];
					Integer higher = fear > weight ? fear : weight;
					if (targetFear.compareTo(higher) > 0) {
						if (weight.equals(MazeSolver.EMPTY_SPACE) && fear >= 0) {
							higher++;
						}
						Node newNode = new Node(newRow, newCol, higher, this.maze.getRoom(newRow, newCol));
						this.minFears[newRow][newCol] = higher;
						this.queue.add(newNode);
					}
				}
			}
		}
		int result = this.minFears[endRow][endCol];
		return n == Integer.MAX_VALUE ? null : Math.min(result, n);
	}
	public static void main(String[] args) {
		try {
			Maze maze = Maze.readMaze("haunted-maze-sample.txt");
			IMazeSolver solver = new MazeSolver();
			for (int i = 0; i < maze.getRows(); i++){
				for (int j = 0; j < maze.getColumns(); j++){
					for(int k = 0; k < maze.getRows(); k++){
						for (int l = 0; l < maze.getColumns(); l++){
							solver.initialize(maze);
							System.out.println(String.format("Start : (%d, %d), end : (%d,%d) : ",i,j,k,l) +solver.bonusSearch(i, j, k, l, 0, 2));
						}
					}
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}