package com.jiragit.model.neo4j;

import org.springframework.data.neo4j.core.schema.*;

import java.time.LocalDateTime;
import java.util.List;

@Node("JiraIssue")
public class JiraIssueNode {
    
    @Id
    private String key;
    
    @Property("id")
    private String id;
    
    @Property("summary")
    private String summary;
    
    @Property("description")
    private String description;
    
    @Property("status")
    private String status;
    
    @Property("priority")
    private String priority;
    
    @Property("assignee")
    private String assignee;
    
    @Property("reporter")
    private String reporter;
    
    @Property("issueType")
    private String issueType;
    
    @Property("projectKey")
    private String projectKey;
    
    @Property("created")
    private LocalDateTime created;
    
    @Property("updated")
    private LocalDateTime updated;
    
    @Property("resolved")
    private LocalDateTime resolved;
    
    @Property("labels")
    private List<String> labels;
    
    @Property("components")
    private List<String> components;
    
    @Property("fixVersions")
    private List<String> fixVersions;
    
    @Property("affectedVersions")
    private List<String> affectedVersions;
    
    @Property("customFields")
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