-- Constraints how to define forein key

USE google;

CREATE TABLE Customers(
CustomerID INT PRIMARY KEY,
Name VARCHAR(20)
);

INSERT INTO Customers
(CustomerID , Name)
VALUES
(12, 'rahul'),
(13,'Shreya');

CREATE TABLE Orders(
OrderId INT PRIMARY KEY,
OrderDate DATE,
CustomerID INT,
FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Orders(OrderId, OrderDate, CustomerID)
VALUES
(10, '2025-07-28' , 12),
(11, '2025-07-28' , 13),
-- (14, '2025-07-28' , 14); error beacuse customerid isnt matching with customer table.









