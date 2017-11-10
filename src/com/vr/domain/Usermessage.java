package com.vr.domain;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonView;
import com.vr.view.MessageLeavingView;
import com.vr.view.UserMessageView;

public class Usermessage {
	@JsonView(UserMessageView.Tag.class)
private int id;								//标识消息id
	@JsonView(UserMessageView.Tag.class)
private String type;						//标识类型 tiezi posts这种
	@JsonView(UserMessageView.Tag.class)
private String msgtype;						//标识类型，删除，修改，通过这种，因为可能操作很多所以不定义数字
	@JsonView(UserMessageView.Tag.class)
private String title;						//标题
	@JsonView(UserMessageView.Tag.class)		
private String date;						//日期
	@JsonView(UserMessageView.Tag.class)
private int msgid;							//标识内容id
	@JsonView(UserMessageView.Tag.class)
	private int readflag;					//标识是否已读

private User user;							//User你不需要给我，我自己可以获取得到，我也不需要给你，我不给你的！
public Usermessage()
{
	
}
public int getMsgid() {
	return msgid;
}
public void setMsgid(int msgid) {
	this.msgid = msgid;
}
public Usermessage(String type, String msgtype, String title, String date, User user, int readflag,int msgid) {
	super();
	this.type = type;
	this.msgtype = msgtype;
	this.title = title;
	this.date = date;
	this.user = user;
	this.readflag = readflag;
	this.msgid=msgid;
}
/*
 * 1-已读
 * 0-未读
 */

public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}
public String getMsgtype() {
	return msgtype;
}
public void setMsgtype(String msgtype) {
	this.msgtype = msgtype;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public String getDate() {
	return date;
}
public void setDate(String date) {
	this.date = date;
}
public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}
public int getReadflag() {
	return readflag;
}
public void setReadflag(int readflag) {
	this.readflag = readflag;
}

}
