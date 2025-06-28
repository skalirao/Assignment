package com.jiragit.repository.neo4j;

import com.jiragit.model.neo4j.GitCommitNode;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface GitCommitNodeRepository extends Neo4jRepository<GitCommitNode, String> {
    
    List<GitCommitNode> findByAuthorName(String authorName);
    
    List<GitCommitNode> findByAuthorEmail(String authorEmail);
    
    List<GitCommitNode> findByCommitTimeBetween(LocalDateTime start, LocalDateTime end);
    
    @Query("MATCH (c:GitCommit) WHERE c.subject CONTAINS $keyword RETURN c")
    List<GitCommitNode> findBySubjectContaining(@Param("keyword") String keyword);
    
    @Query("MATCH (c:GitCommit) WHERE c.fullMessage CONTAINS $keyword RETURN c")
    List<GitCommitNode> findByFullMessageContaining(@Param("keyword") String keyword);
    
    @Query("MATCH (c:GitCommit) WHERE c.commitHash = $commitHash RETURN c")
    GitCommitNode findByCommitHash(@Param("commitHash") String commitHash);
} 