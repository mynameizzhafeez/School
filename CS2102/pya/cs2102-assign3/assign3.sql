-- CS2102 Assignment 3
--
-- Customers (cname, area)
-- Restaurants (rname, area)
-- Pizzas (pizza)
-- Sells (rname, pizza, price)
-- Likes (cname, pizza)

-- ENTER YOUR MATRICULATION NUMBER: A0221772J

DROP VIEW IF EXISTS qa, qb, qc, qd, qe, qf, qg, qh, qi, qj;
DROP VIEW IF EXISTS q1, q2, q3, q4, q5, q6, q7, q8, q9, q10;

-- Question 1
-- Find all restaurants that sell some  pizza that Alice likes.
CREATE OR REPLACE VIEW q1 (rname) AS
SELECT distinct rname
FROM Sells s
where exists (
	select 1
	from likes l
	where l.cname = 'Alice'
	and s.pizza = l.pizza
);

-- Question 2
-- Find all pizzas sold by restaurants that are located in the same area as Bob.
CREATE OR REPLACE VIEW q2 (pizza) AS
SELECT distinct pizza
from (sells s natural join restaurants r) natural join customers c
where c.cname = 'Bob';

-- Question 3
-- Find all customers who like at least two different pizzas.
CREATE OR REPLACE VIEW q3 (cname) AS
SELECT cname
from likes
group by cname
having count(distinct(pizza)) >= 2;


-- Question 4
-- Given two restaurants R1 and R2, we say that R1 is more expensive than R2 if for every pizza P that is sold by both R1 and R2, R1's selling price for P is higher than R2's selling price for P.  Find all pairs of restaurants (R1,R2) where R1 is more expensive than R2.  Exclude restaurant pairs that do not sell any common pizza.
CREATE VIEW q4 (rname1, rname2) AS
SELECT distinct s1.rname, s2.rname
FROM sells s1, sells s2
where s1.rname <> s2.rname
and s1.pizza = s2.pizza
group by s1.rname, s2.rname
having sum(case when s1.price > s2.price then 0 else 1 end) = 0;


-- Question 5
-- Find all customers such that every restaurant that is co-located with them sells only pizzas that they like.  
-- Exclude customers who are not co-located with any restaurant.
CREATE OR REPLACE VIEW q5 (cname) AS
SELECT distinct cname
from (customers c natural join restaurants r)
group by cname
having sum(case 
		   when (select count(*) 
				 from ((select pizza from sells where rname = r.rname) 
					   except 
					   (select pizza from likes where cname = c.cname)) as t )> 0 then 1 
		   else 0 end) = 0;
--pizza in (select pizza from likes where cname = c.cname)
-- exists (select 1 from likes where cname = c.cname and pizza = s.pizza) then 1

-- Question 6
-- You are given a budget of $40 to buy two distinct pizzas from the same restaurant. 
-- Find all restaurants that you could buy from (without exceeding your budget).
CREATE VIEW q6 (rname) AS
SELECT distinct rname
from sells s1
where exists (
	select 1
	from sells s2
	where s1.rname = s2.rname
	and s1.pizza <> s2.pizza
	and (s1.price + s2.price) <= 40
);


