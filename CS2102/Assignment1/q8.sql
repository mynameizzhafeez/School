CREATE OR REPLACE VIEW v8 (mrt_station, num_stops) AS
WITH RECURSIVE mrt_path AS (
	SELECT from_code, to_code, 0 AS stops
	FROM mrt_connections
	WHERE from_code='cc24'
	UNION ALL
	SELECT c.from_code, c.to_code, p.stops+1
	FROM mrt_path p, mrt_connections c
	WHERE p.to_code = c.from_code
	AND p.stops < 10
)
SELECT DISTINCT s.station, MIN(stops)
FROM mrt_path
LEFT JOIN mrt_stops s ON from_code=s.code
GROUP BY s.station
ORDER BY MIN(stops) ASC
;
