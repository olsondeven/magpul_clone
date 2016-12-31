CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  price NUMERIC(6,2),
  name VARCHAR(70),
  platform VARCHAR(70),
  gen VARCHAR(70),
  modelNumber VARCHAR(70),
  caliber VARCHAR(70),
  capacity VARCHAR(70),
  category VARCHAR(70),
  subCategory VARCHAR(70),
  mainImg TEXT,
  imgOne TEXT,
  imgTwo TEXT,
  imgThree TEXT,
  color VARCHAR(100),
  specs TEXT,
  details TEXT,
  features TEXT
);

INSERT INTO products (price,name,platform,gen,modelNumber,caliber,capacity,category,subCategory,mainImg,imgOne,imgTwo,imgThree,color,specs,details,features)
VALUES (26.95,
'PMAG\xAE 30 AK/AKM GEN M3\u2122',
'AK/AKM',
'GEN M3',
'MAG573',
'7.62x39mm',
'30',
'FIREARMS ACCESSORIES',
'PMAG Magazines',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG573/MAG573-blk-2-15.png&Width=1200&Height=700&altFmImage_path=/Files/Files/Images/Products/noImage.png&Format=jpg&Crop=5&Background=ffffff',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG573/Single/1-MAG573-Base-1-15.png&Format=jpg&background=ffffff&altFmImage_path=/Files/Files/Images/Products/noImage.png&Width=950&Height=450&Crop=5',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG573/Single/2-MAG573-OP-1-15.png&Format=jpg&background=ffffff&altFmImage_path=/Files/Files/Images/Products/noImage.png&Width=950&Height=450&Crop=5',
null,
'black',
'Weight: 7.2 o.z.',
'The PMAG 30 AK/AKM GEN M3 is a durable, lightweight, high reliability 30-round polymer magazine designed for Kalashnikov pattern rifles in 7.62x39mm (AK-47, AKM, AKS, SIG556R, and others.)\$It features steel-reinforced locking lugs, removable floorplate, constant curve geometry, and a high-reliability/low-friction follower for the performance and military-grade durability you expect from a PMAG.\$Made in U.S.A. Magazine counts as three US compliance parts for 922(r).',
'Impact and crush resistant polymer body\$Stainless steel rear locking lug and reinforced front lug and spine for increased durability\$
Constant-curve internal geometry for smooth feeding\$Anti-tilt, self-lubricating follower for increased reliability\$Long life stainless steel spring\$
Ribbed gripping surface and aggressive front and rear texture for positive magazine handling\$Paint pen dot matrix panels on the bottom of the body to allow for identification marking\$Flared floorplate aids magazine handling and disassembly yet is slim enough for use with most pouches')
