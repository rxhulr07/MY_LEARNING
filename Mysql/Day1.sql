CREATE DATABASE college;
USE college;

CREATE TABLE student(
rollno INT PRIMARY KEY,
name VARCHAR(50)
);

SELECT * FROM student;

insert INTO student
(rollno, name)
VALUES 
(101, "rahul"),
(102, "shreya");

insert INTO student VALUES (103, "shubh");



