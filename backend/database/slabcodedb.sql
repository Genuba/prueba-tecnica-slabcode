-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema slabcodedb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema slabcodedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `slabcodedb` DEFAULT CHARACTER SET utf8 ;
USE `slabcodedb` ;

-- -----------------------------------------------------
-- Table `slabcodedb`.`colores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `slabcodedb`.`colores` (
  `id_colores` INT NOT NULL AUTO_INCREMENT,
  `color` VARCHAR(45) NOT NULL,
  `color_css` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id_colores`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `slabcodedb`.`lugares`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `slabcodedb`.`lugares` (
  `id_lugares` INT NOT NULL AUTO_INCREMENT,
  `lugar` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_lugares`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `slabcodedb`.`eventos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `slabcodedb`.`eventos` (
  `id_eventos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(2000) NOT NULL,
  `fecha` DATE NOT NULL,
  `hora_inicio` INT NOT NULL,
  `hora_fin` INT NOT NULL,
  `colores_id_colores` INT NOT NULL,
  `lugares_id_lugares` INT NOT NULL,
  PRIMARY KEY (`id_eventos`, `colores_id_colores`, `lugares_id_lugares`),
  INDEX `fk_eventos_colores_idx` (`colores_id_colores` ASC) VISIBLE,
  INDEX `fk_eventos_lugares1_idx` (`lugares_id_lugares` ASC) VISIBLE,
  CONSTRAINT `fk_eventos_colores`
    FOREIGN KEY (`colores_id_colores`)
    REFERENCES `slabcodedb`.`colores` (`id_colores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_eventos_lugares1`
    FOREIGN KEY (`lugares_id_lugares`)
    REFERENCES `slabcodedb`.`lugares` (`id_lugares`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- si se ejecuta en localhost
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678';
