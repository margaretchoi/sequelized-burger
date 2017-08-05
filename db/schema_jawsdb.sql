USE l1t8ee6f6a5zsphk;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Veggie Burger');
INSERT INTO burgers (burger_name) VALUES ('Mushroom Swiss Burger');
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Burger', true);

SELECT * from burgers;