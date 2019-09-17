create database burgers_db;
use burgers_db;
create table burgers (
    id int(12) auto_increment,
    burger_name varchar(100) not null,
    devoured boolean,
    primary key(id)
)