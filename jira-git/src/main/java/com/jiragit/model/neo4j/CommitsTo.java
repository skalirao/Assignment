package com.jiragit.model.neo4j;

import org.springframework.data.neo4j.core.schema.*;

@RelationshipProperties
public class CommitsTo {
    
    @Id
    @GeneratedValue
    private Long id;
    
    @TargetNode
    private GitCommitNode commit;
    
    @Property("commitOrder")
    private Integer commitOrder;
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public GitCommitNode getCommit() { return commit; }
    public void setCommit(GitCommitNode commit) { this.commit = commit; }
    
    public Integer getCommitOrder() { return commitOrder; }
    public void setCommitOrder(Integer commitOrder) { this.commitOrder = commitOrder; }
} 