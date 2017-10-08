package com.vr.domain;

public class EvaluationView {
	private Integer id;
	private Integer evaluationId;
	private Integer userId;
	private Integer type;
	
	public EvaluationView(){
		
	}
	
	public EvaluationView(Integer evaluationId,Integer userId,Integer type){
		this.evaluationId=evaluationId;
		this.userId=userId;
		this.type=type;
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
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "EvaluationView [id=" + id + ", evaluationId=" + evaluationId + ", userId=" + userId + ", type=" + type
				+ "]";
	}
	
	
}
