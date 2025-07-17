CREATE DATABASE google;
USE google;

CREATE TABLE employeeinfo(
id INT PRIMARY KEY,
name VARCHAR(30),
salary FLOAT
);

INSERT INTO employeeinfo
(id ,name, salary)
values
(1, "rahul", 100000.50),
(2, "shubh", 1000000.50),
(3, "shreya", 200000.50);

SELECT * FROM employeeinfo;
RENAME TABLE employeeinfo to employees;

-- primary key should be unique and not null
-- foregin key which is primary key in another table and it can be 
-- duplicate and null values;


CREATE TABLE temp1(
id INT UNIQUE
);


 
 SELECT * FROM temp1;

