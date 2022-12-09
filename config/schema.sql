DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

-- USE movies_db;

-- CREATE TABLE movies (
--     id INT NOT NULL AUTO_INCREMENT,
--     name VARCHAR(30) NOT NULL,
--     PRIMARY KEY(id)
-- );

-- CREATE TABLE reviews (
--     id INT NOT NULL AUTO_INCREMENT,
--     review TEXT NOT NULL,
--     movie_id INT,
--     PRIMARY KEY(id),
--     FOREIGN KEY (movie_id)
--     REFERENCES movies(id)
-- );