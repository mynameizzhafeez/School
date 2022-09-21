DROP TABLE IF EXISTS Assignment2;
CREATE TABLE Assignment2 (
  tid  integer PRIMARY KEY,
  val  integer
);

INSERT INTO Assignment2 VALUES (1, 100), (2, 200), (3, 300);


/* Simulating your answer here...
     Always give as  */
CREATE VIEW Question0 AS
  SELECT tid, val/tid AS valid
  FROM   Assignment2;




/* TEST CASES: some of these will be given... */
CREATE TABLE Answer0 (
  tid    integer,
  valid  integer
);

INSERT INTO Answer0 VALUES (1, 100), (2, 100), (3, 100);

SELECT COUNT(*)=3 AS is_correct FROM (
  SELECT * FROM Question0
  UNION
  SELECT * FROM Answer0
) AS Combined;