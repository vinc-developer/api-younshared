INSERT INTO users VALUE (1, 'Vincent', 'Colas', 'profile.png', 'Développeur', 'admin@admin.com', 'Test123!'),
(2, 'Paul', 'Dupont', 'profile.png', 'Commercial', 'test@test.com', 'Test123!'),
(3, 'Alex', 'Terrieur', 'profile.png', 'Testeur', 'user@user.com', 'Test123!');

INSERT INTO posts (text, picture_posts, date_created, id_user) VALUE ('Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836. ', 'bureau.jpg', '2022-07-04T15:00:00', 1),
  ('Voyage au centre de la Terre est un roman d\'aventures, écrit en 1864 par Jules Verne. Cette fiction souterraine fut publiée en édition originale in-18 le 25 novembre 1864, puis en grand in-octavo le 13 mai 1867. Le texte de 1867 comporte deux chapitres de plus (45 au lieu de 43) que celui de 18641. Voyage au centre de la Terre est le troisième roman d\'aventure que publie Jules Verne après Cinq Semaines en ballon paru en 1863. ', 'victor.jpg', '2022-07-03T15:00:00', 2) ;

INSERT INTO likes VALUES (2,1), (3,1), (1,2), (2,2);

INSERT INTO comments (id_post, text, id_user) VALUE
  (1,'Le commentaire de paul dupont, il va etre un peu long, exprèes pour voir un resultat, mais je doit encore ajouter des mots pour qu\'il soit vraiment très très long.' ,2),
  (1, 'magnifique illustration, victore hugo est un super ecrivain' ,3),
  (2, 'whooooo telement beau cet elephant qui vole !!!!!' ,1);
