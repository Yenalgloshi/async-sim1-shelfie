drop table if exists shelfieInv;

create table shelfieInv (
    id serial primary key,
    name text,
    price decimal,
    image text
);

insert into shelfieInv
(id, name, price, image)
values
('', '', '', ''),
('', '', '', ''),
('', '', '', ''),
('', '', '', '')