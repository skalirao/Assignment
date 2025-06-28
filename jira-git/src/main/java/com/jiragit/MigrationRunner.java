package com.jiragit;

import com.jiragit.service.GitMigrationService;
import com.jiragit.service.JiraMigrationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MigrationRunner implements CommandLineRunner {
    private static final Logger logger = LoggerFactory.getLogger(MigrationRunner.class);

    private final JiraMigrationService jiraMigrationService;
    private final GitMigrationService gitMigrationService;

    public MigrationRunner(JiraMigrationService jiraMigrationService, GitMigrationService gitMigrationService) {
        this.jiraMigrationService = jiraMigrationService;
        this.gitMigrationService = gitMigrationService;
    }

    @Override
    public void run(String... args) {
        logger.info("Starting Jira migration...");
        jiraMigrationService.migrateAllJiraIssues();
        logger.info("Jira migration completed.");
        logger.info("Starting Git migration...");
        gitMigrationService.migrateAllGitCommits();
        logger.info("Git migration completed.");
    }
} 