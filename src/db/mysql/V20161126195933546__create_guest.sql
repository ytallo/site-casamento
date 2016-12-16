CREATE TABLE `guest` (
  `guest_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(12),
  `confirmation` integer NOT NULL,
  `dependents` integer,
  `observation` varchar(255),
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  CONSTRAINT pk_sample PRIMARY KEY (`guest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
