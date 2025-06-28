package com.jiragit.repository;

import com.jiragit.model.GitCommit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface GitCommitRepository extends JpaRepository<GitCommit, String> {
    
    List<GitCommit> findByAuthorName(String authorName);
    
    List<GitCommit> findByAuthorEmail(String authorEmail);
    
    List<GitCommit> findByBranch(String branch);
    
    List<GitCommit> findByCommitTimeBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    List<GitCommit> findByAuthorTimeBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    @Query("SELECT g FROM GitCommit g WHERE g.subject LIKE %:keyword% OR g.fullMessage LIKE %:keyword%")
    List<GitCommit> findByKeywordInSubjectOrMessage(@Param("keyword") String keyword);
    
    List<GitCommit> findByChangedFilesContaining(String filePath);
    
    List<GitCommit> findByParentHash(String parentHash);
    
    @Query("SELECT g FROM GitCommit g WHERE g.insertions > :minInsertions")
    List<GitCommit> findByMinInsertions(@Param("minInsertions") int minInsertions);
    
    @Query("SELECT g FROM GitCommit g WHERE g.deletions > :minDeletions")
    List<GitCommit> findByMinDeletions(@Param("minDeletions") int minDeletions);
    
    @Query("SELECT g FROM GitCommit g ORDER BY g.commitTime DESC")
    List<GitCommit> findRecentCommits();
} 