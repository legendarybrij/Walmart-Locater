DROP DATABASE IF EXISTS userdb;
CREATE DATABASE userdb;

USE userdb;
CREATE TABLE user_login (
	user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(100) NOT NULL,
    passcode VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY (user_id)
);


DROP DATABASE IF EXISTS grocerydb;
CREATE DATABASE grocerydb;

USE grocerydb;
CREATE TABLE item (
	item_name VARCHAR(50) NOT NULL,
    categoryID VARCHAR(50) NOT NULL,
    imageLink VARCHAR(300) NOT NULL
);

USE grocerydb;
DROP TABLE IF EXISTS category; 
CREATE TABLE category (
    category_id INT NOT NULL AUTO_INCREMENT,
	category_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (category_id)
);







