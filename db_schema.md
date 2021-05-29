
Table structure for table `schedules`
--

DROP TABLE IF EXISTS schedules;
CREATE TABLE schedules (
    id int NOT NULL AUTO_INCREMENT,
    user_id int,
    s_date date,
    start_at time,
    end_at time,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
    );

select * from schedules
alter table schedules add column d date;
alter table schedules drop column day_week;
INSERT INTO users values (1,"Lola","Flores","folkloricas@gmail.com","folklore");


Add data to `schedules`
--
use schedules
select * from schedules
INSERT INTO schedules values (20,1,date_format("15/2/2021", "%d/%m/%y"),"08:00:00","12:00:00");
INSERT INTO schedules values (2,1,"2021/03/03","10:00:00","14:00:00")


Table structure for table `users`
--
CREATE TABLE `users` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) 

-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Foreignkey` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);


-- Constraints for table `schedules`
--
ALTER TABLE `schedules`
  ADD CONSTRAINT `Foreignkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

USE project_4;
INSERT INTO users (first_name,surname,email,`password`) values ("Pepe","Cruz","pepico23@gmail.com","pepedj");


 INSERT INTO users values (2,"Paco","Pil","papil@gmail.com","dj");





 SELECT * FROM project_4.schedules;

 SELECT * FROM project_4.users;

 USE project_4;
INSERT INTO users (first_name,surname,email,`password`) values ("Pepe","Cruz","pepico23@gmail.com","pepedj");


USE project_4;
INSERT INTO users (first_name,surname,email,`password`) values ("Pepe","Cruz","pepico23@gmail.com","pepedj");

ALTER TABLE `project_4`.`users` 
CHANGE COLUMN `first_name` `firstname` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL ;


UPDATE `project_4`.`users` SET `password` = 'pepedj123' WHERE (`id` = '2');


ALTER TABLE `project_4`.`schedules` 
ADD COLUMN `day` INT NULL AFTER `end_at`;

ALTER TABLE `project_4`.`users` 
CHANGE COLUMN `fullname` `first_name` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL ;
