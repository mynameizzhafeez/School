-- Dummy Data for Testing
INSERT INTO Users VALUES ('WA', 'A');
INSERT INTO Users VALUES ('WB', 'B');
INSERT INTO Users VALUES ('WC', 'C');
INSERT INTO Users VALUES ('WD', 'D');
INSERT INTO Users VALUES ('WE', 'E');
INSERT INTO Users VALUES ('WF', 'F');
INSERT INTO Users VALUES ('WG', 'G');
INSERT INTO Users VALUES ('WH', 'H');
INSERT INTO Users VALUES ('WI', 'I');
INSERT INTO Users VALUES ('WJ', 'J');

INSERT INTO Workers VALUES ('WA', 0);
INSERT INTO Workers VALUES ('WB', 1);
INSERT INTO Workers VALUES ('WC', 2);
INSERT INTO Workers VALUES ('WD', 3);
INSERT INTO Workers VALUES ('WE', 4);
INSERT INTO Workers VALUES ('WF', 5);
INSERT INTO Workers VALUES ('WG', 6);
INSERT INTO Workers VALUES ('WH', 7);
INSERT INTO Workers VALUES ('WI', 8);
INSERT INTO Workers VALUES ('WJ', 9);

-- Dummy Table for Answer
DROP TABLE IF EXISTS Qn1_Test CASCADE;
CREATE TABLE Qn1_Test (
  uname     varchar(50)
);

-- Dummy Data for Answer
INSERT INTO Qn1_Test VALUES ('WF');
INSERT INTO Qn1_Test VALUES ('WG');
INSERT INTO Qn1_Test VALUES ('WH');
INSERT INTO Qn1_Test VALUES ('WI');
INSERT INTO Qn1_Test VALUES ('WJ');

-- TEST YOUR ANSWER HERE
DROP VIEW IF EXISTS qn1;
CREATE VIEW qn1 (uname) AS 
SELECT uname
from workers
where expr >= 5;
------------------------

-- Test Code: MAKE SURE YOU HAVE YOUR ANSWER
SELECT * FROM qn1
ORDER BY uname;  -- your answer
SELECT * FROM Qn1_test
ORDER BY uname; -- expected solution
