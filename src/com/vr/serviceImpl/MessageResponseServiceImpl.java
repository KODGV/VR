package com.vr.serviceImpl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.MessageDao;
import com.vr.domain.MessageLeaving;
import com.vr.domain.MessageResponse;
import com.vr.domain.User;
import com.vr.service.MessageLeavingService;
import com.vr.service.MessageResponseService;
import com.vr.util.ConvertUtil;

@Service
@Qualifier("messageResponseServiceImpl")
public class MessageResponseServiceImpl implements MessageResponseService{
	@Autowired
	@Qualifier("messageDaoImpl")
	private MessageDao dao;
	@Override
	public MessageResponse createMessageResponse(User user, String content, int Commentid) {
		// TODO Auto-generated method stub
		String date=ConvertUtil.DatetoString(new Date(), "yyyy-MM-dd HH:mm:ss");
		MessageResponse messageResponse=new MessageResponse();
		messageResponse.setMessageResponse(content);
		MessageLeaving leaving=(MessageLeaving)dao.getMessageById(Commentid, "MessageLeaving");
		messageResponse.setMessageLeaving(leaving);
		messageResponse.setUser(user);
		messageResponse.setReleasetime(date);
		
		 dao.createMessage(messageResponse);
		 return messageResponse;
	}

	@Override
	public boolean deleteMessageResponse(MessageResponse messageResponse) {
		// TODO Auto-generated method stub
		return dao.deleteMessage(messageResponse);
	}

	@Override
	public List<MessageResponse> getMessageResponseListById(String condition, int pageNo, String type, String belong) {
		// TODO Auto-generated method stub
		// TODO Auto-generated method stub
		List<Object>list=null;
		list = dao.getResponseByCondition(condition, pageNo, type, belong);
		
		List<MessageResponse>messageResponse=new ArrayList<>();
		for(Object o:list)
		{
			messageResponse.add((MessageResponse)o);
		}
		return messageResponse;
	}

	@Override
	public MessageResponse getMessageResponseById(int id) {
		// TODO Auto-generated method stub
		return (MessageResponse) dao.getMessageById(id, "MessageResponse");
	}

	@Override
	public boolean updateMessageResponse(MessageResponse messageResponse) {
		// TODO Auto-generated method stub
		return dao.updateMessage(messageResponse);
	}





}
