package com.vr.vo;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.vr.domain.EvaluationText;

public class EvaluationVO {
	private Integer evaluationId;// 文章id
	private String titlePic;// 文章头图
	private int authorId;// 作者id
	private String evaluationTitle;//文章标题
	private Date postTime;// 文章发表时间
	private Date updateTime;// 文章修改时间
	private String evaluationText;//文章正文
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
	public String getEvaluationTitle() {
		return evaluationTitle;
	}
	public void setEvaluationTitle(String evaluationTitle) {
		this.evaluationTitle = evaluationTitle;
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
	public String getEvaluationText() {
		return evaluationText;
	}
	public void setEvaluationText(String evaluationText) {
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
	public int getView() {
		return view;
	}
	public void setView(int view) {
		this.view = view;
	}
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	
	public EvaluationVO(){
		
	}
	
	public EvaluationVO(Integer evaluationId, String titlePic, int authorId,String authorName, String evaluationTitle, Date postTime,
			Date updateTime, String evaluationText) {
		this.evaluationId = evaluationId;
		this.titlePic = titlePic;
		this.authorId = authorId;
		this.evaluationTitle = evaluationTitle;
		this.postTime = postTime;
		this.updateTime = updateTime;
		this.evaluationText = evaluationText;
		this.authorName = authorName;
	}
	
	
	
}	
