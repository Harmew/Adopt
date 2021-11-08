-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: adopt
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gatos`
--

DROP TABLE IF EXISTS `gatos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gatos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` float NOT NULL,
  `weight` float NOT NULL,
  `sex` text NOT NULL,
  `castrated` tinyint(1) NOT NULL,
  `deficient` tinyint(1) NOT NULL,
  `description` text NOT NULL,
  `tel` float NOT NULL,
  `email` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gatos`
--

LOCK TABLES `gatos` WRITE;
/*!40000 ALTER TABLE `gatos` DISABLE KEYS */;
INSERT INTO `gatos` VALUES (3,'Luninha',2,4,'FEM',1,0,'Luninha é uma gatinha que foi doada pelo dono, por causa de problemas hospitalares.\r\nAntigamente Luninha não tinha a capacidade de andar, no entanto depois de alguns meses de tratamento ela conseguiu se recuperar.',2311110000,'luninha@adopt.com','1636401449842.jpg','2021-11-08 19:57:29','2021-11-08 19:57:29'),(4,'Toninho',1,3,'MASC',1,0,'Um gato encontrado na rua, foi resgatado pelo abrigo CatsLove \r\nTininho é um gato muito carinho, alegre e sempre busca por diversão ',2122220000,'toninho@tonin.com','1636401544226.jpg','2021-11-08 19:59:04','2021-11-08 19:59:04'),(5,'Garfield',4,7,'MASC',1,1,'Garfield é um gato que nasceu no abrigo e desde sempre foi muito rechonchudo, preguiçoso e um tanto especial',41922200000,'garfield@garfield.com','1636401703825.jpg','2021-11-08 20:01:43','2021-11-08 20:01:43');
/*!40000 ALTER TABLE `gatos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@admin.com','$2a$10$bPGfvW.PJ456zm8DC89EnOsPoZTB5elLJzr5NKiDuRuMo71uaK6Vy','2021-11-08 19:47:21','2021-11-08 19:47:21');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-08 19:27:50
