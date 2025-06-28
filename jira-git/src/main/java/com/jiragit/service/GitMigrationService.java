package com.jiragit.service;

import com.jiragit.model.GitCommit;
import com.jiragit.model.neo4j.GitCommitNode;
import com.jiragit.repository.GitCommitRepository;
import com.jiragit.repository.neo4j.GitCommitNodeRepository;
import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.revwalk.RevCommit;
import org.eclipse.jgit.lib.Repository;
import org.eclipse.jgit.storage.file.FileRepositoryBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Service
public class GitMigrationService {
    private static final Logger logger = LoggerFactory.getLogger(GitMigrationService.class);

    private final GitCommitRepository gitCommitRepository;
    private final GitCommitNodeRepository gitCommitNodeRepository;

    @Value("${git.repository-path}")
    private String repoPath;

    public GitMigrationService(GitCommitRepository gitCommitRepository,
                               GitCommitNodeRepository gitCommitNodeRepository) {
        this.gitCommitRepository = gitCommitRepository;
        this.gitCommitNodeRepository = gitCommitNodeRepository;
    }

    @Transactional
    public void migrateAllGitCommits() {
        try {
            FileRepositoryBuilder builder = new FileRepositoryBuilder();
            Repository repository = builder.setGitDir(new File(repoPath + "/.git")).readEnvironment().findGitDir().build();
            try (Git git = new Git(repository)) {
                Iterable<RevCommit> commits = git.log().all().call();
                for (RevCommit commit : commits) {
                    GitCommit entity = mapToEntity(commit);
                    gitCommitRepository.save(entity);
                    GitCommitNode node = mapToNode(commit);
                    gitCommitNodeRepository.save(node);
                }
            }
        } catch (Exception e) {
            logger.error("Error migrating Git commits", e);
        }
    }

    private GitCommit mapToEntity(RevCommit commit) {
        GitCommit entity = new GitCommit();
        entity.setCommitHash(commit.getName());
        entity.setAuthorName(commit.getAuthorIdent().getName());
        entity.setAuthorEmail(commit.getAuthorIdent().getEmailAddress());
        entity.setCommitterName(commit.getCommitterIdent().getName());
        entity.setCommitterEmail(commit.getCommitterIdent().getEmailAddress());
        entity.setSubject(commit.getShortMessage());
        entity.setFullMessage(commit.getFullMessage());
        entity.setCommitTime(LocalDateTime.ofInstant(Instant.ofEpochSecond(commit.getCommitTime()), ZoneId.systemDefault()));
        entity.setAuthorTime(LocalDateTime.ofInstant(commit.getAuthorIdent().getWhen().toInstant(), ZoneId.systemDefault()));
        // Branch, parentHash, changedFiles, diff, insertions, deletions can be set with more advanced logic
        return entity;
    }

    private GitCommitNode mapToNode(RevCommit commit) {
        GitCommitNode node = new GitCommitNode();
        node.setCommitHash(commit.getName());
        node.setAuthorName(commit.getAuthorIdent().getName());
        node.setAuthorEmail(commit.getAuthorIdent().getEmailAddress());
        node.setCommitterName(commit.getCommitterIdent().getName());
        node.setCommitterEmail(commit.getCommitterIdent().getEmailAddress());
        node.setSubject(commit.getShortMessage());
        node.setFullMessage(commit.getFullMessage());
        node.setCommitTime(LocalDateTime.ofInstant(Instant.ofEpochSecond(commit.getCommitTime()), ZoneId.systemDefault()));
        node.setAuthorTime(LocalDateTime.ofInstant(commit.getAuthorIdent().getWhen().toInstant(), ZoneId.systemDefault()));
        // Branch, parentHash, changedFiles, diff, insertions, deletions can be set with more advanced logic
        return node;
    }
} 