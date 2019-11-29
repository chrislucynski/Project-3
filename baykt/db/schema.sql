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

-- need to insert an image URL to link image to the product entry
