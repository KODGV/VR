package com.vr.vo;

import java.util.Date;
import java.util.List;

import com.vr.domain.EvaluationParentComment;

import sun.nio.cs.HistoricallyNamedCharset;

public class EvaluationParentCommentVO {
	private Integer id;
	private Integer evaluationId;
	private Integer userId;
	private String userName;
	private String comment;
	private Date postTime;
	private Integer ups;
	private Integer view;
	private List<EvaluationChildrenVO> childComments;
	
	public EvaluationParentCommentVO(){
		
	}
	
	public EvaluationParentCommentVO(EvaluationParentComment comment, String userName) {
		this.id=comment.getId();
		this.evaluationId=comment.getEvaluationId();
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
	public List<EvaluationChildrenVO> getChildComments() {
		return childComments;
	}
	public void setChildComments(List<EvaluationChildrenVO> childComments) {
		this.childComments = childComments;
	}

	public Integer getUps() {
		return ups;
	}

	public void setUps(Integer ups) {
		this.ups = ups;
	}

	public Integer getView() {
		return view;
	}

	public void setView(Integer view) {
		this.view = view;
	}
	
}
