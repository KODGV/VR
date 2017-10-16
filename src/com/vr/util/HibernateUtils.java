package com.vr.util;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Component;

import com.vr.domain.Encyclopedia;
import com.vr.exception.DaoException;

public class HibernateUtils {
	@Autowired
	private static SessionFactory sessionFactory;
	

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		HibernateUtils.sessionFactory = sessionFactory;
	}
	
	public boolean saveNew(Object obj) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		boolean status = false;
		try {
			session.save(obj);
			tx.commit();
			status = true;
		} catch (Exception e) {
			e.printStackTrace();
			tx.rollback();
		} finally {
			session.close();	
		
			
		}
		return status;
	}

	public boolean save(Object obj) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		boolean status = false;
		try {
			session.save(obj);
			tx.commit();
			status = true;
		} catch (Exception e) {
			e.printStackTrace();
			tx.rollback();
			throw new DaoException();
		} finally {
			session.close();	
		}
		return status;
	}

	public boolean update(Object obj) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		;
		boolean status = false;
		try {
			session.update(session.merge(obj));
			tx.commit();
			status = true;
		} catch (Exception e) {
			e.printStackTrace();
			tx.rollback();
		} finally {
			session.close();	
		}
		return status;
	}

	public boolean delete(Object obj) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		boolean status = false;
		try {
			session.delete(session.merge(obj));
			tx.commit();
			status = true;
		} catch (Exception e) {
			e.printStackTrace();
			tx.rollback();
		} finally {
			session.close();	
		}
		return status;
	}

	public boolean deleteall(String obj) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		boolean status = false;
		try {
			String hql = "delete " + obj;
			session.createQuery(hql).executeUpdate();
			tx.commit();
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
			tx.rollback();
		} finally {
			session.close();	
		}
		return status;
	}

	public Object findByHql(String hql, Object[] condition) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		Object result = null;
		try {
			Query query = session.createQuery(hql);
			if (condition.length != 0)
				for (int i = 0; i < condition.length; i++)
					query.setParameter(i, condition[i]);
			
			result = query.uniqueResult();
			tx.commit();
		} catch (Exception e) {
			// tran.rollback();
			e.printStackTrace();
			tx.rollback();
		} finally {
			session.close();	
		}
		return result;
	}

	public List<Object> findByHqlGetList(String hql, Object[] condition) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		List<Object>list=null;
		try{
			Query query = sessionFactory.openSession().createQuery(hql);
			for (int i = 0, len = condition.length; i < len; i++) {
				query.setParameter(i, condition[i]);
			// query.setParameter(i+" ",condition[i]);
			}
			list=(List<Object>) query.list();
			tx.commit();
		}catch (Exception e) {
			// tran.rollback();
			e.printStackTrace();
			tx.rollback();
		} finally {
			session.close();	
		}
		return list;
	}

	public List<Object> listpage(String hql, int pageNo, int pageNum) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		List<Object> list=null;
		try{
		Query query = session.createQuery(hql);

		query.setFirstResult((pageNo - 1) * pageNum);
		query.setMaxResults(pageNum);
		 list= query.list();
		 tx.commit();
		}catch (Exception e) {
			// tran.rollback();
			e.printStackTrace();
			tx.rollback();
		} finally {
			session.close();	
		}
		return list;

	}
	public Object getSize(String hql)
	{
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		Object obj=null;
		try{
			obj=sessionFactory.openSession().createQuery(hql).uniqueResult();
			tx.commit();
		}catch (Exception e) {
			// tran.rollback();
			e.printStackTrace();
			tx.rollback();
		} finally {
			session.close();	
		}
		return obj;
	}

	public void deleteByHql(String hql, Integer id) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		try {
			Query query = session.createQuery(hql);
			query.setInteger(0, id);	
			query.executeUpdate();
			tx.commit();
		} catch (Exception e) {
			// tran.rollback();
			tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();	
		}
	}
	public boolean deleteByQuery(String hql, List<Object> conditions) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		Query query = session.createQuery(hql);
		for (int i = 0; i < conditions.size(); i++) {
			query.setParameter(i, conditions.get(i));
		}
		try {
			//返回值为执行更新行数
			int count = query.executeUpdate();
			
			transaction.commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			transaction.rollback();
			return false;
		} finally {
			session.close();	
		}
	}
	public boolean deleteUserByHql(Object id)
	{
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		try{
			String answer="delete from Answer a where a.user.id=?";
			String comment_view="delete from CommentView c where c.userId=?";
			String evaluation="delete from Evaluation e where e.authorId=?";
			String evaluationChildComment="delete from EvaluationChildComment e where e.userId=?";
			String evaluationParentComment="delete from EvaluationParentComment e where e.userId=?";
			String evaluationView="delete from EvaluationView e where e.userId=?";
			String messageResponse="delete from MessageResponse e where e.user.id=?";
			String messageLeaving="delete from MessageLeaving e where e.user.id=?";
			String posts="delete from Posts e where e.posterId=?";
			String votedUser="delete from VotedUser e where e.id.userid=?";
			String user="delete from User e where e.id=?";
			Query query = session.createQuery(answer);
			query.setParameter(0, id);
			query.executeUpdate();
		
			query= session.createQuery(comment_view);
			query.setParameter(0, id);
			query.executeUpdate();
			query= session.createQuery(evaluation);
			query.setParameter(0, id);
			query.executeUpdate();
			query= session.createQuery(evaluationChildComment);
			query.setParameter(0, id);
			query.executeUpdate();
			query= session.createQuery(evaluationParentComment);
			query.setParameter(0, id);
			query.executeUpdate();
			query= session.createQuery(evaluationView);
			query.setParameter(0, id);
			query.executeUpdate();
			query= session.createQuery(messageResponse);
			query.setParameter(0, id);
			query.executeUpdate();
			query= session.createQuery(messageLeaving);
			query.setParameter(0, id);
			query.executeUpdate();
			query= session.createQuery(posts);
			query.setParameter(0, id);
			query.executeUpdate();
			query= session.createQuery(votedUser);
			query.setParameter(0, id);
			query.executeUpdate();
			query= session.createQuery(user);
			query.setParameter(0, id);
			query.executeUpdate();
			transaction.commit();
		return true;	
			
		}catch (Exception e) {
			e.printStackTrace();
			transaction.rollback();
			return false;
		} finally {
			session.close();	
		}
	}
	public Object findBySQL(String sql, Object[] condition,Class<?> clazz) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		Object result = null;
		try {
			SQLQuery query = session.createSQLQuery(sql);
			if (condition!=null && condition.length != 0)
				for (int i = 0; i < condition.length; i++)
					query.setParameter(i, condition[i]);
			
			result=query.setResultTransformer(Transformers.aliasToBean(clazz)).uniqueResult();
			tx.commit();
		} catch (Exception e) {
			tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();	
		}
		return result;
	}
	public List<Object> findListBySQL(String sql, Object[] condition,Class<?> clazz,Integer page,Integer size){
		Session session = sessionFactory.openSession();
		Transaction tx=session.beginTransaction();
		List<Object> list=null;
		try{
			SQLQuery query = session.createSQLQuery(sql);
			
			if (condition!=null && condition.length != 0)
				for (int i = 0; i < condition.length; i++)
				{
					query.setParameter(i, condition[i]);
				
			}
	
			query.setResultTransformer(Transformers.aliasToBean(clazz));
			if(page!=null && size!=null){
				query.setFirstResult((page - 1) * size);
				query.setMaxResults(size);
			}
			list=query.list();
			tx.commit();
		}catch(Exception e){
			e.printStackTrace();
			tx.rollback();
		}finally{
			session.close();	
		}
		return list;
		}

	public boolean save2(Object obj) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		boolean status = false;
		try {
			session.save(obj);
			tx.commit();
			status = true;
		} catch (Exception e) {
			e.printStackTrace();
			tx.rollback();
			throw new DaoException();
		} finally {
			session.close();	
		}
		return status;
	}
	public int updateBySQL(String sql,Object[] conditions){
		Session session = sessionFactory.openSession();
		Transaction tx=session.beginTransaction();
		int result=0;
		try{
			SQLQuery query=session.createSQLQuery(sql);
			if (conditions!=null && conditions.length != 0)
				for (int i = 0; i < conditions.length; i++)
					query.setParameter(i, conditions[i]);
			result=query.executeUpdate();
			tx.commit();
		}catch(Exception e){
			e.printStackTrace();
			tx.rollback();
		}finally{
			session.close();	
		}
		return result;
	}
	
		
}