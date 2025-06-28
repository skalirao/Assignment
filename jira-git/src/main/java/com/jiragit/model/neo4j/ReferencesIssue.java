package com.jiragit.model.neo4j;

import org.springframework.data.neo4j.core.schema.*;

@RelationshipProperties
public class ReferencesIssue {
    
    @Id
    @GeneratedValue
    private Long id;
    
    @TargetNode
    private JiraIssueNode issue;
    
    @Property("confidence")
    private Double confidence;
    
    @Property("referenceType")
    private String referenceType; // "commit_message", "diff_content", "file_path"
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public JiraIssueNode getIssue() { return issue; }
    public void setIssue(JiraIssueNode issue) { this.issue = issue; }
    
    public Double getConfidence() { return confidence; }
    public void setConfidence(Double confidence) { this.confidence = confidence; }
    
    public String getReferenceType() { return referenceType; }
    public void setReferenceType(String referenceType) { this.referenceType = referenceType; }
} 