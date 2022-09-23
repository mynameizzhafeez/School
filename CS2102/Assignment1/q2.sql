CREATE OR REPLACE VIEW v2 (number, street, distance) AS
SELECT number, street, dist
	FROM (
		SELECT
			b.number,
			b.street,
			ROUND(geodistance(1.29271, 103.7754, b.lat, b.lng), 2) AS dist
		FROM hdb_has_units u LEFT JOIN hdb_blocks b ON u.block_id=b.id
		WHERE u.unit_type = '1room'
	) t1
	ORDER BY dist ASC
	LIMIT 10
;
