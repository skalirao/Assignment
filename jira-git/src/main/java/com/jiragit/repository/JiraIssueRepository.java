package com.jiragit.repository;

import com.jiragit.model.JiraIssue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface JiraIssueRepository extends JpaRepository<JiraIssue, String> {
    
    List<JiraIssue> findByProjectKey(String projectKey);
    
    List<JiraIssue> findByStatus(String status);
    
    List<JiraIssue> findByAssignee(String assignee);
    
    List<JiraIssue> findByIssueType(String issueType);
    
    List<JiraIssue> findByCreatedBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    List<JiraIssue> findByUpdatedBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    @Query("SELECT j FROM JiraIssue j WHERE j.summary LIKE %:keyword% OR j.description LIKE %:keyword%")
    List<JiraIssue> findByKeywordInSummaryOrDescription(@Param("keyword") String keyword);
    
    List<JiraIssue> findByLabelsContaining(String label);
    
    List<JiraIssue> findByComponentsContaining(String component);
    
    @Query("SELECT j FROM JiraIssue j WHERE j.priority = :priority AND j.status != 'Closed'")
    List<JiraIssue> findOpenIssuesByPriority(@Param("priority") String priority);
} 