DROP DATABASE IF EXISTS baekd_db;
CREATE DATABASE baekd_db;
USE baekd_db;

CREATE TABLE products
(
	id int NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
	edible BOOLEAN NOT NULL,
    product_description VARCHAR(255),
	price DECIMAL(10, 2),
    PRIMARY KEY (id)
);



-- DO I NEED TO CREATE THESE TABLES??
CREATE TABLE articles 
(
	id INT NOT NULL AUTO_INCREMENT,
	headline VARCHAR(255) NOT NULL,
	link VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
)

CREATE TABLE recipes 
(

)
