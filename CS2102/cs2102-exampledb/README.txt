
The ZIP archive cs2102-exampledb.zip contains 5 files

* This README.txt file

* cs2102-exampledb-schema.png (ER diagram)

* cs2102-exampledb-schema.txt (DDL table defintions; not needed when importing the database dump)

* cs2102-exampledb-dump.sql (PostgresSQL dump of the example db)

* cs2102-exampledb-queries.txt (all queries used on the slides for Lectures 5 & 6)






Import Database Dump
====================

Step 1: Create a new database

Log into PostgreSQL (e.g., with psql) and create a new database, e.g.

CREATE DATABASE my_cs2102_exampledb;  -- Feel free to pick your own name



Step 2: Import dump into the newly create database, e.g.:

psql -d my_cs2102_exampledb -f cs2102-exampledb-dump.sql  -- you might need to add the full path where cs2102-exampledb-dump.sql is located



NOTE FOR WINDOWS USER: These commands work on Linux/Ubuntu. On Windows you might need to perform the import within the psql command tool [1]. First connect to the database:

\c my_cs2102_exampledb

And then import the dump using \i:

\i cs2102-exampledb-dump.sql  -- you might need to add the full path where cs2102-exampledb-dump.sql is located



[1] https://stackoverflow.com/questions/3204274/importing-sql-file-on-windows-to-postgresql






Testing the Data Import
=======================

These two steps should be all that's need to load the data. Now can connect to the database to execute the example queries. In case you use psql, connecting to a database can simply be done with:

\c my_cs2102_exampledb

For a quick test, try getting the number of all countries by executing the simply query

SELECT COUNT(*) FROM countries;

which should return 196 as result


