/*
Q1:
Find all engineers who spend more than 10 hours per week on some project. -- not sum
Answer the question by creating a SQL view with the schema shown below, where eid is an engineer’s identifier.
*/
CREATE VIEW v1 (eid) AS 
select eid
from works
group by eid
having sum(hours) > 10;
/*
create view v1  (eid) as
select distinct eid
from Works
where hours > 10;
*/

/*
Q2:
Find all employees who specialize in at least two areas: 
the first area is ‘A’, and the second area is ‘B’ or ‘C’.
Answer the question by creating a SQL view with the schema shown below, where eid is an employee’s identifier.
*/
CREATE OR REPLACE VIEW v2 (eid) AS 
select distinct S1.eid
from specializes S1
where exists (
	select 1
	from specializes S2
	where S1.eid = S2.eid and aid = 'A'
) and exists (
	select 1 
	from specializes S3
	where (S1.eid = S3.eid) and (aid = 'B' or aid = 'C')
);

/*
create view v2 (eid) as
select distinct eid
from Specializes
where aid = 'A'
and eid in (
    select eid
    from  Specializes
    where aid in ('B', 'C')
);
*/

/*
Q3:
Find all employees who are located in the office with address ‘A’.
*/
CREATE VIEW v3 (eid) AS 
with dept_in_a as (
	select distinct did
	from departments
	where oid in (
		select oid
		from offices
		where address = 'A'
	)
)

select eid
from employees
where did in (select did from dept_in_a);
/*
create view v3 (eid) as
select E.eid
from (Employees E join Departments D on E.did = D.did) join Offices O on D.oid = O.oid
where address='A';
*/

/*
Q4: 
Find all managers who are not supervising any project.
*/
CREATE VIEW v4 (eid) AS 
select eid from managers 
except
select eid from projects;
/*
create view v4  (eid) as
select eid
from Managers
where eid not in (select eid from Projects);
*/

/*
Q5:
Find all engineers who spend at most 1 hour per week on every project that she/he works on. 
Exclude engineers who do not work on any project.
*/
CREATE OR REPLACE VIEW v5 (eid) AS 
select eid
from works
group by pid, eid
having max(hours) <= 1;
/*
create view v5  (eid) as
select eid
from Engineers E
where not exists (
    select 1
    from  Works W
    where W.eid = E.eid
    and W.hours > 1
)
and eid in (select eid from Works);
*/

/*
Q6:
For each employee, output (eid,num), where eid is the employee’s identifier, and num is defined as follows.
• if the employee is a manager, then num denote the number of departments managed by that manager,
• if the employee is an engineer, then num denote the number of projects that that the engineer works on,
• otherwise, num should have a value of 0.
*/
CREATE VIEW v6 (eid, num) AS 
select eid, count(did) as num
from departments
group by eid
union
select eid, count(pid) as num
from works
group by eid
union
select eid, 0
from employees
where eid not in (select eid from departments union select eid from works);

/*
create view v6 (eid, num) as
select eid, case
	when E.eid in (select eid from Managers) then
		(select count(*) from Departments where D.eid = E.eid)
	when E.eid in (select eid from Engineers) then
		(select count(*) from Works where W.eid = E.eid)
	else 0
	end as num
from Employees E;
*/

/*
Q7:
Find all projects where the number of engineers who work on that project is exactly two.
*/
CREATE VIEW v7 (pid, eid, eid2) AS 
with proj as (
	select pid
	from works
	group by pid
	having count(eid) = 2
)

select distinct W1.pid, W1.eid as eid, W2.eid as eid2
from works W1 join works W2 on W1.pid = W2.pid and W1.eid < W2.eid
where W1.pid in (select pid from proj);
/*
create view v7 (pid, eid, eid2) as
select distinct W.pid, W.eid, W2.eid
from Works W join Works W2 on W.pid = W2.pid and W.eid < W2.eid
where (select count(*) from Works where pid = W.pid) = 2;
*/


/*
Q8: 
For each specialization area A, 
find the number of distinct departments that have some employee who belongs to that department 
and specializes in area A. 

The number reported should be 0 if none of the employees specialize in A.
*/
CREATE VIEW v8 (aid, num) AS 
select aid, count(distinct(did)) as num
from (areas A natural left join specializes S) natural left join employees 
group by aid; 
/*
create view v8 (aid, num) as
select A.aid, count(distinct(E.did)) as num
from Areas A left outer join 
	(Specializes S natural join Employees E) on A.aid = S.aid
group by A.aid;
*/


/*
Q9:
department D is managing a project P if the manager who is supervising P belongs to D. 
Find projects where the number of engineers who work on that project is more than 
the number of employees who belong to the department that is managing that project.
*/
CREATE VIEW v9 (pid) AS 
select pid
from projects P natural join employees E
where (select COUNT(eid) from departments where did = E.did) < 
(select count(eid) from works where pid = P.pid);

/*
create view v9 (pid) as
select pid
from works W
group by pid
having count(eid) > (
	select count(eid)
	from Employees E
	where E.did = (
		select E2.did
		from Employees E2 join Projects P on E2.eid = P.eid and P.pid = W.pid
	)
);
*/


/*
Q10:
manager M manages an engineer E if E belongs to a department that is managed by M. 
manager M supervises an engineer E if E works on some project that is supervised by M. 
manager M is controlling if for every engineer E that is managed by M, 
either E is not supervised by any manager or E is supervised by only M and no other manager. 

Find all controlling managers. Include managers who do not manage any engineers.
*/
CREATE VIEW v10 (eid) AS
with manage_engineers as (
	select M1.eid as meid, E1.eid as eeid 
	from (managers M1 natural left join departments D1) left join employees E1 on D1.did = E1.did
	where E1.eid in (select eid from engineers)
), supervise_engineers as (
	select M2.eid as meid, W.eid as eeid
	from (managers M2 natural left join projects P) left join works W on P.pid = W.pid
)
select distinct ME.meid as eid
from manage_engineers ME
where ME.eeid NOT IN (
	select eeid
	from supervise_engineers
	where ME.eeid = eeid
) or ME.eeid IN (
	select eeid 
	from supervise_engineers 
	group by eeid 
	having count(meid) = 1 and sum(case meid when ME.meid then 0 else 1 end) = 0
);

/*
create view v10 (eid) as
select M.eid
from Managers M
where not exists (
	/* departments that are managed by M */
	select 1
	from Departments D
	where D.eid = M.eid
	and exists (
		/* employees who belong to department D (i.e. managed by M) */
		select 1
		from Employees E
		where E.eid in (
			/* engineers who work on projects not supervised by M */
			select W.eid
			from Works W join projects P on W.pid = P.pid and P.eid <> M.eid
		)
	)
);
*/

