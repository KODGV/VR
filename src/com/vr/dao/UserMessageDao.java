package com.vr.dao;

import java.util.List;

import com.vr.domain.Usermessage;

public interface UserMessageDao {
public Object CountMessage(int userid);
public Object CountReadMessage(int userid);
public Object CountUnReadMessage(int userid);
public List<Object> getReadMessage(int page,int userid);
public List<Object> getUnReadMessage(int page,int userid);
public boolean ReadMessage(Usermessage message);
public boolean CreateMessage(Usermessage usermessage);
public Object getMessage(int messageid);
public List<Object>getMessages(int userid);

}
