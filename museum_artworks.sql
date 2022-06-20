-- MariaDB dump 10.19  Distrib 10.4.22-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: museum
-- ------------------------------------------------------
-- Server version	10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artworks`
--

DROP TABLE IF EXISTS `artworks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artworks` (
  `id_artwork` int(11) NOT NULL AUTO_INCREMENT,
  `artworkName` varchar(50) NOT NULL,
  `artistName` varchar(50) NOT NULL,
  `date_artwork` int(11) NOT NULL,
  `artworkDescription` varchar(400) NOT NULL,
  `urlArtwork` varchar(400) NOT NULL,
  PRIMARY KEY (`id_artwork`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artworks`
--

LOCK TABLES `artworks` WRITE;
/*!40000 ALTER TABLE `artworks` DISABLE KEYS */;
INSERT INTO `artworks` VALUES (1,'Autorretrato','Pablo Picasso',1907,'O autorretrato de Picasso é apontado como a obra que anteviu o movimento cubista. Os traços são de espessura grossa e rápida, e o contraste com o plano\n  de fundo dão uma noção tridimensional a figura, o que não existia até então. As cores vivas e alegres estão de acordo com o olhar jovial e expressivo que\n  estampa o retrato de Picasso.','https://www.revistabula.com/wp/wp-content/uploads/2017/07/Autorretrato.jpg.webp'),(2,'O Farol','Anita Malfatti',1915,'Anita retrata o farol da ilha e as casinhas próximas a ele. A pintora traz à tona, nesta obra e em algumas outras, as influências expressionistas \naprendidas durante o tempo em que passou estudando na Alemanha. Ela distribui sobre a tela uma infinidade de cores fortes e vibrantes.','https://i0.wp.com/www.historiadasartes.com/wp-content/uploads/2017/02/m_farol.jpg?resize=500%2C393&ssl=1'),(3,'O Passeio','Claude Monet',1875,'Esta obra pertence a uma série de pinturas de Monet durante os Verões 1875 e 1876 e que representam o jardim da sua nova casa em Argenteuil e campos cobertos de papoulas. A sua primeira esposa Camille e o seu filho Jean, que teria aproximadamente 8 anos, servem de modelo para a obra.','https://i0.wp.com/www.historiadasartes.com/wp-content/uploads/2018/01/m_sombrinha.jpg?resize=409%2C450&ssl=1'),(4,'O Terraço do Café à Noite','Vincent van Gogh',1888,'A tela foi pintada durante o tempo do artista na cidade de Arles, no sul da França. Durante seu período em Arles, Van Gogh se tornou obcecado em trazer cores vivas para os seus quadros e acabou se apaixonando pela noite estrelada da cidade.','https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg/300px-Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg'),(5,'Homem Amarelo','Anita Malfatti',1917,'Pintura mais conhecida de Anita Malfatti, o Homem amarelo representa um imigrante italiano pobre que posou para a artista na época em que ela estudava no exterior, a artista comenta que o modelo sustentava ‘um olhar desesperado’ naquele dia. ','https://uploads5.wikiart.org/images/anita-malfatti/o-homem-amarelo-1917.jpg'),(7,'Três Músicos','Pablo Picasso',1921,'“Três Músicos” é o nome dado a duas versões da mesma obra. A inspiração surgiu durante uma viagem de Picasso a Fontainebleau, na França. As pinturas são consideradas a representação do estilo conhecido como “Cubismo Sintético”, marcado pelo uso de cores fortes e formas mais decorativas.','https://www.revistabula.com/wp/wp-content/uploads/2017/07/Three-Musicians.jpg.webp');
/*!40000 ALTER TABLE `artworks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-20  0:15:52
