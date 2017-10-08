package com.vr.domain;

public class CommentView {
	private Integer id;
	private Integer commentId;
	private Integer userId;
	private Integer type;

	public CommentView(){
		
	}
	
	public CommentView(Integer commentId, Integer userId, int type) {
		this.commentId=commentId;
		this.userId=userId;
		this.type=type;
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

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "CommentView [id=" + id + ", commentId=" + commentId + ", userId=" + userId + ", type=" + type + "]";
	}

}
