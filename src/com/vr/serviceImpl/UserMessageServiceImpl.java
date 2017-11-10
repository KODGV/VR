package com.vr.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.ThumbsupdownDao;
import com.vr.dao.UserMessageDao;
import com.vr.domain.Usermessage;
import com.vr.service.UserMessageServiece;
@Service
@Qualifier("userMessageServiceImpl")
public class UserMessageServiceImpl implements UserMessageServiece{
	@Autowired
	@Qualifier("userMessageDaoImpl")
	private UserMessageDao dao;
	@Override
	public boolean SReadMessage(int messageid) {
		// TODO Auto-generated method stub
		Usermessage usermessage=(Usermessage)dao.getMessage(messageid);
		usermessage.setReadflag(1);
		return dao.ReadMessage(usermessage);
	}
	@Override
	public UserMessageDao getUserMessageDao()
	{
		return dao;
	}

}
