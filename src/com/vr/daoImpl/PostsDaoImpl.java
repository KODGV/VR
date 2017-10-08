package com.vr.daoImpl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.PostsDao;
import com.vr.domain.Posts;
import com.vr.util.HibernateUtils;
@Repository
@Qualifier("postsDaoImpl")
public class PostsDaoImpl extends HibernateUtils implements PostsDao {
	public boolean createPosts(Posts posts) {
		return save(posts);
	}

	public boolean updatePosts(Posts posts) {
		return update(posts);
	}

	public boolean deletePosts(Posts posts) {
		return delete(posts);
	}

	public Posts getPostsById(Integer id) {
		return (Posts) findByHql("from Posts n where n.id=?", new Object[] { id });
	}

	public List<Object> getPostsByCondition(String option, String find) {
		
		String hql = "from Posts as n where n."+ option +" like '"+"%"+ find +"%"+"'";
		return findByHqlGetList(hql,new Object[] {  });
	}
    
	@Override
	public List<Object> getPostsByPage(int pageNo, int pageNum, String theme) {
		String hql;
		if(theme.equals("all"))
		{ 
			hql="from Posts as n order by id desc";
		}else if(theme.equals("good")){
			hql="from Posts as n where n.good=1 order by id desc";
		}else
		{
			hql = "from Posts as a where a.theme='"+theme+"'";
		    hql+=" order by id desc";
		}
	      return listpage(hql, pageNo,pageNum);
	}

	public Object getPostsNum(String theme) {
		String hql;
		if(theme != null && theme.equals("all")) 
		{
		hql = "select count(*) from Posts";
		return getSize(hql);
		}else if(theme!= null && theme.equals("good")){
			hql = "select count(*) from Posts as a where a.good=true";
			return getSize(hql);
		}else {
	
			hql = "select count(*) from Posts as a where a.theme='"+theme+"'";
			return getSize(hql);
		}
	}
	
	public Object getCurrentComment(Posts post) {
		String tag = post.getTag();
		String hql = "select count(*) from MessageLeaving as a where a.belong='" + tag + "'";
		return getSize(hql);
	}
	
}
