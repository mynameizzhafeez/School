SELECT A1.value, A2.value, B1.value, B2.value, B3.value
FROM (
  (SELECT row, value FROM simulator WHERE tname='t1' AND col='a1') A1,
  (SELECT row, value FROM simulator WHERE tname='t1' AND col='a2') A2,
  (SELECT row, value FROM simulator WHERE tname='t2' AND col='b1') B1,
  (SELECT row, value FROM simulator WHERE tname='t2' AND col='b2') B2,
  (SELECT row, value FROM simulator WHERE tname='t2' AND col='b3') B3,
 )
WHERE A1.row = A2.row
  AND B1.row = B2.row
  AND B2.row = B3.row
  AND A1.value = B2.value

WITH sim AS (
  SELECT A0.value
  FROM (
    (SELECT row, value FROM simulator2 WHERE tname='simulator' AND col='tname') TNAME,
    (SELECT row, value FROM simulator2 WHERE tname='simulator' AND col='col') COL,
    (SELECT row, value FROM simulator2 WHERE tname='simulator' AND col='row') ROW,
    (SELECT row, value FROM simulator2 WHERE tname='simulator' AND col='value') VALUE
  )
  WHERE TNAME.row = COL.row AND ROW.row = COL.row AND VALUE.row = COL.row
)
SELECT A0 value as a0
FROM (SELECT row, value FROM sim WHERE tname='t0' AND col='a0') AS A0
WHERE A0.value > '1010'
