CREATE TABLE customers(
 id SERIAL PRIMARY KEY,
 name varchar(100)
);

CREATE TABLE invoice(
 id SERIAL PRIMARY KEY,
 customer_id INT references customers(id)
);

CREATE TABLE invoiceline(
 id SERIAL PRIMARY KEY,
 invoice_id INT references invoice(id),
 product_id INT references products(id),
 quantity INT,
 unitprice numeric(10, 2)
);

INSERT INTO customers(name)values('John Doe');

INSERT INTO invoice(customer_id)values(1)

INSERT INTO invoiceline(invoice_id,product_id,quantity,unitprice)
VALUES(
  1,
  1,
  3,
  (SELECT products.price FROM invoiceline
  join products on invoiceline.product_id = products.id
  where product_id = products.id));


  INSERT INTO invoiceline(invoice_id,product_id,quantity,unitprice)
  VALUES(
    1,
    5,
    4,
    (SELECT products.price FROM invoiceline
    join products on invoiceline.product_id = products.id
    where product_id = products.id));
