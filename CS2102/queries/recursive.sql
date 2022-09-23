WITH RECURSIVE mrt_path AS (
	SELECT from_code, to_code, 0 AS stops
	FROM mrt_connections
	WHERE from_code='cc6'
	UNION ALL
	SELECT c.from_code, c.to_code, p.stops+1
	FROM mrt_path p, mrt_connections c
	WHERE p.to_code = c.from_code
	AND p.stops < 2
)

SELECT DISTINCT to_code, stops, station, lat, lng
FROM mrt_path
ORDER BY stops ASC;