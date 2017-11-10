package com.vr.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.UserMessageDao;
import com.vr.domain.Usermessage;
import com.vr.util.HibernateUtils;
@Repository
@Qualifier("userMessageDaoImpl")
public class UserMessageDaoImpl extends HibernateUtils implements UserMessageDao{

	@Override
	public Object CountMessage(int userid) {

		
		// TODO Auto-generated method stub
		String hql = "select count(id) from Usermessage where user.id =?";
		Object object = findByHql(hql, new Object[] {userid});
		
		// TODO Auto-generated method stub
		return object;
	}
	

	@Override
	public Object CountReadMessage(int userid) {
		// TODO Auto-generated method stub
		String hql = "select count(id) from Usermessage where user.id =? and readflag=1";
		Object object = findByHql(hql, new Object[] {userid});
		
		// TODO Auto-generated method stub
		return object;
	}

	@Override
	public Object CountUnReadMessage(int userid) {
		// TODO Auto-generated method stub
		String hql = "select count(id) from Usermessage where user.id =? and readflag=0";
		Object object = findByHql(hql, new Object[] {userid});
		
		// TODO Auto-generated method stub
		return object;
	}

	@Override
	public List<Object> getReadMessage(int page, int userid) {
		// TODO Auto-generated method stub
		String hql = "from Usermessage e where e.user.id ="+userid+" and e.readflag=1";
		List<Object> object = listpage(hql, page, 10);
		return object;
	}

	@Override
	public List<Object> getUnReadMessage(int page, int userid) {
		// TODO Auto-generated method stub
		String hql = "from Usermessage e where e.user.id ="+userid+" and e.readflag=0";
		List<Object> object = listpage(hql, page, 10);
		return object;
	}

	@Override
	public boolean ReadMessage(Usermessage message) {
		// TODO Auto-generated method stub
		return update(message);
	}

	@Override
	public boolean CreateMessage(Usermessage usermessage) {
		// TODO Auto-generated method stub
		return update(usermessage);
	}

	@Override
	public Object getMessage(int messageid) {
		// TODO Auto-generated method stub
		String hql = "from Usermessage e where e.id =?";
		Object object = findByHql(hql, new Object []{messageid});
		return object;
	}

	@Override
	public List<Object> getMessages(int userid) {
		// TODO Auto-generated method stub
		String hql = "from Usermessage e where e.user.id =?";
		return findByHqlGetList(hql, new Object []{userid});
	}
	

}
