Create database cognizant;

use cognizant;

CREATE table Artist(
 artist_id INT PRIMARY KEY,
 artist_name VARCHAR(100) NOT NULL
);

CREATE TABLE Followers (
    follower_id INT PRIMARY KEY,
    artist_id INT,
    follow_date DATE,
    FOREIGN KEY (artist_id) REFERENCES Artist(artist_id)
);

INSERT INTO Artist (artist_id, artist_name) VALUES
(1, 'Arijit Singh'),
(2, 'Shreya Ghoshal'),
(3, 'Atif Aslam'),
(4, 'Neha Kakkar');

INSERT INTO Followers (follower_id, artist_id, follow_date) VALUES
(1, 1, '2017-06-15'), -- Arijit, before 2018
(2, 1, '2019-03-21'), -- Arijit, after 2018
(3, 1, '2020-07-11'), -- Arijit, after 2018
(4, 2, '2018-09-05'), -- Shreya, in 2018
(5, 3, '2016-01-12'), -- Atif, before 2018
(6, 3, '2019-04-19'); 

-- SELECT A.artist_name,
--        COALESCE(COUNT(F.follower_id), 0) AS Followers
-- FROM Artist A
-- LEFT JOIN Followers F
--        ON A.artist_id = F.artist_id
--        AND EXTRACT(YEAR FROM F.follow_date) >= 2018
-- GROUP BY A.artist_name
-- ORDER BY A.artist_name;


CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100)
);

CREATE TABLE Enrollments (
    enroll_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enroll_date DATE,
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
);
INSERT INTO Students (student_id, student_name) VALUES
(1, 'Alice'),
(2, 'Bob'),
(3, 'Charlie'),
(4, 'David'),
(5, 'Eva');

INSERT INTO Enrollments (enroll_id, student_id, course_id, enroll_date) VALUES
(101, 1, 'C1', DATE '2019-09-01'),  -- Alice, before 2020
(102, 1, 'C2', DATE '2021-01-10'),  -- Alice, after 2020
(103, 2, 'C3', DATE '2020-05-15'),  -- Bob, in 2020
(104, 2, 'C4', DATE '2021-07-20'),  -- Bob, after 2020
(105, 3, 'C5', DATE '2021-03-30'),  -- Charlie, after 2020
(106, 3, 'C6', DATE '2022-11-12'),  -- Charlie, after 2020
(107, 5, 'C7', DATE '2018-04-05');  -- Eva, before 2020









