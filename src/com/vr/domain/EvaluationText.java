package com.vr.domain;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class EvaluationText implements Serializable{
	private Integer id;// 记录id
	
	private String evaluationBody;// 文章正文
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	public String getEvaluationBody() {
		return evaluationBody;
	}

	public void setEvaluationBody(String evaluationBody) {
		this.evaluationBody = evaluationBody;
	}

	
}
