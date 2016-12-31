CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  price NUMERIC,
  name VARCHAR(70),
  platform VARCHAR(70),
  gen VARCHAR(70),
  modelNumber VARCHAR(70),
  caliber VARCHAR(70),
  category VARCHAR(70),
  subCategory VARCHAR(70),
  mainImg TEXT,
  imgOne TEXT,
  imgTwo TEXT,
  imgThree TEXT,
  color VARCHAR(100),
  weight INT,
  details TEXT,
  features TEXT
);

INSERT INTO products (price,name,modelNumber,caliber,platform,category,subCategory,mainImg,imgOne,imgTwo,imgThree,colorOne,colorTwo,colorThree,weight,details,features)
VALUES ((26,95),'PMAG\xAE 30 AK/AKM GEN M3\u2122','MAG573','AK/AKM')
