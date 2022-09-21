/*
Q1:
Find all Australian airports that contain ‘International‘ in their name! 
You can use the knowledge that the country code for Australia is ’AU’.
*/
select name
from airports
where country_iso2 = 'AU'
and name like '%International%';

/* 
Q2:
Find the names of all cities with 4 or more airports! 
Include the country code and the number of airports in the result! 
(Note: we need the country code since cities in different countries can have the same name.)
*/

CREATE OR REPLACE VIEW q2mock (country_iso2 , city_name , airport_count) AS
SELECT country_iso2, city, count(code)
from airports
group by country_iso2, city
having count(code) >= 4 ;

/*
Q3:
Find the names and population sizes of all cities with population larger than 
every individual country in the continent of ‘Oceania‘! 
Sort the result by population size from the largest to the smallest countries!
*/
CREATE OR REPLACE VIEW q3mock (city_name, population) AS
select name as city_name, population
from cities
where population > (select max(population) from countries where continent='Ocenia')
order by population desc;

/*
Q4:
Find the names of top-20 countries with the most airports per capita! 
e.g., a country with 2 airports and a population of 1,000,000 would have 0.000002 airports per capita.
*/
CREATE OR REPLACE VIEW q4mock (country_name) AS
select C.name, population
from countries C join airports A on C.iso2 = A.country_iso2
group by iso2
order by count(A.code)/cast (population as decimal) desc
limit 20;

/*
q5:
Find the names of all cities that are 
(a) the capital of a country (i.e., capital=’primary’) with no land border and 
(b) a city with no airport. 
e.g., Valetta is the capital of the island of Malta, and Valetta has no airport. 
Therefore, Valetta should be in the result sets. 
(Recall that a country without a land border is in Table borders with country2 iso2 IS NULL.)
*/
CREATE OR REPLACE VIEW q5mock (city_name) AS
select CT.name as city_name
from cities CT join countries C on CT.country_iso2 = C.iso2
where capital='primary'
and not exists (
	select 1
	from borders
	where country1_iso2 = C.iso2 and country2_iso2 is not null
) and not exists (
	select 1
	from airports A
	where A.city = CT.name
	and A.country_iso2 = CT.country_iso2
);
/*
select c.name as city_name
from cities c join borders b on c.country_iso2 = b.country1_iso2
where caiptal='primary' 
and country2_iso2 is null
and not exists (
	select 1
	from airports a
	where a.city = c.name and a.country_iso2 = c.country_iso2
)
*/







