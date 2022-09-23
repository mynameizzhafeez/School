CREATE OR REPLACE VIEW v10 (stop_code) AS
WITH max_table(mrt_line, number_code) AS (
	SELECT SUBSTRING(c.from_code, 0, 3), CAST(SUBSTRING(c.from_code, 3) AS INTEGER)
	FROM mrt_connections c
	LEFT JOIN mrt_stops s1 ON c.from_code=s1.code
	LEFT JOIN mrt_stops s2 ON c.to_code=s2.code
	WHERE s1.line=s2.line
		AND CAST(SUBSTRING(c.from_code, 3) AS INTEGER) <> 1
	GROUP BY c.from_code
	HAVING COUNT(*) <= 1
)

SELECT DISTINCT CONCAT(m.mrt_line, CAST(g AS TEXT))
FROM max_table m, GENERATE_SERIES(1, 100) g
WHERE m.number_code > g
EXCEPT
SELECT DISTINCT code
FROM mrt_stops
;