-- Question 7
/* Three friends (Moe, Larry, and Curly) plan to share three pizzas for dinner at a restaurant that must satisfy all these requirements: 
(a) the three pizzas ordered must be distinct pizzas, 
(b) the total cost of the three pizzas must not exceed $80, 
(c) each of the three pizzas must be liked by at least one of the friends, and 
(d) each of the friends must like at least two of the three pizzas 
(the pair of pizzas liked by each of them do not necessarily have to be the same).  

Find all (R,P1,P2,P3,TP) tuples where the three friends could share the pizzas {P1,P2,P3} 
from the restaurant R with a total cost of TP such that P1 < P2 < P3.
*/
CREATE OR REPLACE VIEW q7 (rname, pizza1, pizza2, pizza3, totalPrice) AS
with con_ab as (
	select distinct s1.rname as r, s1.pizza as p1, s2.pizza as p2, s3.pizza as p3, (s1.price + s2.price + s3.price) as tp
	from sells s1, sells s2, sells s3
	where s1.rname = s2.rname
	and s2.rname = s3.rname
	and s1.pizza < s2.pizza
	and s2.pizza < s3.pizza
	and (s1.price + s2.price + s3.price) <= 80
), con_c as (
	select *
	from con_ab
	where p1 in (select pizza from likes where cname in ('Moe', 'Larry', 'Curly'))
	and p2 in (select pizza from likes where cname in ('Moe', 'Larry', 'Curly'))
	and p3 in (select pizza from likes where cname in ('Moe', 'Larry', 'Curly'))
)

select * 
from con_c
where (select count(*) from likes where cname = 'Moe' and (pizza in (p1, p2, p3))) >= 2
and (select count(*) from likes where cname = 'Larry' and (pizza in (p1, p2, p3))) >= 2
and (select count(*) from likes where cname = 'Curly' and (pizza in (p1, p2, p3))) >= 2;


/* Question 8
Given a restaurant R, let numPizza(R) denote the number of pizzas sold by R and 
priceRange(R) denote the difference between the maximum and minimum prices of pizzas sold by R.  
If R does not sell any pizzas, then numPizza(R) = 0 and priceRange(R) = 0.  
Given two restaurants, R1 and R2, we say that R1 is more diverse than R2 if either 
(a) numPizza(R1) > numPizza(R2) and priceRange(R1) >= priceRange(R2), or 
(b) numPizza(R1) >= numPizza(R2) and priceRange(R1) > priceRange(R2).  

Find all restaurants R such that there does not exist any restaurant R2 that is more diverse than R.

*/
CREATE OR REPLACE VIEW q8 (rname) AS
with rinfo as (
	select rname, 
		(select count(distinct(pizza)) from sells where rname = r.rname) as num, 
		(select coalesce(max(price) - min(price), 0) from sells where rname = r.rname) as range
	from restaurants r 
)

select rname
from rinfo r1
where not exists (
	select 1
	from rinfo r2
	where (r2.num > r1.num and r2.range >= r1.range)
	or (r2.num >= r1.num and r2.range > r1.range)
);


-- Question 9

-- For each distinct area A in Customers.area, find the following information: (a) the area name A, (b) the total number of customers located in A, (c) the total number of restaurants located in A, and (d) the price of the most expensive pizza sold by restaurants in A; if there are no restaurants selling pizzas in A$ show the value 0.

CREATE OR REPLACE VIEW q9 (area, numCustomers, numRestaurants, maxPrice) AS
select area, count(distinct(cname)) as numCustomers, count(distinct(rname)) as numRestaurants, 
	(select coalesce(max(price), 0) 
	 from sells s1 natural join restaurants r2
	 where r2.area = c.area) as maxPrice
from customers c natural left join restaurants r1
group by area;

-- Question 10
-- Find all restaurants that satisfy the following conditions.  (a) the restaurant must sell at least three pizzas, (b) at least one the pizzas sold by the restaurant must be cheaper than $20, and (a) for each distinct area A in Customers.area, there must be at least two customers located in A who like at least one pizza sold by the restaurant. Note that the two customers do not necessarily like the same pizza sold by the restaurant.
CREATE OR REPLACE VIEW q10 (rname) AS
with con_ab as (
	select rname
	from sells s1
	group by rname
	having count(distinct(pizza)) >= 3
	and min(price) < 20
)

select rname
from con_ab cab
where (
	select count(*)
	from (select 1
		from customers c natural left join likes l
		where pizza in (select pizza from sells where cab.rname = rname)
		group by area
		having count(distinct(cname)) >= 2) as t
) = (select count(distinct(area)) from customers);


