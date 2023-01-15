DROP TABLE IF EXISTS restaurants CASCADE;
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL check (price_range >=1 and price_range <=5)
);
 
INSERT INTO restaurants (name, location, price_range) VALUES ('mcdonalds', 'richmond', '3');
INSERT INTO restaurants (name, location, price_range) VALUES ('burgerking', 'richmond', '3');
INSERT INTO restaurants (name, location, price_range) VALUES ('wendys', 'richmond', '3');
INSERT INTO restaurants (name, location, price_range) VALUES ('pizzahut', 'richmond', '2');
INSERT INTO restaurants (name, location, price_range) VALUES ('dominos', 'richmond', '2');
INSERT INTO restaurants (name, location, price_range) VALUES ('mcdonalds', 'vancouver', '3');
INSERT INTO restaurants (name, location, price_range) VALUES ('burgerking', 'vancouver', '3');
INSERT INTO restaurants (name, location, price_range) VALUES ('wendys', 'vancouver', '3');
INSERT INTO restaurants (name, location, price_range) VALUES ('pizzahut', 'vancouver', '2');
INSERT INTO restaurants (name, location, price_range) VALUES ('dominos', 'vancouver', '2');
