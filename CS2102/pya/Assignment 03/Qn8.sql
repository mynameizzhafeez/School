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

INSERT INTO Workers VALUES ('WA', 0);
INSERT INTO Workers VALUES ('WB', 1);
INSERT INTO Workers VALUES ('WC', 2);
INSERT INTO Workers VALUES ('WD', 3);
INSERT INTO Workers VALUES ('WE', 4);

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

INSERT INTO Offices VALUES ('A', 1, 'WA', DATE('1990-1-1'));
INSERT INTO Offices VALUES ('B', 2, 'WB', DATE('1990-1-31'));
INSERT INTO Offices VALUES ('C', 3, 'WC', DATE('1990-2-1'));
INSERT INTO Offices VALUES ('D', 4, 'WD', DATE('1990-2-28'));
INSERT INTO Offices VALUES ('E', 5, 'WE', DATE('1990-3-1'));

INSERT INTO Located VALUES ('CA', 'A');
INSERT INTO Located VALUES ('CA', 'E');
INSERT INTO Located VALUES ('CB', 'B');
INSERT INTO Located VALUES ('CB', 'C');
INSERT INTO Located VALUES ('CC', 'C');
INSERT INTO Located VALUES ('CC', 'D');
INSERT INTO Located VALUES ('CD', 'D');
INSERT INTO Located VALUES ('CD', 'E');
INSERT INTO Located VALUES ('CE', 'A');
INSERT INTO Located VALUES ('CE', 'E');
INSERT INTO Located VALUES ('CF', 'A');
INSERT INTO Located VALUES ('CG', 'B');
INSERT INTO Located VALUES ('CH', 'C');
INSERT INTO Located VALUES ('CI', 'D');
INSERT INTO Located VALUES ('CJ', 'E');

INSERT INTO CareTaker VALUES ('CA', 'A');
INSERT INTO CareTaker VALUES ('CB', 'B');
INSERT INTO CareTaker VALUES ('CC', 'C');
INSERT INTO CareTaker VALUES ('CD', 'A');
INSERT INTO CareTaker VALUES ('CE', 'B');
INSERT INTO CareTaker VALUES ('CF', 'C');

INSERT INTO PetOwner VALUES ('CD');
INSERT INTO PetOwner VALUES ('CE');
INSERT INTO PetOwner VALUES ('CF');
INSERT INTO PetOwner VALUES ('CG');
INSERT INTO PetOwner VALUES ('CH');
INSERT INTO PetOwner VALUES ('CI');
INSERT INTO PetOwner VALUES ('CJ');

INSERT INTO Pet VALUES ('CD', 'PetA1', 'A', 'D1');
INSERT INTO Pet VALUES ('CD', 'PetA2', 'B', 'D2');
INSERT INTO Pet VALUES ('CE', 'PetA1', 'A', 'D1');
INSERT INTO Pet VALUES ('CE', 'PetA2', 'D', 'D2');
INSERT INTO Pet VALUES ('CF', 'PetB1', 'E', 'D1');
INSERT INTO Pet VALUES ('CG', 'PetB2', 'F', 'D1');
INSERT INTO Pet VALUES ('CH', 'PetB3', 'G', 'D1');

INSERT INTO Availability VALUES ('CA', DATE('1990-1-1'), '12:00:00', '13:00:00');
INSERT INTO Availability VALUES ('CA', DATE('1990-1-1'), '13:00:00', '14:00:00');
INSERT INTO Availability VALUES ('CA', DATE('1990-1-1'), '14:00:00', '15:00:00');
INSERT INTO Availability VALUES ('CA', DATE('1990-1-1'), '15:00:00', '16:00:00');
INSERT INTO Availability VALUES ('CA', DATE('1990-1-1'), '16:00:00', '17:00:00');
INSERT INTO Availability VALUES ('CB', DATE('1990-1-1'), '12:00:00', '13:00:00');
INSERT INTO Availability VALUES ('CC', DATE('1990-1-1'), '12:00:00', '13:00:00');
INSERT INTO Availability VALUES ('CC', DATE('1990-1-1'), '13:00:00', '14:00:00');
INSERT INTO Availability VALUES ('CE', DATE('1990-1-1'), '12:00:00', '13:00:00');

INSERT INTO Bid VALUES ('CD', 'PetA2', 'CA', DATE('1990-1-1'), '12:00:00', '13:00:00', 100, null, FALSE);
INSERT INTO Bid VALUES ('CD', 'PetA1', 'CA', DATE('1990-1-1'), '13:00:00', '14:00:00', 200, 4, TRUE);
INSERT INTO Bid VALUES ('CD', 'PetA2', 'CA', DATE('1990-1-1'), '14:00:00', '15:00:00', 100, null, FALSE);
INSERT INTO Bid VALUES ('CE', 'PetA1', 'CA', DATE('1990-1-1'), '12:00:00', '13:00:00', 200, null, FALSE);
INSERT INTO Bid VALUES ('CE', 'PetA2', 'CA', DATE('1990-1-1'), '13:00:00', '14:00:00', 100, null, FALSE);
INSERT INTO Bid VALUES ('CE', 'PetA2', 'CA', DATE('1990-1-1'), '14:00:00', '15:00:00', 200, null, FALSE);
INSERT INTO Bid VALUES ('CE', 'PetA1', 'CA', DATE('1990-1-1'), '15:00:00', '16:00:00', 100, 3, TRUE);
INSERT INTO Bid VALUES ('CF', 'PetB1', 'CA', DATE('1990-1-1'), '12:00:00', '13:00:00', 200, null, FALSE);
INSERT INTO Bid VALUES ('CF', 'PetB1', 'CA', DATE('1990-1-1'), '13:00:00', '14:00:00', 100, null, FALSE);
INSERT INTO Bid VALUES ('CF', 'PetB1', 'CA', DATE('1990-1-1'), '14:00:00', '15:00:00', 200, null, FALSE);
INSERT INTO Bid VALUES ('CF', 'PetB1', 'CA', DATE('1990-1-1'), '15:00:00', '16:00:00', 100, null, FALSE);
INSERT INTO Bid VALUES ('CG', 'PetB2', 'CE', DATE('1990-1-1'), '12:00:00', '13:00:00', 200, 5, TRUE);
INSERT INTO Bid VALUES ('CG', 'PetB2', 'CA', DATE('1990-1-1'), '16:00:00', '17:00:00', 200, null, FALSE);
INSERT INTO Bid VALUES ('CH', 'PetB3', 'CA', DATE('1990-1-1'), '16:00:00', '17:00:00', 200, null, FALSE);
INSERT INTO Bid VALUES ('CH', 'PetB3', 'CC', DATE('1990-1-1'), '13:00:00', '14:00:00', 100, null, FALSE);

