SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';


-- -----------------------------------------------------
-- Table `taskit`.`tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `taskit`.`tasks` (
  `idtasks` INT NOT NULL,
  `text` VARCHAR(255) NULL,
  `notes` TEXT NULL,
  `priority` INT NULL,
  `created` DATETIME NULL,
  `completed` DATETIME NULL,
  `estimate` INT NULL,
  `actual` INT NULL,
  PRIMARY KEY (`idtasks`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
