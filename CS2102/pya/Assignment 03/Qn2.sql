DROP TABLE IF EXISTS Bid CASCADE;
DROP TABLE IF EXISTS Availability CASCADE;
DROP TABLE IF EXISTS Pet CASCADE;
DROP TABLE IF EXISTS Trains CASCADE;
DROP TABLE IF EXISTS Recommends CASCADE;
DROP TABLE IF EXISTS Work CASCADE;
DROP TABLE IF EXISTS Located CASCADE;
DROP TABLE IF EXISTS Offices CASCADE;
DROP TABLE IF EXISTS PetOwner CASCADE;
DROP TABLE IF EXISTS CareTaker CASCADE;
DROP TABLE IF EXISTS Customers CASCADE;
DROP TABLE IF EXISTS Workers CASCADE;
DROP TABLE IF EXISTS Users CASCADE;

CREATE TABLE Users (
  uname     varchar(50) PRIMARY KEY,
  pass      varchar(256) NOT NULL
);

CREATE TABLE Workers (
  uname     varchar(50) PRIMARY KEY REFERENCES Users (uname),
  expr      integer
);

CREATE TABLE Customers (
  uname     varchar(50) PRIMARY KEY REFERENCES Users (uname)
);

CREATE TABLE CareTaker (
  uname     varchar(50) PRIMARY KEY REFERENCES Customers (uname),
  atype     varchar(20) NOT NULL
);

CREATE TABLE PetOwner (
  uname     varchar(50) PRIMARY KEY REFERENCES Customers (uname)
);

CREATE TABLE Offices (
  area      varchar(20) PRIMARY KEY,
  num_lvl   integer DEFAULT 1,
  uname     varchar(50) NOT NULL UNIQUE REFERENCES Workers (uname),
  s_date    date NOT NULL
);

CREATE TABLE Located (
  uname     varchar(50) REFERENCES Users (uname),
  area      varchar(20) REFERENCES Offices (area),
  PRIMARY KEY (uname, area)
);

CREATE TABLE Work (
  uname     varchar(50) REFERENCES Workers (uname),
  area      varchar(20) REFERENCES Offices (area),
  s_date    date NOT NULL
);

CREATE TABLE Recommends (
  giver     varchar(50) REFERENCES Users (uname),
  receiver  varchar(50) REFERENCES Users (uname),
  PRIMARY KEY (giver, receiver)
);

CREATE TABLE Trains (
  cuname    varchar(50) REFERENCES CareTaker (uname),
  wuname    varchar(50) REFERENCES Workers (uname),
  area      varchar(20) REFERENCES Offices (area),
  PRIMARY KEY (cuname, wuname, area)
);

CREATE TABLE Pet (
  uname     varchar(50) REFERENCES PetOwner (uname)
                        ON DELETE cascade,
  name      varchar(50),
  atype     varchar(20) NOT NULL,
  diet      varchar(20) NOT NULL,
  PRIMARY KEY (uname, name)
);

CREATE TABLE Availability (
  uname     varchar(50) REFERENCES CareTaker (uname)
                        ON DELETE cascade,
  s_date    date,
  s_time    time,
  e_time    time,
  PRIMARY KEY (uname, s_date, s_time, e_time)
);

CREATE TABLE Bid (
  pouname   varchar(50),
  name      varchar(50),
  ctuname   varchar(50),
  s_date    date,
  s_time    time,
  e_time    time,
  price     numeric NOT NULL,
  rating    integer CHECK ((rating IS NULL) OR (rating >= 0 AND rating <= 5)),
  is_win    boolean DEFAULT FALSE,
  FOREIGN KEY (pouname, name) REFERENCES Pet (uname, name),
  FOREIGN KEY (ctuname, s_date, s_time, e_time) REFERENCES Availability (uname, s_date, s_time, e_time),
  PRIMARY KEY (pouname, name, ctuname, s_date, s_time, e_time),
  CHECK (pouname <> ctuname)
);

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

INSERT INTO Offices VALUES ('A', 1, 'WA', DATE('1999-1-1'));
INSERT INTO Offices VALUES ('B', 2, 'WB', DATE('1999-1-1'));
INSERT INTO Offices VALUES ('C', 3, 'WC', DATE('1999-1-1'));
INSERT INTO Offices VALUES ('D', 4, 'WD', DATE('1999-1-1'));
INSERT INTO Offices VALUES ('E', 5, 'WE', DATE('1999-1-1'));

INSERT INTO Work VALUES ('WA', 'A', DATE('1999-1-1'));
INSERT INTO Work VALUES ('WB', 'B', DATE('1999-1-1'));
INSERT INTO Work VALUES ('WC', 'C', DATE('1999-1-1'));
INSERT INTO Work VALUES ('WD', 'D', DATE('1999-1-1'));
INSERT INTO Work VALUES ('WE', 'E', DATE('1999-1-1'));
INSERT INTO Work VALUES ('WF', 'A', DATE('1999-1-1'));
INSERT INTO Work VALUES ('WG', 'B', DATE('1999-1-1'));
INSERT INTO Work VALUES ('WH', 'C', DATE('1999-1-1'));
INSERT INTO Work VALUES ('WI', 'D', DATE('1999-1-1'));
INSERT INTO Work VALUES ('WJ', 'E', DATE('1999-1-1'));

-- Dummy Table for Answer
DROP TABLE IF EXISTS Qn2_Test CASCADE;
CREATE TABLE Qn2_Test (
  uname     varchar(50),
  expr      integer
);

-- Dummy Data for Answer
INSERT INTO Qn2_Test VALUES ('WC', 2);
INSERT INTO Qn2_Test VALUES ('WD', 3);
INSERT INTO Qn2_Test VALUES ('WE', 4);
INSERT INTO Qn2_Test VALUES ('WF', 5);
INSERT INTO Qn2_Test VALUES ('WG', 6);
INSERT INTO Qn2_Test VALUES ('WH', 7);
INSERT INTO Qn2_Test VALUES ('WI', 8);
INSERT INTO Qn2_Test VALUES ('WJ', 9);

-- TEST YOUR ANSWER HERE
DROP VIEW IF EXISTS qn2;
CREATE VIEW qn2 (uname, expr) AS 
SELECT uname, expr
FROM workers
where expr >= 5 and expr <= 10
union
select uname, expr
from workers natural join Offices
where num_lvl >= 3;
------------------------

-- Test Code: MAKE SURE YOU HAVE YOUR ANSWER
SELECT * FROM qn2
ORDER BY uname; -- your answer
SELECT * FROM Qn2_test
ORDER BY uname; -- expected solution