-- Dummy Table for Answer
DROP TABLE IF EXISTS Qn8_Test CASCADE;
CREATE TABLE Qn8_Test (
  pouname   varchar(50),
  name      varchar(50),
  ctuname   varchar(50),
  s_date    date,
  s_time    time,
  e_time    time,
  price     numeric
);

-- Dummy Data for Answer
INSERT INTO Qn8_Test VALUES ('CE', 'PetA1', 'CA', DATE('1990-1-1'), '12:00:00', '13:00:00', 200);
INSERT INTO Qn8_Test VALUES ('CE', 'PetA2', 'CA', DATE('1990-1-1'), '14:00:00', '15:00:00', 200);
INSERT INTO Qn8_Test VALUES ('CG', 'PetB2', 'CA', DATE('1990-1-1'), '16:00:00', '17:00:00', 200);
INSERT INTO Qn8_Test VALUES ('CH', 'PetB3', 'CA', DATE('1990-1-1'), '16:00:00', '17:00:00', 200);
INSERT INTO Qn8_Test VALUES ('CH', 'PetB3', 'CC', DATE('1990-1-1'), '13:00:00', '14:00:00', 100);

-- TEST YOUR ANSWER HERE
DROP VIEW IF EXISTS qn8;
/*
CREATE VIEW qn8 (pouname, name, ctuname, s_date, s_time, e_time, price) AS 
SELECT pouname, name, ctuname, s_date, s_time, e_time, price
FROM bid b1 join caretaker c on b1.ctuname = c.uname
where not exists (
	select 1
	from bid b2
	where b1.ctuname = b2.ctuname
	and b1.s_date = b2.s_date
	and b1.s_time = b2.s_time
	and b1.e_time = b2.e_time
	and b2.is_win = true
)
and price = (select max(price) 
			 from bid b3
			 where b1.ctuname = b3.ctuname
			and b1.s_date = b3.s_date
			and b1.s_time = b3.s_time
			and b1.e_time = b3.e_time)
and c.atype = (select atype 
			   from pet 
			   where b1.pouname = pet.uname 
			   and b1.name = pet.name)
and (
	select count(*)
	from located l1, located l2
	where l1.uname = b1.ctuname
	and l2.uname = b1.pouname
	and l1.area = l2.area
) > 0
;*/

CREATE VIEW qn8 (pouname, name, ctuname, s_date, s_time, e_time, price) AS 
SELECT B1.pouname, B1.name, B1.ctuname, B1.s_date, B1.s_time, B1.e_time, B1.price
FROM   Bid B1
WHERE  NOT EXISTS (
	/*
	SELECT 1
	FROM Bid B2, Pet P, CareTaker C 
	WHERE B2.ctuname = B1.ctuname
		AND  B2.ctuname = C.uname
		AND  B2.s_date = B1.s_date
		AND  B2.s_time = B1.s_time
		AND  B2.e_time = B1.e_time
		AND  B2.pouname = P.uname
		AND  B2.name    = P.name
		AND  B2.is_win*/
	select 1
	from bid b2
	where b1.ctuname = b2.ctuname
	and b1.s_date = b2.s_date
	and b1.s_time = b2.s_time
	and b1.e_time = b2.e_time
	and b2.is_win
)
AND NOT EXISTS (
	SELECT 1
	FROM Bid B2, Pet P, CareTaker C 
	WHERE B2.ctuname = B1.ctuname
	AND B2.pouname <> B1.pouname 
	AND B2.ctuname = C.uname
	AND B2.s_date = B1.s_date
	AND B2.s_time = B1.s_time
	AND B2.e_time = B1.e_time
	AND B2.pouname = P.uname 
	AND B2.name = P.name 
	AND ( -- selection criteria
     	( B2.price > B1.price )
  	 OR ( B2.price = B1.price AND
       	  P.atype  = C.atype )
  	 OR ( B2.price = B1.price AND
       	  P.atype <> C.atype  AND
		 (SELECT COUNT(*)
		  FROM Located L1, Located L2
		  WHERE L1.area = L2.area AND L1.uname = B2.pouname AND L2.uname= C.uname)
		> (SELECT COUNT(*)
		  FROM Located L1, Located L2
		  WHERE L1.area = L2.area AND L1.uname = B1.pouname AND L2.uname= C.uname)
		)))
;
------------------------

-- Test Code: MAKE SURE YOU HAVE YOUR ANSWER
SELECT * FROM qn8
ORDER BY pouname, name, ctuname, s_date, s_time, e_time; -- your answer

/*
SELECT * FROM Qn8_Test
ORDER BY pouname, name, ctuname, s_date, s_time, e_time; -- expected solution*/