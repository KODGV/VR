package com.vr.domain;

public class Encyclopedia {
	
	private int id;
	private String keyword;
	private String type;
	private String changenote;

	private int upvote;
	private int downvote;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getChangenote() {
		return changenote;
	}
	public void setChangenote(String changenote) {
		this.changenote = changenote;
	}
	public int getUpvote() {
		return upvote;
	}
	public void setUpvote(int upvote) {
		this.upvote = upvote;
	}
	public int getDownvote() {
		return downvote;
	}
	public void setDownvote(int downvote) {
		this.downvote = downvote;
	}
	public Encyclopedia(int id, String keyword, String type, String changenote,
			int upvote, int downvote) {

		this.id = id;
		this.keyword = keyword;
		this.type = type;
		this.changenote = changenote;
		this.upvote = upvote;
		this.downvote = downvote;
	}
	public Encyclopedia() {

	}
}
	
	