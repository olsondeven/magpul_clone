CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INT references customers(id)
)
-- create many to many to order product
-- shipping info

CREATE TABLE orderproducts (
  id serial primary key,
  product_id varchar(80) references products(id),
  order_id varchar(80) references orders(id),
  quantity int,
  color varchar(80)
)
-- create foreign key to product TABLE
-- create quantity field int


-- insert into orderproducts (product_id,quantity)
