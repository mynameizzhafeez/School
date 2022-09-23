CREATE OR REPLACE VIEW v3 (area, num_blocks) AS
SELECT name, num_blocks
FROM (
	SELECT a.name, COUNT(DISTINCT b.number) AS num_blocks
	FROM areas a
	LEFT JOIN subzones s ON s.area=a.name
	LEFT JOIN hdb_blocks b ON s.name=b.subzone
	GROUP BY a.name
) t1
ORDER BY num_blocks DESC
;
