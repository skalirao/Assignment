package com.jiragit.service;

import com.atlassian.jira.rest.client.api.JiraRestClient;
import com.atlassian.jira.rest.client.api.domain.Issue;
import com.atlassian.jira.rest.client.api.domain.SearchResult;
import com.jiragit.model.JiraIssue;
import com.jiragit.model.neo4j.JiraIssueNode;
import com.jiragit.repository.JiraIssueRepository;
import com.jiragit.repository.neo4j.JiraIssueNodeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

@Service
public class JiraMigrationService {
    private static final Logger logger = LoggerFactory.getLogger(JiraMigrationService.class);

    private final JiraRestClient jiraRestClient;
    private final JiraIssueRepository jiraIssueRepository;
    private final JiraIssueNodeRepository jiraIssueNodeRepository;

    @Value("${jira.project-key}")
    private String projectKey;

    public JiraMigrationService(JiraRestClient jiraRestClient,
                                JiraIssueRepository jiraIssueRepository,
                                JiraIssueNodeRepository jiraIssueNodeRepository) {
        this.jiraRestClient = jiraRestClient;
        this.jiraIssueRepository = jiraIssueRepository;
        this.jiraIssueNodeRepository = jiraIssueNodeRepository;
    }

    @Transactional
    public void migrateAllJiraIssues() {
        try {
            String jql = "project = '" + projectKey + "'";
            int startAt = 0;
            int maxResults = 100;
            boolean hasMore = true;
            while (hasMore) {
                SearchResult result = jiraRestClient.getSearchClient().searchJql(jql, maxResults, startAt, null).claim();
                List<Issue> issues = new ArrayList<>();
                result.getIssues().forEach(issues::add);
                if (issues.isEmpty()) break;
                for (Issue issue : issues) {
                    JiraIssue entity = mapToEntity(issue);
                    jiraIssueRepository.save(entity);
                    JiraIssueNode node = mapToNode(issue);
                    jiraIssueNodeRepository.save(node);
                }
                startAt += maxResults;
                hasMore = issues.size() == maxResults;
            }
        } catch (Exception e) {
            logger.error("Error migrating Jira issues", e);
        }
    }

    private JiraIssue mapToEntity(Issue issue) {
        JiraIssue entity = new JiraIssue();
        entity.setKey(issue.getKey());
        entity.setId(issue.getId().toString());
        entity.setSummary(issue.getSummary());
        entity.setDescription(issue.getDescription());
        entity.setStatus(issue.getStatus() != null ? issue.getStatus().getName() : null);
        entity.setPriority(issue.getPriority() != null ? issue.getPriority().getName() : null);
        entity.setAssignee(issue.getAssignee() != null ? issue.getAssignee().getName() : null);
        entity.setReporter(issue.getReporter() != null ? issue.getReporter().getName() : null);
        entity.setIssueType(issue.getIssueType() != null ? issue.getIssueType().getName() : null);
        entity.setProjectKey(issue.getProject().getKey());
        entity.setCreated(issue.getCreationDate() != null ? issue.getCreationDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime() : null);
        entity.setUpdated(issue.getUpdateDate() != null ? issue.getUpdateDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime() : null);
        entity.setResolved(issue.getResolutionDate() != null ? issue.getResolutionDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime() : null);
        // Labels, components, versions, custom fields can be mapped similarly
        return entity;
    }

    private JiraIssueNode mapToNode(Issue issue) {
        JiraIssueNode node = new JiraIssueNode();
        node.setKey(issue.getKey());
        node.setId(issue.getId().toString());
        node.setSummary(issue.getSummary());
        node.setDescription(issue.getDescription());
        node.setStatus(issue.getStatus() != null ? issue.getStatus().getName() : null);
        node.setPriority(issue.getPriority() != null ? issue.getPriority().getName() : null);
        node.setAssignee(issue.getAssignee() != null ? issue.getAssignee().getName() : null);
        node.setReporter(issue.getReporter() != null ? issue.getReporter().getName() : null);
        node.setIssueType(issue.getIssueType() != null ? issue.getIssueType().getName() : null);
        node.setProjectKey(issue.getProject().getKey());
        node.setCreated(issue.getCreationDate() != null ? issue.getCreationDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime() : null);
        node.setUpdated(issue.getUpdateDate() != null ? issue.getUpdateDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime() : null);
        node.setResolved(issue.getResolutionDate() != null ? issue.getResolutionDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime() : null);
        // Labels, components, versions, custom fields can be mapped similarly
        return node;
    }
} 