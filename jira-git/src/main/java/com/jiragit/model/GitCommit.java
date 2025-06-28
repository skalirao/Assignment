package com.jiragit.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "git_commits")
public class GitCommit {
    
    @Id
    private String commitHash;
    
    private String authorName;
    private String authorEmail;
    private String committerName;
    private String committerEmail;
    private String subject;
    
    @Column(columnDefinition = "TEXT")
    private String fullMessage;
    
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime commitTime;
    
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime authorTime;
    
    private String branch;
    private String parentHash;
    
    @ElementCollection
    @CollectionTable(name = "git_commit_files", joinColumns = @JoinColumn(name = "commit_hash"))
    @Column(name = "file_path")
    private List<String> changedFiles;
    
    @Column(columnDefinition = "TEXT")
    private String diff;
    
    private int insertions;
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