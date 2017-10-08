package com.vr.daoImpl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.NewsDao;
import com.vr.domain.News;
import com.vr.util.HibernateUtils;
@Repository
@Qualifier("newsDaoImpl")
public class NewsDaoImpl extends HibernateUtils implements NewsDao {
	public boolean createNews(News news) {
		return save(news);
	}

	public boolean updateNews(News news) {
		return update(news);
	}

	public void deleteNews(Integer id) {
		deleteByHql("delete News n where n.id=?", id);
	}

	public News getNewsById(Integer id) {
		return (News) findByHql("from News n where n.id=?", new Object[] { id });
	}
	
	public Integer getNewsId() {
		return (Integer) findByHql("select max(n.id) from News n", new Object[] { });
	}

	/*public List<News> getRecent10News() {
		String hql = "from News as n order by n.id desc";
		
		Session session = getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		List<News> res = null;
		Query query = null;
		try {
			query = session.createQuery(hql);
			query.setMaxResults(10);
			res = query.list();
		} catch (Exception e) {
            e.printStackTrace();
		}finally{
			session.close();
		}
		
		return res;
	}*/
    
	@Override
	public List<Object> getNewsByPage(int pageNo, int pageNum, Integer type) {
		if(type == 0) {
			String hql="from News as n order by id desc";
			return listpage(hql, pageNo,pageNum);
		}
		if(type == 1) {
			String hql="from News as n where type = 1 order by id desc";
			return listpage(hql, pageNo,pageNum);
		}
		if(type == 2) {
			String hql="from News as n where type = 2 order by id desc";
			return listpage(hql, pageNo,pageNum);
		}
		if(type == 3) {
			String hql="from News as n where type = 3 order by id desc";
			return listpage(hql, pageNo,pageNum);
		}
		if(type == 4) {
			String hql="from News as n where type = 4 order by id desc";
			return listpage(hql, pageNo,pageNum);
		}
		if(type == 5) {
			String hql="from News as n where type = 5 order by id desc";
			return listpage(hql, pageNo,pageNum);
		}
		if(type == 6) {
			String hql="from News as n where type = 6 order by id desc";
			return listpage(hql, pageNo,pageNum);
		}
		else {
			return null;
		}
	}
}
