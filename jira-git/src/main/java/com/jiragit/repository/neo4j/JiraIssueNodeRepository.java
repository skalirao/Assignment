package com.jiragit.repository.neo4j;

import com.jiragit.model.neo4j.JiraIssueNode;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface JiraIssueNodeRepository extends Neo4jRepository<JiraIssueNode, String> {
    
    List<JiraIssueNode> findByProjectKey(String projectKey);
    
    List<JiraIssueNode> findByStatus(String status);
    
    List<JiraIssueNode> findByAssignee(String assignee);
    
    List<JiraIssueNode> findByIssueType(String issueType);
    
    List<JiraIssueNode> findByCreatedBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    List<JiraIssueNode> findByUpdatedBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    @Query("MATCH (j:JiraIssue) WHERE j.summary CONTAINS $keyword OR j.description CONTAINS $keyword RETURN j")
    List<JiraIssueNode> findByKeywordInSummaryOrDescription(@Param("keyword") String keyword);
    
    @Query("MATCH (j:JiraIssue) WHERE $label IN j.labels RETURN j")
    List<JiraIssueNode> findByLabel(@Param("label") String label);
    
    @Query("MATCH (j:JiraIssue) WHERE $component IN j.components RETURN j")
    List<JiraIssueNode> findByComponent(@Param("component") String component);
    
    @Query("MATCH (j:JiraIssue) WHERE j.priority = $priority AND j.status <> 'Closed' RETURN j")
    List<JiraIssueNode> findOpenIssuesByPriority(@Param("priority") String priority);
    
    @Query("MATCH (j:JiraIssue)-[:DEPENDS_ON]->(d:JiraIssue) WHERE j.key = $issueKey RETURN d")
    List<JiraIssueNode> findDependencies(@Param("issueKey") String issueKey);
    
    @Query("MATCH (j:JiraIssue)<-[:DEPENDS_ON]-(d:JiraIssue) WHERE j.key = $issueKey RETURN d")
    List<JiraIssueNode> findDependents(@Param("issueKey") String issueKey);
} 