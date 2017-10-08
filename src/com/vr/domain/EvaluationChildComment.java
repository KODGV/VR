package com.vr.domain;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class EvaluationChildComment {
	private Integer id;
	private Integer commentId;
	private Integer userId;
	private String comment;
	private Date postTime;
	@JsonIgnore
	private EvaluationParentComment parentComment;

	public EvaluationChildComment(){
		
	}
	
	public EvaluationChildComment(Integer commentId, Integer userId, String content, Date date) {
		this.userId=userId;
		this.parentComment=new EvaluationParentComment();
		parentComment.setId(commentId);
		this.comment=content;
		this.postTime=date;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getCommentId() {
		return commentId;
	}

	public void setCommentId(Integer commentId) {
		this.commentId = commentId;
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

	
	public EvaluationParentComment getParentComment() {
		return parentComment;
	}

	public void setParentComment(EvaluationParentComment parentComment) {
		this.parentComment = parentComment;
	}

	@Override
	public String toString() {
		return "EvaluationChildComment [id=" + id + ", commentId=" + commentId + ", userId=" + userId + ", comment="
				+ comment + ", postTime=" + postTime + "]";
	}

	

	
	
}
