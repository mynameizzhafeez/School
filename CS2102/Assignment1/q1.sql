CREATE OR REPLACE VIEW v1 (area, num_stations) AS
SELECT area, COUNT(m.name)
FROM mrt_stations m
LEFT JOIN subzones s ON m.subzone=s.name
GROUP BY s.area
HAVING COUNT(m.name) >= 5
;
