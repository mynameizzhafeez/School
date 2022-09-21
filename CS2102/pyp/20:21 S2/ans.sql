/*
Q8:
find all projects that 
(1) have at least one employee who specialized in the area with aid = 1 working on that project, but 
(2) do not have any employee who specialized in the area with aid = 2 working on that project.
*/
select pid
from projects P
where exists (
	select 1
	from works W
	where W.pid = P.pid
	and W.eid in (select eid from specializes where aid = '1')
)
and not exists (
	select 1
	from works W2
	where W2.pid = P.pid
	and W2.eid in (select eid from specializes where aid = '2')
);
/*
select pid
from works natural join specializes
where aid = '1'
except
select pid
from works natural join specializes
where aid = '2';
*/

/*
Q9:
find the project with the second highest project budget among all the projects. 
Assume that the pbudget values are unique (i.e., no two projects have the same value for pbudget).
*/
SELECT pid
from projects
order by pbudget desc
offset 1
limit 1;

/*
Q10:
find all engineers who work on exactly n - 1 projects, 
where n is the number of projects in the database (i.e., n is the cardinality of the Projects table). 
Note that your answer must be correct for any value of n; i.e., your answer should not assume any specific value of n.
*/
SELECT eid
from works
group by eid
having count(distinct(pid)) = (select count(*) from projects) - 1;









