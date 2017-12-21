CREATE TABLE users( 
    id INT(11) AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(255),
    email VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255),
    register_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);