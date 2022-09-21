/*
Q1: 
Find all customers of PetER with a uname that starts with ‘A’ and consists of at least 5 characters. 
*/
CREATE OR REPLACE VIEW qn1 (uname) AS 
select uname 
from customers
where uname like '%a____';

/*
Q2:
Find all pet of atype ‘A’ or ‘B’ that have a diet type ‘D1’. 
*/
CREATE OR REPLACE VIEW qn2 (uname, name) AS 
select distinct uname, name
from pet
where (atype = 'A' or atype = 'B') and diet = 'D1';

/*
Q3:
Find all customers that are not simultaneously both a pet owner and a care taker. 
*/
CREATE OR REPLACE VIEW qn3 (uname) AS 
select distinct uname
from customers
where not (uname in (select uname from caretaker) and uname in (select uname from petowner)) ;

/*
(select uname from petowner except select uname from caretaker)
union
(select uname from caretaker except select uname from petowner);
*/

/*
Q4:
Find all pet owner who has won at least one bid for an availability of the care taker 
but has not given any rating for that bid.
*/
CREATE OR REPLACE VIEW qn4 (uname) AS 
select distinct pouname as uname 
from bid
where is_win = true and rating is null;


/*
Q5:
Find all pairs of pet owners (P1, P2) that both have 
at least own one pet of the same atype and P1.name < P2.name. 
Exclude any pet owner that do not own any pet. 
*/
CREATE OR REPLACE VIEW qn5 (p1uname, p2uname) AS 
SELECT distinct P1.uname as p1uname, P2.uname as p2uname
from Pet P1 join Pet P2 on P1.atype = P2.atype and P1.uname < P2.uname;


/*
Q6:
For each worker W, find the number of distinct workers besides W that work in at least one same office as W. 
In other words, if W is the only worker working in an office O, then the number should be 0.
*/
CREATE OR REPLACE VIEW qn6 (uname, num) AS 
SELECT distinct uname, 
	(select count(distinct(uname)) 
	 from work W2
	 where area in (
		 	select area 
		  	from work 
		 	where WR.uname = uname
	 ) and W2.uname <> WR.uname) as num
from workers WR;
/*
select W1.uname, count(distinct(W1.uname, W2.uname))
from works W1, works W2
where W1.area = W2.area
group by W1.name
*/

/*
Q7:
pet owner is obsessed with a care taker if the pet owner has bid for all the availability of the care taker. 
For each pet owner, find all the care taker the pet owner is obsessed with. 
Exclude pet owner without any associated care taker.
*/
CREATE OR REPLACE VIEW qn7 (pouname, ctuname) AS 
select distinct PO.uname as pouname, CT.uname as ctuname
from petowner PO, caretaker CT
where not exists (
	select 1
	from availability A left join bid B
		on uname = ctuname and A.s_date = B.s_date and A.s_time = B.s_time and A.e_time = B.e_time
	where A.uname = CT.uname and pouname <> PO.uname
);
/*
select distinct B0.pouname, B0.ctuname
from Bid B0
where not exists (
	select 1 from availability A
	where B0.ctuname = A.uname
	and not exists (
		select 1 from bid B
		where A.uname = B.ctuname
		and A.s_date = B.s_date
		and A.s_time = B.s_time
		and A.e_time = B.e_time
		and B0.pouname = B.poname
	)
)
*/



/*
We say that a worker W is a director if the worker satisfies all of the following:
• W manages an office
• The office that W managed, has at least 3 workers that are also managers
• W does not work in any office that is managed by other workers besides W


*/
CREATE OR REPLACE VIEW qn8 (uname, area) AS 
select distinct uname, area
from offices O
where 3 <= (
	select count(distinct(uname))
	from work W
	where W.uname in (select uname from offices where O.uname = uname) 
	and W.uname <> O.uname 
	and O.area = W.area
) and not exists (
	select 1
	from work W2
	where W2.uname = O.uname and W2.area <> O.area
);

/*
with MgrWithNoMgr as (
	select O.uname
	from offices O
	except
	select W.uname
	from works W
	where exists (
		select 1
		from offices O
		where O.uname <> W.uname
		and W.area = O.area
	)
)

select M.uname, O1.area
from MgrWithNoMgr natural join offices O1
where (
	select count(*)
	from offices O2, work W
	where O2.uname = W.uname
	and O2.uname <> M.uname
	and W.area = O1.area
) >= 3;
*/









