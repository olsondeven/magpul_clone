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
  features TEXT,
  new boolean,
  pageImg TEXT
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

INSERT INTO products (price,name,platform,gen,modelNumber,caliber,capacity,category,subCategory,mainImg,imgOne,imgTwo,imgThree,color,specs,details,features)
VALUES (13.95,
'PMAG\xAE 30 AK/AKM MOE\XAE',
'AK/AKM',
'MOE',
'MAG572',
'7.62x39mm',
'30',
'FIREARMS ACCESSORIES',
'PMAG Magazines',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG572/MAG572-MAIN-2-15.png&Width=360&Height=300&altFmImage_path=/Files/Files/Images/Products/noImage.png&Format=jpg&Crop=5&Background=dfdfdf',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG572/Single/1-MAG572-Base-1-15.png&Format=jpg&background=ffffff&altFmImage_path=/Files/Files/Images/Products/noImage.png&Width=950&Height=450&Crop=5',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG572/Single/2-MAG572-OP-1-15.png&Format=jpg&background=ffffff&altFmImage_path=/Files/Files/Images/Products/noImage.png&Width=950&Height=450&Crop=5',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG572/Single/3-MAG572-OP-1-15.jpg&Format=jpg&background=ffffff&altFmImage_path=/Files/Files/Images/Products/noImage.png&Width=950&Height=450&Crop=5',
'black\$eccbad',
'Weight: 6.5 oz.',
'The PMAG 30 AK/AKM MOE is an inexpensive, lightweight, high reliability 30-round polymer magazine designed for Kalashnikov pattern rifles in 7.62x39mm (AK-47, AKM, AKS, SIG556R and others.)\$It features a removable floorplate, constant curve geometry, and a high-reliability/low-friction follower for the affordable performance you expect from a MOE PMAG.\$Made in U.S.A. Magazine counts as three US compliance parts for 922(r).',
'Impact and crush resistant all polymer body\$Constant-curve internal geometry for smooth feeding\$Anti-tilt, self-lubricating follower for increased reliability\$Long life stainless steel spring\$Ribbed gripping surface and aggressive front and rear texture for positive magazine handling\$Paint pen dot matrix panels on the bottom of the body to allow for identification marking\$Flared floorplate aids magazine handling and disassembly yet is slim enough for use with most pouches')

alter table products
ADD new bool

update products
set new=false where id=1;

update products
set new=false where id=2;

alter table products
ADD pageImg TEXT

update products
set pageImg='https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG573/MAG573-HERO-15.png&Width=1270&Height=500&altFmImage_path=/Files/Files/Images/Products/noImage.png&Format=jpg&Crop=5&Background=ffffff' where id=1;

update products
set pageImg='https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG572/MAG572-Hero-15.png&Width=1270&Height=500&altFmImage_path=/Files/Files/Images/Products/noImage.png&Format=jpg&Crop=5&Background=ffffff' where id=2;

