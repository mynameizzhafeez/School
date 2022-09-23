CREATE OR REPLACE VIEW v7 (mrt_station) AS
SELECT DISTINCT s.station
FROM (
	SELECT c.from_code
	FROM mrt_connections c
	LEFT JOIN mrt_stops s1 ON c.from_code=s1.code
	LEFT JOIN mrt_stops s2 ON c.to_code=s2.code
	WHERE s1.line=s2.line
	GROUP BY c.from_code
	HAVING COUNT(*) <= 1
) t1
LEFT JOIN mrt_stops s ON t1.from_code = s.code
;
