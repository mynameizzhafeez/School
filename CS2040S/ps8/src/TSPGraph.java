import java.util.Iterator;
import java.util.TreeSet;
import java.util.HashMap;
import java.util.HashSet;

public class TSPGraph implements IApproximateTSP {

    @Override
    public void MST(TSPMap map) {
        if (map.getCount() <= 1) return;
        TreeMapPriorityQueue<Double, Integer> pq = new TreeMapPriorityQueue<>();
        TreeSet<Integer> unvisited = new TreeSet<>();
        HashMap<Integer, Integer> sources = new HashMap<>();
        for (int i = 0; i < map.getCount(); i++) {
            unvisited.add(i);
            double dist = map.pointDistance(0, i);
            pq.add(i, dist);
            sources.put(i, 0);
        }
        while (!unvisited.isEmpty()) {
            int visit = pq.extractMin();
            if (visit != sources.get(visit)) {
                map.setLink(visit, sources.get(visit), false);
            }
            unvisited.remove(visit);
            Iterator<Integer> it = unvisited.iterator();
            while (it.hasNext()) {
                int nextVisit = it.next();
                Double dist = map.pointDistance(visit, nextVisit);
                Double prevDist = pq.lookup(nextVisit);
                if (dist < prevDist) {
                    sources.put(nextVisit, visit);
                }
                pq.decreasePriority(nextVisit, dist);
            }
        }
        map.redraw();
    }

    @Override
    public void TSP(TSPMap map) {
        MST(map);
        HashMap<Integer, TreeMapPriorityQueue<Double, Integer>> outgoingMap = new HashMap<>();
        for (int i = 0; i < map.getCount(); i++) {
            outgoingMap.put(i, new TreeMapPriorityQueue<Double, Integer>());
        }
        for (int i = 0; i < map.getCount(); i++) {
            int link = map.getPoint(i).getLink();
            if (link >= 0) {
                double dist = map.pointDistance(i, link);
                outgoingMap.get(link).add(i, dist);
            }
        }
        int last = TSPHelper(map, outgoingMap, 0);
        map.setLink(0, last);
        map.redraw();
    }

    public int TSPHelper(TSPMap map, HashMap<Integer, TreeMapPriorityQueue<Double, Integer>> outgoingMap, int place) {
        TreeMapPriorityQueue<Double, Integer> pq = outgoingMap.get(place);
        if (pq.isEmpty()) return place;
        int first = pq.extractMin();
        if (pq.isEmpty()) return TSPHelper(map, outgoingMap, first);
        int curr = TSPHelper(map, outgoingMap, first);
        while (!pq.isEmpty()) {
            int next = pq.extractMin();
            map.eraseLink(next, false);
            map.setLink(next, curr, false);
            curr = TSPHelper(map, outgoingMap, next);
        }
        return curr;
    }

    @Override
    public boolean isValidTour(TSPMap map) {
        // Note: this function should with with *any* map, and not just results from TSP().
        HashSet<Integer> visited = new HashSet<>();
        int curr = 0;
        boolean triggered = false;
        while (curr != 0 || !triggered) {
            triggered = true;
            if (visited.contains(curr) || curr < 0) return false;
            visited.add(curr);
            curr = map.getLink(curr);
        }
        return visited.size() == map.getCount();
    }

    @Override
    public double tourDistance(TSPMap map) {
        if (!isValidTour(map)) {
            return -1;
        }
        int curr = 0;
        boolean triggered = false;
        double total = 0;
        while (curr != 0 || !triggered) {
            triggered = true;
            int link = map.getLink(curr);
            total += map.pointDistance(curr, link);
            curr = link;
        }
        return total;
    }

    public static void main(String[] args) {
        TSPMap map = new TSPMap(args.length > 0 ? args[0] : "./hundredpoints.txt");
        TSPGraph graph = new TSPGraph();

        graph.MST(map);
//         graph.TSP(map);
//         System.out.println(graph.isValidTour(map));
//         System.out.println(graph.tourDistance(map));
    }
}
