CREATE OR REPLACE VIEW v9 (subzone, num_blocks) AS
SELECT t1.name, COUNT(t2.postal_code)
FROM (
	SELECT s.name
	FROM subzones s
	LEFT JOIN mrt_stations m ON m.subzone = s.name
	LEFT JOIN mrt_stops p ON p.station = m.name
	WHERE p.line = 'dt'
	GROUP BY s.name
) t1
LEFT JOIN (
	SELECT *
	FROM hdb_blocks b
	WHERE b.completed >= 2017
) t2 ON t2.subzone = t1.name
GROUP BY t1.name
;
