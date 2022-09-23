CREATE OR REPLACE VIEW v6 (subzone) AS
SELECT DISTINCT b.subzone
FROM hdb_has_units u
LEFT JOIN hdb_blocks b ON u.block_id=b.id
EXCEPT
SELECT DISTINCT b.subzone
FROM hdb_has_units u
LEFT JOIN hdb_blocks b ON u.block_id=b.id
WHERE u.unit_type='1room'
;
