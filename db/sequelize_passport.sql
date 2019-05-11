-- DROP DATABASE IF EXISTS sequelize_passport;
CREATE DATABASE sequelize_passport;

USE sequelize_passport;

-- CREATE TABLE userlogin (
-- 	user_id INT NOT NULL AUTO_INCREMENT,
--     user_name VARCHAR(50) NOT NULL,
--     password VARCHAR(50) NOT NULL,
--     email VARCHAR(100) NOT NULL,
--     PRIMARY KEY (user_id)
-- ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

CREATE TABLE users
(
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    username TEXT(50) NOT NULL,
    about TEXT(50), 
    email VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
) --ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

     INSERT INTO users
        (firstname, lastname, username, about, email, password)
    VALUES('john', 'john', 'john', 'about', 'john@gmail.com', 'john');
    INSERT INTO users
        (firstname, lastname, username, about, email, password)
    VALUES('jane', 'jane', 'jane', 'about', 'jane@gmail.com', 'jane');

    -- INSERT INTO users
    --     (firstname, lastname, username, about, email, password)
    -- VALUES("john", "john", "john", "about", "john@gmail.com", "john");
    -- INSERT INTO users
    --     (firstname, lastname, username, about, email, password)
    -- VALUES("jane", "jane", "jane", "about", "jane@gmail.com", "jane");

    -- SELECT *
    -- FROM users;