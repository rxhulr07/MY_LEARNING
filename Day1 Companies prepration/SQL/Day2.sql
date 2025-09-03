use practice;

CREATE TABLE employee (
    employee_id INT PRIMARY KEY,
    name VARCHAR(50),
    salary INT,
    department_id INT,
    manager_id INT
);


CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50)
);

INSERT INTO employee (employee_id, name, salary, department_id, manager_id) VALUES
(1, 'Alice', 60000, 101, NULL),
(2, 'Bob', 45000, 101, 1),
(3, 'Charlie', 70000, 102, 1),
(4, 'David', 40000, 103, 2),
(5, 'Eva', 75000, 102, 1),
(6, 'Frank', 30000, NULL, 2),
(7, 'Grace', 50000, 104, 3),
(8, 'Helen', 55000, 104, 3),
(9, 'Ian', 65000, 105, 5),
(10, 'Julia', 47000, 105, 5);


INSERT INTO departments (department_id, department_name) VALUES
(101, 'HR'),
(102, 'IT'),
(103, 'Finance'),
(104, 'Marketing'),
(105, 'Sales'),
(106, 'Operations');

SELECT COUNT(employee_id)
FROM employee;

SELECT AVG(salary)
FROM employee;

SELECT MIN(salary) AS min_salary,
       MAX(salary) AS max_salary
FROM employee;

SELECT department_id,COUNT(employee_id) AS total_employees
FROM employee
GROUP BY department_id;

SELECT d.department_name, count(e.employee_id) AS total_employee
  from employee e
  join departments d
On e.department_id = d.department_id
group by department_name;


Select d.department_name, e.employee_id AS employee_details
 from employee e
 left join departments d
on e.department_id = d.department_id
where d.department_id is null;

select e.manager_name , e.employee_name
from

