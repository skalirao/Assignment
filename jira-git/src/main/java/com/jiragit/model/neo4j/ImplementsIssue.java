package com.jiragit.model.neo4j;

import org.springframework.data.neo4j.core.schema.*;

@RelationshipProperties
public class ImplementsIssue {
    
    @Id
    @GeneratedValue
    private Long id;
    
    @TargetNode
    private JiraIssueNode issue;
    
    @Property("implementationType")
    private String implementationType; // "feature", "bugfix", "enhancement"
    
    @Property("filesChanged")
    private String filesChanged;
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public JiraIssueNode getIssue() { return issue; }
    public void setIssue(JiraIssueNode issue) { this.issue = issue; }
    
    public String getImplementationType() { return implementationType; }
    public void setImplementationType(String implementationType) { this.implementationType = implementationType; }
    
    public String getFilesChanged() { return filesChanged; }
    public void setFilesChanged(String filesChanged) { this.filesChanged = filesChanged; }
} 