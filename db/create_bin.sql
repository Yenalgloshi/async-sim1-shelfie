insert into shelfieInv ( shelf, bin, name, price ) 
values ( $1, $2, $3, $4 ) returning *;