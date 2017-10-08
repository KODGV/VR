package com.vr.service;

import java.util.List;

import com.vr.domain.MessageResponse;
import com.vr.domain.User;

public interface MessageResponseService {
	public MessageResponse createMessageResponse(User user, String content, int Commentid);
    public boolean deleteMessageResponse(MessageResponse messageResponse);
	List<MessageResponse> getMessageResponseListById(String condition,int pageNo,String type,String belong);
	MessageResponse getMessageResponseById(int id);
	boolean updateMessageResponse(MessageResponse messageResponse);

}
