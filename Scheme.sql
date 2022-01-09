CREATE TABLE users (
    id serial primary key,
    username varchar(20) NOT NULL,
    email varchar(30) NOT NULL,
    password varchar(12) NOT NULL
)