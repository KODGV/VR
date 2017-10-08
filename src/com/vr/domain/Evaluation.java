package com.vr.domain;

import java.io.Serializable;
import java.util.Date;

import org.hibernate.Session;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class Evaluation implements Serializable{
	private Integer evaluationId;// 文章id
	private String titlePic;// 文章头图
	private int authorId;// 作者id
	private String evaluationTitle;//文章标题
	private Date postTime;// 文章发表时间
	private Date updateTime;// 文章修改时间
	private Integer type;// 文章类型,便于扩展
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private EvaluationText evaluationText;//文章正文
	private int ups;
	private int downs;
	private int comments;
	private int view;
	private String authorName;
	
	
	
	public Integer getEvaluationId() {
		return evaluationId;
	}

	public void setEvaluationId(Integer evaluationId) {
		this.evaluationId = evaluationId;
	}

	public String getTitlePic() {
		return titlePic;
	}

	public void setTitlePic(String titlePic) {
		this.titlePic = titlePic;
	}
	
	public int getAuthorId() {
		return authorId;
	}

	public void setAuthorId(int authorId) {
		this.authorId = authorId;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public Date getPostTime() {
		return postTime;
	}

	public void setPostTime(Date postTime) {
		this.postTime = postTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public EvaluationText getEvaluationText() {
		return evaluationText;
	}

	public void setEvaluationText(EvaluationText evaluationText) {
		this.evaluationText = evaluationText;
	}

	public int getUps() {
		return ups;
	}

	public void setUps(int ups) {
		this.ups = ups;
	}

	public int getDowns() {
		return downs;
	}

	public void setDowns(int downs) {
		this.downs = downs;
	}

	public int getComments() {
		return comments;
	}

	public void setComments(int comments) {
		this.comments = comments;
	}

	public String getEvaluationTitle() {
		return evaluationTitle;
	}

	public void setEvaluationTitle(String evaluationTitle) {
		this.evaluationTitle = evaluationTitle;
	}


	public int getView() {
		return view;
	}

	public void setView(int view) {
		this.view = view;
	}

	


	

	
	
	

}
