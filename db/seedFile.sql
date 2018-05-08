drop table if exists shelfieInv;

create table shelfieInv (
    id serial primary key,
    shelf text,
    bin integer,
    name text,
    price decimal,
    image text
);

insert into shelfieInv
(shelf, bin, name, price, image)
values
('A', 1, 'shoes', 20.00, ''),
('B', 2, 'underwear', 1.00, ''),
('D', 4, 'hat', 5.00, ''),
('A', 3, 'tee shirt', 15.00, ''),
('C', 1, 'belt', 12.00, ''),
('D', 2, 'pants', 50.00, ''),
('B', 3, 'gloves', 10.00, '')