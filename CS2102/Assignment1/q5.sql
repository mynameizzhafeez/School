CREATE OR REPLACE VIEW v5 (mrt_station, num_blocks) AS
SELECT t1.name, COUNT(b) AS num_blocks
FROM hdb_blocks b, (
	SELECT m.name, m.lat, m.lng
	FROM mrt_stops s
	LEFT JOIN mrt_stations m ON s.station=m.name
	WHERE s.line = 'ew'
) t1
WHERE geodistance(b.lat, b.lng, t1.lat, t1.lng) < 0.3
GROUP BY t1.name
ORDER BY num_blocks DESC
LIMIT 5
;
