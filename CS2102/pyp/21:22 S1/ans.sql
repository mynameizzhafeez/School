/*
Q1:
Find the name of all African countries with a population of more than 100,000,000 people
*/
CREATE OR REPLACE VIEW q1 (country_name) AS
select name as country_name
from countries
where continent = 'Africa'
and population > 100000000;

/*
Q2:
For each continent, find the name of the continent with the corresponding number of countries 
in that continent which do NOT have any airport!
*/
CREATE OR REPLACE VIEW q2 (continent, country_count) AS
select continent, (
	select count(*) 
	from countries C
	where not exists (select 1 from airports A where C.iso2 = A.country_iso2)
	and C.continent = C2.continent
) as country_count 
from countries C2
group by continent;

/* 
select c.continent, count(*) as cnt
from countries c
where not exists (select 1 from airports a where a.country_iso2 = c.iso2)
group by continent;
*/

/*
Q3:
Find the name of the top 10 countries with the most land borders and 
the number of land borders they have!
*/
CREATE OR REPLACE VIEW q3 (country_name, border_count) AS
select distinct name as country_name, (
	select count(*) 
	from borders 
	where country1_iso2 = C.iso2 or country2_iso2 = C.iso2
	) as border_count 
from countries C
order by border_count desc
limit 10;

/*
select c.name, count(*) as cnt
from countries c, borders b
where c.iso2 = b.country1_iso2
group by c.iso2
order by cnt desc
limit 10;
*/

/*
Q4:
Find all pairs of name of countries that share a common land border where 
you can cross from Europe (country name1) into Asia (country name2)! 
For example Armenia (Europe) shares a land border with Iran (Asia), 
so (’Armenia’, ’Iran’) should be in the result.
*/
CREATE OR REPLACE VIEW q4 (country_name1, country_name2) AS
select C1.name as country_name1, C2.name as country_name2
from (borders B join countries C1 on country1_iso2 = C1.iso2) 
	join countries C2 on country2_iso2 = C2.iso2
where C1.continent = 'Europe'
and C2.continent='Asia';

/*
Q5:
Find the names of all Asian countries to which Singapore Airlines (airline code=’SQ’) does not fly! 
e.g., Singapore Airlines does not fly to Bhutan. 
Include the countries that do not have any airport. 
For example, Palestine does not have an airport, so Palestine should also be in the result.
*/
CREATE OR REPLACE VIEW q5 (country_name) AS
select name as country_name
from countries C
where continent='Asia' and not exists (
	select 1
	from routes R join airports A on to_code = code
	where C.iso2 = A.country_iso2 and airline_code = 'SQ' 
);



