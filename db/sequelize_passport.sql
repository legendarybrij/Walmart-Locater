-- DROP DATABASE IF EXISTS sequelize_passport;
CREATE DATABASE sequelize_passport;

USE sequelize_passport;

CREATE TABLE users
(
    id INT NOT NULL
    AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    username varchar(255),
    about TEXT, 
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


	-- INSERT INTO users (firstname, lastname, username, about, email, password) VALUES('john', 'john', 'john', 'about', 'john@gmail.com', 'john');
    -- INSERT INTO users (firstname, lastname, username, about, email, password) VALUES('jane', 'jane', 'jane', 'about', 'jane@gmail.com', 'jane');
    
    -- USE sequelize_passport;
    -- SELECT * FROM users;
