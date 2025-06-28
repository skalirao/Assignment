package com.jiragit.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Entity
@Table(name = "jira_issues")
public class JiraIssue {
    
    @Id
    private String key;
    
    private String id;
    private String summary;
    private String description;
    private String status;
    private String priority;
    private String assignee;
    private String reporter;
    private String issueType;
    private String projectKey;
    
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime created;
    
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime updated;
    
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime resolved;
    
    @ElementCollection
    @CollectionTable(name = "jira_issue_labels", joinColumns = @JoinColumn(name = "issue_key"))
    @Column(name = "label")
    private List<String> labels;
    
    @ElementCollection
    @CollectionTable(name = "jira_issue_components", joinColumns = @JoinColumn(name = "issue_key"))
    @Column(name = "component")
    private List<String> components;
    
    @ElementCollection
    @CollectionTable(name = "jira_issue_fix_versions", joinColumns = @JoinColumn(name = "issue_key"))
    @Column(name = "fix_version")
    private List<String> fixVersions;
    
    @ElementCollection
    @CollectionTable(name = "jira_issue_affected_versions", joinColumns = @JoinColumn(name = "issue_key"))
    @Column(name = "affected_version")
    private List<String> affectedVersions;
    
    @Column(columnDefinition = "TEXT")
    private String customFields;
    
    // Getters and Setters
    public String getKey() { return key; }
    public void setKey(String key) { this.key = key; }
    
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    public String getPriority() { return priority; }
    public void setPriority(String priority) { this.priority = priority; }
    
    public String getAssignee() { return assignee; }
    public void setAssignee(String assignee) { this.assignee = assignee; }
    
    public String getReporter() { return reporter; }
    public void setReporter(String reporter) { this.reporter = reporter; }
    
    public String getIssueType() { return issueType; }
    public void setIssueType(String issueType) { this.issueType = issueType; }
    
    public String getProjectKey() { return projectKey; }
    public void setProjectKey(String projectKey) { this.projectKey = projectKey; }
    
    public LocalDateTime getCreated() { return created; }
    public void setCreated(LocalDateTime created) { this.created = created; }
    
    public LocalDateTime getUpdated() { return updated; }
    public void setUpdated(LocalDateTime updated) { this.updated = updated; }
    
    public LocalDateTime getResolved() { return resolved; }
    public void setResolved(LocalDateTime resolved) { this.resolved = resolved; }
    
    public List<String> getLabels() { return labels; }
    public void setLabels(List<String> labels) { this.labels = labels; }
    
    public List<String> getComponents() { return components; }
    public void setComponents(List<String> components) { this.components = components; }
    
    public List<String> getFixVersions() { return fixVersions; }
    public void setFixVersions(List<String> fixVersions) { this.fixVersions = fixVersions; }
    
    public List<String> getAffectedVersions() { return affectedVersions; }
    public void setAffectedVersions(List<String> affectedVersions) { this.affectedVersions = affectedVersions; }
    
    public String getCustomFields() { return customFields; }
    public void setCustomFields(String customFields) { this.customFields = customFields; }
} 