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
('A', 1, 'shoes', 20.00, 'https://i.pinimg.com/originals/c0/f8/75/c0f87532261c4a2ca2931ef86aadd642.jpg'),
('B', 2, 'underwear', 1.00, 'https://cdn.shopify.com/s/files/1/0824/6367/products/silkies_new_HD.png?v=1516015518'),
('D', 4, 'hat', 5.00, 'https://images-na.ssl-images-amazon.com/images/I/7102BnBdGoL._SX522_.jpg'),
('A', 3, 'tee shirt', 15.00, 'https://rebelliousblogdotcom.files.wordpress.com/2013/02/obesity-speed-shred-bk-exl.jpg'),
('C', 1, 'belt', 12.00, 'https://data.whicdn.com/images/3683475/large.jpg'),
('D', 2, 'pants', 50.00, 'https://www.geeksofdoom.com/GoD/img/2014/03/chuck-norris-action-jeans-cvr.jpg'),
('B', 3, 'winter gloves', 10.00, 'https://images-na.ssl-images-amazon.com/images/I/41Eh%2Bajc73L._UX385_.jpg'),
('C', 5, 'Goth Makeup', 150.00, 'https://i.pinimg.com/originals/72/29/93/7229938841528055776886f41f0583ee.jpg')