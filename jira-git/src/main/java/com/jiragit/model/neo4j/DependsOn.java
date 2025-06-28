package com.jiragit.model.neo4j;

import org.springframework.data.neo4j.core.schema.*;

@RelationshipProperties
public class DependsOn {
    
    @Id
    @GeneratedValue
    private Long id;
    
    @TargetNode
    private JiraIssueNode dependentIssue;
    
    @Property("dependencyType")
    private String dependencyType; // "blocks", "depends_on", "relates_to"
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public JiraIssueNode getDependentIssue() { return dependentIssue; }
    public void setDependentIssue(JiraIssueNode dependentIssue) { this.dependentIssue = dependentIssue; }
    
    public String getDependencyType() { return dependencyType; }
    public void setDependencyType(String dependencyType) { this.dependencyType = dependencyType; }
} 