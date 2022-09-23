CREATE OR REPLACE VIEW v4 (area) AS
SELECT a2.name
FROM mrt_stations m
LEFT JOIN subzones s ON m.subzone=s.name
LEFT JOIN areas a ON s.area=a.name,
areas a2
WHERE m.name = a2.name AND a.name <> a2.name
;