INSERT INTO products (price,name,platform,gen,modelNumber,caliber,capacity,category,subCategory,mainImg,imgOne,imgTwo,imgThree,color,specs,details,features,new,pageImg)
VALUES (12.95,
'PMAG\xAE 10 AK/AKM MOE\XAE',
'AK/AKM',
'MOE',
'MAG657',
'7.62x39mm',
'10',
'FIREARMS ACCESSORIES',
'PMAG Magazines',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG657/MAG657-blk-g-15.png&Width=360&Height=300&altFmImage_path=/Files/Files/Images/Products/noImage.png&Format=jpg&Crop=5&Background=dfdfdf',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG657/Single/MAG657-single-1-15.png&Format=jpg&background=ffffff&altFmImage_path=/Files/Files/Images/Products/noImage.png&Width=950&Height=450&Crop=5',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG657/Single/MAG657-single-2-15.png&Format=jpg&background=ffffff&altFmImage_path=/Files/Files/Images/Products/noImage.png&Width=950&Height=450&Crop=5',
null,
'black',
'Weight:  4.0 oz.\$Length, max:  4.8 in.',
'The PMAG 10 AK/AKM MOE is an inexpensive, lightweight, high reliability 10-round polymer magazine designed for Kalashnikov pattern rifles in 7.62x39mm (AK-47, AKM, AKS, SIG556R, and others.)\$It features a removable floorplate, constant curve geometry, and a high-reliability/low-friction follower for the affordable performance you expect from a MOE PMAG.\$Made in U.S.A. Magazine counts as three US compliance parts for 922(r).',
'Impact and crush resistant all polymer body\$Constant-curve internal geometry for smooth feeding\$Anti-tilt, self-lubricating follower for increased reliability\$Long life stainless steel spring\$Ribbed gripping surface and aggressive front and rear texture for positive magazine handling\$Paint pen dot matrix panels on the bottom of the body to allow for identification marking\$Flared floorplate aids magazine handling and disassembly',
false,
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG657/MAG657-hero-1-15.png&Width=1270&Height=500&altFmImage_path=/Files/Files/Images/Products/noImage.png&Format=jpg&Crop=5&Background=ffffff')

INSERT INTO products (price,name,platform,gen,modelNumber,caliber,capacity,category,subCategory,mainImg,imgOne,imgTwo,imgThree,color,specs,details,features,new,pageImg)
VALUES (13.95,
'PMAG\xAE 30 AK47 MOE\XAE',
'AK/AKM',
'MOE',
'MAG673',
'5.45x39mm',
'30',
'FIREARMS ACCESSORIES',
'PMAG Magazines',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG673/MAG673-MAIN.png&Width=360&Height=300&altFmImage_path=/Files/Files/Images/Products/noImage.png&Format=jpg&Crop=5&Background=dfdfdf',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG673/Single/MAG673-Rifle.jpg&Format=jpg&background=ffffff&altFmImage_path=/Files/Files/Images/Products/noImage.png&Width=950&Height=450&Crop=5',
null,
null,
'black\$eccbad',
null,
'The PMAG 30 AK74 MOE is an inexpensive, lightweight, high reliability 30-round polymer magazine designed for Kalashnikov pattern rifles in 5.45x39mm (AK74, MPi-AK-74N, PA md. 86, and others.)\$It features a removable floorplate, constant curve geometry, and a high-reliability/low-friction follower for the affordable performance you expect from a MOE PMAG.\$Magazine counts as three US compliance parts for 922r.\$Made in U.S.A.',
'Impact and crush resistant all polymer body\$Constant-curve internal geometry for smooth feeding\$Anti-tilt, self-lubricating follower for increased reliability\$Long life stainless steel spring\$Ribbed gripping surface and aggressive front and rear texture for positive magazine handling\$Paint pen dot matrix panels on the bottom of the body to allow for identification marking\$Flared floorplate aids magazine handling and disassembly yet is slim enough for use with most pouches',
true,
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG673/MAG673-Hero.jpg&Width=1270&Height=500&altFmImage_path=/Files/Files/Images/Products/noImage.png&Format=jpg&Crop=5&Background=ffffff')

INSERT INTO products (price,name,platform,gen,modelNumber,caliber,capacity,category,subCategory,mainImg,imgOne,imgTwo,imgThree,color,specs,details,features,new,pageImg)
VALUES (12.95,
'PMAG\xAE 20 AK/AKM MOE\XAE',
'AK/AKM',
'MOE',
'MAG658',
'7.62x39mm',
'20',
'FIREARMS ACCESSORIES',
'PMAG Magazines',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG658/MAG658-Main-16.png&Width=360&Height=300&altFmImage_path=/Files/Files/Images/Products/noImage.png&Format=jpg&Crop=5&Background=dfdfdf',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG658/Single/MAG658-single-1.jpg&Format=jpg&background=ffffff&altFmImage_path=/Files/Files/Images/Products/noImage.png&Width=950&Height=450&Crop=5',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG658/Single/MAG658-single-2.jpg&Format=jpg&background=ffffff&altFmImage_path=/Files/Files/Images/Products/noImage.png&Width=950&Height=450&Crop=5',
null,
'black',
null,
'The PMAG 20 AK/AKM MOE is an inexpensive, lightweight, high reliability 20-round polymer magazine designed for Kalashnikov pattern rifles in 7.62x39mm (AK-47, AKM, AKS, SIG556R, and others.)\$It features a removable floorplate, constant curve geometry, and a high-reliability/low-friction follower for the affordable performance you expect from a MOE PMAG.\$Made in U.S.A. Magazine counts as three US compliance parts for 922(r).',
'Impact and crush resistant all polymer body\$Constant-curve internal geometry for smooth feeding\$Anti-tilt, self-lubricating follower for increased reliability\$Long life stainless steel spring\$Ribbed gripping surface and aggressive front and rear texture for positive magazine handling\$Paint pen dot matrix panels on the bottom of the body to allow for identification marking\$Flared floorplate aids magazine handling and disassembly yet is slim enough for use with most pouches',
true,
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/Magazines/AK_AKM/MAG658/20AK-HERO.jpg&Width=1270&Height=500&altFmImage_path=/Files/Files/Images/Products/noImage.png&Format=jpg&Crop=5&Background=ffffff')

INSERT INTO products (price,name,platform,gen,modelNumber,caliber,capacity,category,subCategory,mainImg,imgOne,imgTwo,imgThree,color,specs,details,features,new,pageImg)
VALUES (59.95,
'MOE\XAE AK Stock',
'AK47/AK74',
null,
'MAG616',
null,
null,
'FIREARMS ACCESSORIES',
'Buttstocks',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/ButtStocks/AK/MAG616/MAG616-BLK-15.png&Width=360&Height=300&altFmImage_path=/Files/Files/Images/Products/noImage.png&Format=jpg&Crop=5&Background=dfdfdf',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/ButtStocks/AK/MAG616/Single-slide/1-MAG616-Base-1-15.png&Format=jpg&background=ffffff&altFmImage_path=/Files/Files/Images/Products/noImage.png&Width=950&Height=450&Crop=5',
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/ButtStocks/AK/MAG616/Single-slide/2-MAG616-Mid-1-15.png&Format=jpg&background=ffffff&altFmImage_path=/Files/Files/Images/Products/noImage.png&Width=950&Height=450&Crop=5',
null,
'black\$A79F79\$939598\$445144\$5F3552',
'Weight: 12.5 oz.\$Length, from receiver: 9.4 in.\$LOP: ~12.8 in.',
'Providing Magpul construction and ingenuity to the venerable AK platform, the Magpul MOE AK Stock is an optimized fixed stock for most stamped-receiver rifles.Featuring the unique wedge block fitment of the Zhukov-S Stock, the MOE AK Stock provides internal storage,optimized QD sling swivel placement, a shock absorbing rubber butt-pad for positive placement, and user-selectable snap on Cheek Risers (sold separately.)',
'Mounts to most stamped receiver AK-47/AKM/AK-74 pattern rifles with fixed stock, single tang trunnion\*\$
Minimum weight and bulk with reinforced polymer A-frame construction\$Cheek weld combines a slim profile with user comfort\$
Optional snap on AK Cheek Risers are available for use with optics\$Internal storage compartment optimized for factory AK cleaning kit\$Rubber butt-pad offers an anti-slip surface and increases impact protection\$Rollover on the toe allows for easier shoulder transitions and better fit when using body armor\$Sling Mounts\$Rear – Optional Sling Mounts Kits (TYPE 1 and TYPE 2) accept push-button QD swivels\$Rear – 1.25" fixed sling loop',
null,
'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Products/ButtStocks/AK/MAG616/MAG616-HERO-3.png&Width=1270&Height=500&altFmImage_path=/Files/Files/Images/Products/noImage.png&Format=jpg&Crop=5&Background=ffffff')
