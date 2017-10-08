package com.vr.vo;

import java.util.Date;

import com.vr.domain.EvaluationChildComment;

public class EvaluationChildrenVO {
	private Integer id;
	private Integer evaluationId;
	private Integer userId;
	private String userName;
	private String comment;
	private Date postTime;
	public EvaluationChildrenVO(){
		
	}
	public EvaluationChildrenVO(EvaluationChildComment comment, String userName) {
		this.id=comment.getId();
		this.userId=comment.getUserId();
		this.userName=userName;
		this.comment=comment.getComment();
		this.postTime=comment.getPostTime();
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
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
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
	
	

}
