

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

use schedules
select * from schedules
INSERT INTO schedules values (20,1,date_format("15/2/2021", "%d/%m/%y"),"08:00:00","12:00:00");
INSERT INTO schedules values (2,1,"2021/03/03","10:00:00","14:00:00")
