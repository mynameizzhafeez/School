
The ZIP archive cs2102-singaporedb.zip contains 5 files

* This README.txt file

* cs2102-singaporedb-erd.png (ER diagram)

* cs2102-singaporedb-schema.txt (DDL table defintions; not needed when importing the database dump)

* cs2102-singaporedb-functions.txt (definitions of function geodistance; see below)

* cs2102-singaporedb-dump.sql (PostgresSQL dump of the database)







Import Database Dump
====================

Step 1: Create a new database

Log into PostgreSQL (e.g., with psql) and create a new database, e.g.

CREATE DATABASE cs2102_singaporedb;  -- Feel free to pick your own name



Step 2: Import dump into the newly create database, e.g.:

psql -d cs2102_singaporedb -f * cs2102-singaporedb-dump.sql  -- you might need to add the full path where cs2102-singaporedb-dump.sql is located



NOTE FOR WINDOWS USER: These commands work on Linux/Ubuntu. On Windows you might need to perform the import within the psql command tool [1]. First connect to the database:

\c cs2102_singaporedb

And then import the dump using \i:

\i * cs2102-singaporedb-dump.sql  -- you might need to add the full path where cs2102-singaporedb-dump.sql is located



[1] https://stackoverflow.com/questions/3204274/importing-sql-file-on-windows-to-postgresql






Testing the Data Import
=======================

These two steps should be all that's need to load the data. Now can connect to the database to execute queries. In case you use psql, connecting to a database can simply be done with:

\c cs2102_singaporedb

For a quick test, try getting the number of all MRT stations by executing the simply query

SELECT COUNT(*) FROM mrt_stations;

which should return 127 as result


You can also test the function with provide you: "geodistance" computes the distances between to lat/lng pairs and returns the result in kilometers. For example, the query below computes the distance between the School of Computing (1.294775, 103.77378) and the Bukit Timah campus (1.318598, 103.817394):

SELECT geodistance(1.294775, 103.77378, 1.318598, 103.817394);




