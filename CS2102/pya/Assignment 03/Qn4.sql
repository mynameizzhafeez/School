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
INSERT INTO Users VALUES ('CA', 'A');
INSERT INTO Users VALUES ('CB', 'B');
INSERT INTO Users VALUES ('CC', 'C');
INSERT INTO Users VALUES ('CD', 'D');
INSERT INTO Users VALUES ('CE', 'E');
INSERT INTO Users VALUES ('CF', 'F');
INSERT INTO Users VALUES ('CG', 'G');
INSERT INTO Users VALUES ('CH', 'H');
INSERT INTO Users VALUES ('CI', 'I');
INSERT INTO Users VALUES ('CJ', 'J');

INSERT INTO Customers VALUES ('CA');
INSERT INTO Customers VALUES ('CB');
INSERT INTO Customers VALUES ('CC');
INSERT INTO Customers VALUES ('CD');
INSERT INTO Customers VALUES ('CE');
INSERT INTO Customers VALUES ('CF');
INSERT INTO Customers VALUES ('CG');
INSERT INTO Customers VALUES ('CH');
INSERT INTO Customers VALUES ('CI');
INSERT INTO Customers VALUES ('CJ');

INSERT INTO CareTaker VALUES ('CA', 'A');
INSERT INTO CareTaker VALUES ('CB', 'B');
INSERT INTO CareTaker VALUES ('CC', 'C');
INSERT INTO CareTaker VALUES ('CD', 'D');
INSERT INTO CareTaker VALUES ('CE', 'I');
INSERT INTO CareTaker VALUES ('CF', 'J');

INSERT INTO PetOwner VALUES ('CD');
INSERT INTO PetOwner VALUES ('CE');
INSERT INTO PetOwner VALUES ('CF');
INSERT INTO PetOwner VALUES ('CG');
INSERT INTO PetOwner VALUES ('CH');
INSERT INTO PetOwner VALUES ('CI');
INSERT INTO PetOwner VALUES ('CJ');

INSERT INTO Pet VALUES ('CD', 'PetA1', 'A', 'D1');
INSERT INTO Pet VALUES ('CD', 'PetA2', 'B', 'D2');
INSERT INTO Pet VALUES ('CE', 'PetA1', 'C', 'D1');
INSERT INTO Pet VALUES ('CE', 'PetA2', 'D', 'D2');
INSERT INTO Pet VALUES ('CF', 'PetB1', 'E', 'D1');
INSERT INTO Pet VALUES ('CG', 'PetB2', 'F', 'D1');
INSERT INTO Pet VALUES ('CH', 'PetB3', 'G', 'D1');

-- Dummy Table for Answer
DROP TABLE IF EXISTS Qn4_Test CASCADE;
CREATE TABLE Qn4_Test (
  ctuname   varchar(50),
  atype     varchar(20),
  name      varchar(50)
);

-- Dummy Data for Answer
INSERT INTO Qn4_Test VALUES ('CA', 'A', 'PetA1');
INSERT INTO Qn4_Test VALUES ('CB', 'B', 'PetA2');
INSERT INTO Qn4_Test VALUES ('CC', 'C', 'PetA1');
INSERT INTO Qn4_Test VALUES ('CD', 'D', 'PetA2');

-- TEST YOUR ANSWER HERE
DROP VIEW IF EXISTS qn4;
CREATE VIEW qn4 (ctuname, atype, name) AS 
SELECT c.uname, c.atype, p.name
from caretaker c join pet p on c.atype = p.atype 
;
------------------------

-- Test Code: MAKE SURE YOU HAVE YOUR ANSWER
SELECT * FROM qn4
ORDER BY ctuname; -- your answer

/*
SELECT * FROM Qn4_test
ORDER BY ctuname; -- expected solution
*/
