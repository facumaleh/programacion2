-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3309
-- Tiempo de generación: 06-06-2020 a las 15:14:53
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `integrador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `movie_id` varchar(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `reviewText` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `reviews`
--

INSERT INTO `reviews` (`id`, `movie_id`, `user_id`, `reviewText`, `createdAt`, `updatedAt`, `score`) VALUES
(1, '1', 1, 'buena serie', '2000-12-12 00:00:00', '2020-06-01 21:27:57', 10),
(2, '60625', 2, 'medio pelo', '2020-05-21 00:00:00', '2020-06-01 14:33:04', 80),
(3, '60625', 3, 'para pasar la 40tena', '2020-05-12 00:00:00', '2020-06-01 14:33:04', 80),
(4, '60625', 2, 'no se medio raro', '2020-05-12 00:00:00', '2020-06-01 14:33:04', 80),
(5, '60625', 2, 'cool', '2020-05-12 00:00:00', '2020-06-01 14:33:04', 80),
(6, '60625', 6, 'recomiendo', '2020-05-12 00:00:00', '2020-06-01 14:33:04', 80),
(9, '2734', 7, 'A ver si anda el select', '2020-05-06 00:00:00', '2020-06-01 14:33:04', 80),
(19, '1622', 6, 'hello i dont like it', '2020-05-06 00:00:00', '2020-06-01 14:33:04', 30),
(20, '1622', 8, 'muy mala', '2020-05-06 00:00:00', '2020-06-01 14:33:04', 30),
(21, '1622', 7, 'malarda', '2020-05-06 00:00:00', '2020-06-01 14:33:04', 30),
(22, '1622', 2, 'muy mala', '2020-05-06 00:00:00', '2020-06-01 14:33:04', 30),
(48, '1396', 4, 'medio pelo', '2020-05-14 00:00:00', '2020-06-01 14:33:04', 12),
(57, '48866', 51, 'no la recomiendo', '2020-05-06 00:00:00', '2020-06-06 15:12:29', 69),
(61, '102903', 2, 'te va?', '2020-05-11 00:00:00', '2020-06-01 14:33:04', 67),
(62, '102903', 51, 'quien es el actor principal', '2020-05-20 00:00:00', '2020-06-01 14:33:04', 58),
(67, '498', 51, 'no me va ', '2020-04-28 00:00:00', '2020-06-01 14:33:04', 64),
(73, '60735', 52, 'como la veo en ingles?', '2020-06-01 00:00:00', '2020-06-01 21:27:57', 50),
(74, '85922 ', 53, 'donde la descargo?', '2020-06-01 16:32:53', '2020-06-01 21:27:57', 100),
(76, '60625', 53, 'tomas caimmi', '2020-06-03 21:01:48', '2020-06-03 21:01:48', 100),
(77, '60735', 53, 'prueba', '2020-06-03 21:27:43', '2020-06-03 21:27:43', 100),
(78, '60735', 55, 'When it first started, the flash was an exciting new addition to the arrowverse, with its first season being exceptional. Viewers immediately fell in love with Grant Gustin\'s Barry Allen (AKA The Flash). The first season was amazing and enjoyable, and the story was very complex, yet felt smooth and even.', '2020-06-06 14:14:43', '2020-06-06 14:14:43', 100),
(79, '66788 ', 55, ' The first series was exceptional and I did enjoy season 2 despite the Hannah visions. Season 3 though...... How is this new girl trusted by everyone? How did she become so close to Clay so quickly? Why is Hannah barely mentioned? The tapes were released publicly she could easily have listened to them. She is obviously ridiculously interested in the group so it makes no sense that she wouldn\'t listen to the tapes! ', '2020-06-06 14:15:46', '2020-06-06 14:20:47', 0),
(80, '48866', 55, 'he series is set 97 years after a devastating nuclear war wiped out almost all life on Earth. The only known survivors are the residents of twelve space stations in Earth\'s orbit prior to the war. The space stations banded together to form a single massive station named \"The Ark\", wenis galore about 2,400 people live. Resources are scarce and all crimes no matter their nature or severity are punishable by death (\"floating\") unless the perpetrator is under 18 years of age. After the Ark\'s life support systems are found to be critically failing, one hundred juvenile prisoners are declared \"expendable\" and sent to the surface in a last ditch attempt to determine if Earth is habitable again.', '2020-06-06 14:20:07', '2020-06-06 14:20:07', 100),
(81, '456 ', 55, 'The Simpsons is the longest running animated TV series since The Flinstones, and you could understand why after watching just one of the Simpsons episodes. Simply because The Simpsons is just so hilarious and incredibly clever and has been ripped off so many times, but nothing has come close to the brilliance that the Simpsons writers have brought us.  We have Homer Simpson, one of the most beloved TV characters of all time, with his famous quote \"Doh!\". He\'s an overweight, lazy, and not the brightest bulb, but so incredibly lovable for the fact of how bipolar he is! One minute he can be so incredibly depressed, but the next minute really happy and giggling. My favorite Homer quote is when he kills the zombie Ned Flanders in a Halloween episode, Bart tells him \"Dad! You killed the zombie Flanders!\"... \"He was a zombie?\" Marge is Homer\'s wife and a homemaker. She is at times naggy, but always manages to get in some terrific humor and some deep sympathy with all she puts up with. My favorite Marge quote is \"Bart, don\'t make fun of grad students. They\'ve just made a terrible life choice.\" Bart is the oldest son and a rebel. His usual quotes are \"Don\'t have a cow\" \"Cool, man!\" \"Ei Carumba!\". He\'s this generation\'s Dennis the Menace. My favorite Bart quote is \"I need a soul, Ralph, any, your\'s!\", you\'ll see what I mean.  Lisa is the second oldest and the smartie pants of the Simpson clan, she\'s kind of the know it all who solves all the adventures of the Simpsons. My favorite Lisa quote is \"They\'re only using you for your pool you know... shut up brain! I have friends now, I don\'t need you any more!\". Last, but not least, Maggie, the eternal baby of Homer and Marge, always a great love of the screen, but no famous quotes, just memorable moments like when she turns into an alien.  The supporting cast is a terrific addition, my favorites include Mr. Burns, Homer\'s boss, Groundskeeper Willy, the school janitor, and Mr. Skinner, the school principal. The Simpson is just a terrific show that in one way or another you will see at least one episode in your lifetime. I know that generations to come, they will still be watching The Simpsons..', '2020-06-06 15:09:09', '2020-06-06 15:09:32', 100),
(82, '1403', 55, 'I remember how I felt after watching the first episode. It was \'meh\' to describe it best. I think it was only out of sheer boredom I continued to watch it. I especially didn\'t like Skye. I found her too intrusive and irritating for my liking. But I knew the show still had some potential. The other characters entranced me. Sure the plot was bland and boring but I knew it was only the first few episodes out of twenty two. This meant there was room for development. And by gum did that last episode delivered.  The things with new series are is that they require patience. You have to be very picky if you expect an amazingly complicated plot right at the beginning. A slow start makes sense. It matters on where the show takes us afterwards. And we\'ve been to a lot of places in AoS. It just took time to pull everything together for a neat finish. And I\'m glad they took their time; how else are we able to achieve such a deep and rich relationship with all the characters?  I find it really funny how some of the viewers are still bitching about how there were no major SUPERheroes featured in the show. Well, the show made it clear that it was gonna be about the agents and the strength of humanity. Who cares the mains don\'t have any superpowers? It made me admire them only more.  This show lacked nothing at the end. But perhaps I shall give it a nine for the minor inconvenience of the first couple of episodes.', '2020-06-06 15:10:49', '2020-06-06 15:10:49', 100),
(83, '48866', 56, 'no me gusto la serie ', '2020-06-06 15:11:48', '2020-06-06 15:11:48', 100),
(84, '60735', 56, 'no me gusta como termina', '2020-06-06 15:14:18', '2020-06-06 15:14:18', 27);

--
-- Disparadores `reviews`
--
DELIMITER $$
CREATE TRIGGER `reviews_AFTER_UPDATE` AFTER UPDATE ON `reviews` FOR EACH ROW BEGIN

END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `birthdate` date DEFAULT NULL,
  `password` char(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`username`, `email`, `id`, `birthdate`, `password`) VALUES
('Marc-AndréTerStegen', 'Marc-AndréTerStegen@gmail.com', 1, '1978-01-01', 'Marc-AndréTerStegen'),
('LuisSuarez', 'luissuarez@gmail.com', 2, '1978-01-01', 'luisSuarez'),
('AntoineGriezmann', 'Antoinegriezmann@gmail.com', 3, '1978-01-01', 'AntoineGriezmann'),
('FrenkieDeJong', 'FrenkiedeJong@gmail.com', 4, '1978-01-01', 'Frenkie de Jong'),
('LionelMessi', 'leommessi@gmail.com', 5, '1978-01-01', 'Barça'),
('JordiAlba', 'JordiAlba@gmail.com', 6, '1978-01-01', 'JordiAlba'),
('MartinBraithwaite', 'MartinBraithwaite@gmail.com', 7, '1978-01-01', 'MartinBraithwaite'),
('ArthurMelo', 'ArthurMelo@gmail.com', 8, '1978-01-01', 'ArthurMelo'),
('ClémentLenglet', 'ClémentLenglet@gmail.com', 9, '1978-01-01', 'ClémentLenglet'),
('SamuelUmtiti', 'SamuelUmtiti@gmail.com', 10, '1978-01-01', 'SamuelUmtiti'),
('AnsuFati', 'AnsuFati@gmail.com', 11, '1978-01-01', 'AnsuFati'),
('GerardPiqué', 'GerardPiqué@gmail.com', 12, '1978-01-01', 'GerardPiqué'),
('JúniorFirpo', 'JúniorFirpo@gmail.com', 13, '1978-01-01', 'JúniorFirpo'),
('RiquiPuig\n', 'RiquiPuig@gmail.com', 14, '1978-01-01', 'RiquiPuig\n'),
('Neto', 'Neto@gmail.com', 15, '1978-01-01', 'Neto'),
('ArturoVidal', 'ArturoVidal@gmail.com', 16, '1978-01-01', 'ArturoVidal'),
('Ousmane Dembélé', 'OusmaneDembélé@gmail.com', 17, '1978-01-01', 'OusmaneDembélé'),
('IvanRakitic', 'IvanRakitic@gmail.com', 18, '1978-01-01', 'IvanRakitic'),
('SergioBusquets', 'SergioBusquets@gmail.com', 19, '1978-01-01', 'SergioBusquets'),
('NélsonSemedo', 'NélsonSemedo@gmail.com', 20, '1978-01-01', 'NélsonSemedo'),
('SergiRoberto', 'SergiRoberto@gmail.com', 21, '1978-01-01', 'SergiRoberto'),
('Facumaleh', 'facumaleh@gmail.com', 22, '2001-02-21', '1234567890'),
('Tomascaimmi', 'tomascaimmi@gmail.com', 23, '2000-01-01', 'Tomas123'),
('LebroJames', 'lebronjames@gmail.com', 24, '1984-12-30', 'Lebron123'),
('gianisAntetokumpo', 'gianisAntetokumpo@gmail.com', 25, '1994-12-06', 'gianisAntetokumpo'),
('CristianoRonaldo', 'cr7@gmail.com', 26, '1990-02-02', 'cr7123'),
('iniesta', 'ere@gmail.com', 27, '2000-12-12', '123456754'),
('kobeBryant', 'kb@gmail.com', 28, '2000-12-12', 'Kobe123'),
('messi', 'messi@messi.com', 29, '2001-02-02', '123456678990'),
('messi3', 'messi3@messi.com', 30, '2001-02-02', 'messi'),
('maradona', 'maradona@maradona.com', 31, '2001-02-02', 'maradona'),
('facu', 'messi@messi.com', 32, '2001-02-02', '123456678990'),
('JaviDH', 'javi@dh.com', 33, '2020-05-18', '123456'),
('43087273', 'messi@messi.com.ar', 34, '2001-02-02', '123456678990'),
('sadkm', 'sadnjs@gmail.com', 35, '2001-02-02', '$2b$10$T0Q31a67ZJay9c5nRQdUNuiaQ3WQX4EbEM0bBqvoicESVEYM5dXXO'),
('quieroProbarAlgo', 'etcetcetc@gmail.com', 46, '2001-01-22', '$2a$10$p01d4Fa6cmyZdLEl1J70Y.Wo0aATMfKZYW1fCU0bStTja5DOUOdF.'),
('caimmi', 'caimmi@gmail.com', 47, '2001-01-22', '$2a$10$rkrv.S9gjwIh6TJaRDDQruRTB1LeXUrfp/j34a5dk187Tog81By3G'),
('tomascaimmi', 'tomascaimmib@gmail.com', 48, '2001-01-22', '$2a$10$ZC2Lb5rc9JPN1SS5qerA5uKru92dqZcIHC82ZdYKgiMnMrLtMthfG'),
('tomascaimmi', 'tomascaimmib@gmail.com.ar', 49, '2001-01-22', '$2a$10$jGLrj.hbRBJmQMEnLdQ2yOX0H07KPsjdNW3C4dE8hDaL6Tiim/D2.'),
('usernuevo', 'usernuevo@gmail.com', 50, '2001-01-22', '$2a$10$LAH.bm/lnU26Zoj9mDVCvOTuIcZEugNxK9xfIS36./KyiTCPrehDm'),
('soyYo', 'tomas@gmail.com', 51, '2001-01-22', '$2a$10$.QBF7uyK0NKBx09AxS3/puopfEkmnuvTmkCeaj2sIhy2Bi3us2wii'),
('pass1234', 'pass1234@gmail.com', 52, '2001-01-22', '$2a$10$T1Kpfi3Fgul9nz141vog2Oua5bjyQghDDZGAPAlp8QWGFAKc96aka'),
('facundo', 'facund0@123.com', 53, '2001-02-02', '$2a$10$HXx.T0WW1v5jGzRlCe0fZ.6WSzKiLGFUVJb/Gh0PBtWb3PDmYL8/S'),
('facundo@1234.com', 'facundo@1234.com', 54, '2020-05-18', '$2a$10$GyuHj.RuN/Tk2nXJIWwhOOPt5VxZ6YTxRYW.41VGHi88DcQEJakIW'),
('programacion@dh.com', 'programacion@dh.com', 55, '2001-02-02', '$2a$10$ZH3jKLAJ4BYonLd.1FjFeeM3shQ7lTtYBqrwiKwYZHVqW4mO8noUq'),
('programacion2@dh.com', 'programacion2@dh.com', 56, '2001-02-02', '$2a$10$mUitn3Nb1C.vjnkjw/mEzueuCYe3f9sPDJ5qdtStU/66v5gsNsGzG');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_FK` (`user_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_FK` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`);
