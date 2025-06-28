package com.jiragit.model.neo4j;

import org.springframework.data.neo4j.core.schema.*;

import java.time.LocalDateTime;
import java.util.List;

@Node("GitCommit")
public class GitCommitNode {
    
    @Id
    private String commitHash;
    
    @Property("authorName")
    private String authorName;
    
    @Property("authorEmail")
    private String authorEmail;
    
    @Property("committerName")
    private String committerName;
    
    @Property("committerEmail")
    private String committerEmail;
    
    @Property("subject")
    private String subject;
    
    @Property("fullMessage")
    private String fullMessage;
    
    @Property("commitTime")
    private LocalDateTime commitTime;
    
    @Property("authorTime")
    private LocalDateTime authorTime;
    
    @Property("branch")
    private String branch;
    
    @Property("parentHash")
    private String parentHash;
    
    @Property("changedFiles")
    private List<String> changedFiles;
    
    @Property("diff")
    private String diff;
    
    @Property("insertions")
    private int insertions;
    
    @Property("deletions")
    private int deletions;
    
    // Getters and Setters
    public String getCommitHash() { return commitHash; }
    public void setCommitHash(String commitHash) { this.commitHash = commitHash; }
    
    public String getAuthorName() { return authorName; }
    public void setAuthorName(String authorName) { this.authorName = authorName; }
    
    public String getAuthorEmail() { return authorEmail; }
    public void setAuthorEmail(String authorEmail) { this.authorEmail = authorEmail; }
    
    public String getCommitterName() { return committerName; }
    public void setCommitterName(String committerName) { this.committerName = committerName; }
    
    public String getCommitterEmail() { return committerEmail; }
    public void setCommitterEmail(String committerEmail) { this.committerEmail = committerEmail; }
    
    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }
    
    public String getFullMessage() { return fullMessage; }
    public void setFullMessage(String fullMessage) { this.fullMessage = fullMessage; }
    
    public LocalDateTime getCommitTime() { return commitTime; }
    public void setCommitTime(LocalDateTime commitTime) { this.commitTime = commitTime; }
    
    public LocalDateTime getAuthorTime() { return authorTime; }
    public void setAuthorTime(LocalDateTime authorTime) { this.authorTime = authorTime; }
    
    public String getBranch() { return branch; }
    public void setBranch(String branch) { this.branch = branch; }
    
    public String getParentHash() { return parentHash; }
    public void setParentHash(String parentHash) { this.parentHash = parentHash; }
    
    public List<String> getChangedFiles() { return changedFiles; }
    public void setChangedFiles(List<String> changedFiles) { this.changedFiles = changedFiles; }
    
    public String getDiff() { return diff; }
    public void setDiff(String diff) { this.diff = diff; }
    
    public int getInsertions() { return insertions; }
    public void setInsertions(int insertions) { this.insertions = insertions; }
    
    public int getDeletions() { return deletions; }
    public void setDeletions(int deletions) { this.deletions = deletions; }
} 