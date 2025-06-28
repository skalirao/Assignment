package com.jiragit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableJpaRepositories
@EnableNeo4jRepositories
@EnableAsync
@EnableScheduling
public class JiraGitMigrationApplication {

    public static void main(String[] args) {
        SpringApplication.run(JiraGitMigrationApplication.class, args);
    }
} 