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
