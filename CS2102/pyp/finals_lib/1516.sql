-- Q1
select pid
from person 
where pcity = 'Singapore';

-- Q2
select cid, pname
from workfor w natural join person p
where p.pcity = 'Singapore'
and w.cid in (
	select cid
	from workfor
	group by cid 
	having count(pid) < 250
);

-- Q12
select cname
from customer c, orders o
where c.cid = o.cid
group by c.cid
having avg(qty) > (
	select avg(qty)
	from customer c2, orders o2
	where c2.cid = o2.cid
	and c.country = c2.country
);

-- Q14
select cname
from customer c1
where c1.country = 'Singapore'
and not exists (
	select 1
	from product p1
	where p1.pname like '%speakers%'
	and not exists (
		select 1
		from orders o1
		where o1.cid = c1.cid
		and o1.pid = p1.pid
	)
);

-- Q15
select country, coalesce(sum(qty), 0) as quantity
from product p1, customer c1, orders o1
where p1.pid = o1.pid
and c1.cid = o1.cid
and p1.pname = 'speakers'
group by country;

select c.cname
from customer c left outer join orders o on c.cid=o.cid
where c.country='Indonesia' and o.cid is null;

select c.cname
from customer c left outer join orders o on c.cid=o.cid and c.country='Indonesia'
where o.cid is null;

-- Q16
select code
from merchants natural join purchases
group by code
having sum(amount) >= all (
	select sum(amount)
	from merchants natural join purchases
	group by code
);

-- 1819s2 q18
SELECT rname
FROM restaurants
where area = 'Central'
union
select rname
from sells
group by rname
having count(pizza) >= 10
or max(price) <= 20;

-- Q19
select distinct(cname)
from customers c
where not exists (
	select 1
	from (likes l natural join sells s) natural join restaurants r
	where l.cname = c.cname
	and c.area = r.area
	group by pizza
	having count(distinct(rname)) < 2
);

-- Q20
with area_pizza as (
	select area, pizza
	from sells s natural join restaurants r
	group by area, pizza
	having count(distinct(rname)) >= all (
		select count(distinct(rname))
		from sells s2 natural join restaurants r2
		where area = r.area
		group by pizza
	)
)

select pizza
from area_pizza ap
group by pizza
having count(distinct(area)) >= all (
	select count(distinct(area))
	from area_pizza
	group by pizza
);

CREATE OR REPLACE function enforce_total_weekly_hours() 
RETURNS TRIGGER AS $trigger$ 
DECLARE
week_num integer; 
BEGIN
SELECT week INTO week_num 
FROM Works W
WHERE eid = NEW.eid
AND (SELECT SUM(hours)
FROM Works
WHERE eid = W.eid AND week = W.week
) > 40;

IF FOUND THEN
RAISE exception 'Employee % exceeds 40 work hours in week %', NEW.eid, week_num;
END IF;
RETURN NULL; END;
$trigger$ LANGUAGE plpgsql;
DROP TRIGGER IF EXISTS works_trigger ON Works CASCADE; CREATE CONSTRAINT TRIGGER works_trigger
AFTER INSERT OR UPDATE OF hours ON Works DEFERRABLE INITIALLY DEFERRED
FOR EACH ROW
EXECUTE FUNCTION enforce_total_weekly_hours();


select * from specializes;

update works
set hours = 41
where eid = 1 and week = 2;

insert into profs(pid) values (1), (2), (3);
insert into areas(aid) values (1), (2), (3);

insert into specializes(pid) values (1);
