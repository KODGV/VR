package com.vr.domain;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class EvaluationParentComment {
	private Integer id;
	private Integer evaluationId;
	private Integer userId;
	private String comment;
	private Date postTime;
	
	private Integer ups;
	
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Set<EvaluationChildComment> childComments=new HashSet<>();
	
	public EvaluationParentComment(){
		
	}
	
	public EvaluationParentComment(Integer evaluationId, Integer userId, String content, Date date) {
		this.evaluationId=evaluationId;
		this.userId=userId;
		this.comment=content;
		this.postTime=date;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getEvaluationId() {
		return evaluationId;
	}

	public void setEvaluationId(Integer evaluationId) {
		this.evaluationId = evaluationId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Date getPostTime() {
		return postTime;
	}

	public void setPostTime(Date postTime) {
		this.postTime = postTime;
	}

	
	public Set<EvaluationChildComment> getChildComments() {
		return childComments;
	}

	public void setChildComments(Set<EvaluationChildComment> childComments) {
		this.childComments = childComments;
	}

	public Integer getUps() {
		return ups;
	}

	public void setUps(Integer ups) {
		this.ups = ups;
	}

	@Override
	public String toString() {
		return "EvaluationParentComment [id=" + id + ", evaluationId=" + evaluationId + ", userId=" + userId
				+ ", comment=" + comment + ", postTime=" + postTime + ", ups=" + ups + ", childComments="
				+ childComments + "]";
	}


	
}
