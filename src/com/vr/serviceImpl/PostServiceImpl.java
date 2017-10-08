package com.vr.serviceImpl;

import java.io.BufferedReader;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.MessageDao;
import com.vr.dao.PostsDao;
import com.vr.domain.Admin;
import com.vr.domain.MessageLeaving;
import com.vr.domain.Posts;
import com.vr.domain.User;
import com.vr.service.PostsService;
import com.vr.util.*;
@Service
@Qualifier("postsServiceImpl")
public class PostServiceImpl implements PostsService{
	@Autowired
	@Qualifier("postsDaoImpl")
	private PostsDao postsDao;
	
	@Autowired
	@Qualifier("messageDaoImpl")
	private MessageDao messageDao;
	


	public boolean createPosts(Posts posts) {
		return postsDao.createPosts(posts);
	}

	public boolean deletePosts(Posts posts) {
		return postsDao.deletePosts(posts);
	}

	public boolean updatePosts(Posts posts) {
		return postsDao.updatePosts(posts);
	}
	
	public void deletePostComment(Integer cid) {
		
		String subHql = "from MessageLeaving as a where a.belong=" + cid;
		messageDao.deleteMessageByPostId(subHql);
		
	}
	
    public Posts getPostsById(Integer id){
    	return postsDao.getPostsById(id);
    }
    
    public List<Posts> getPostsByCondition(String option, String find){
    	if(option.equals("undefined") || find.equals(""))
    		return null;
    	List<Object> postsObj=postsDao.getPostsByCondition(option, find);
		List<Posts> posts=new ArrayList<Posts>();
		for(Object o:postsObj){
			posts.add((Posts)o);
			
		}
		for(Posts o:posts){
			int totalComments = Integer.parseInt(String.valueOf(postsDao.getCurrentComment(o)));;
			o.setTotalComments(totalComments);
			
		}
		return posts;
    }
	
	public List<Posts> getPostsByPage(int pageNo,int pageNum, String theme){
		List<Object> postsObj=postsDao.getPostsByPage(pageNo, pageNum, theme);
		List<Posts> posts=new ArrayList<Posts>();
		for(Object o:postsObj){
			posts.add((Posts)o);
			
		}
		for(Posts o:posts){
			int totalComments = Integer.parseInt(String.valueOf(postsDao.getCurrentComment(o)));;
			o.setTotalComments(totalComments);
			if(o.getTag().equals("Tnull"));
			{ o.setTag("T" +  String.valueOf(o.getId()));
			  updatePosts(o);
			}
		}
		return posts;
	}
	
	public void addTotalComment(Posts posts) {
		if(posts.getTotalComments()!= null)
		{
	  posts.setTotalComments(posts.getTotalComments() + 1);
		}
		else {
			posts.setTotalComments(0);
		}
	  updatePosts(posts);
	}
	
	public Posts PostSave(User user, String title, String content, String theme) {
		
		Posts posts=new Posts();
		posts.setTitle(title);
		posts.setContents(content);
		String date=ConvertUtil.DatetoString(new Date(), "yyyy-MM-dd HH:mm:ss");
		posts.setDate(date);
		posts.setPosterId(user.getId());
		posts.setPosterName(user.getNickname());
		posts.setTotalComments(0);
		posts.setTheme(theme);
		posts.setGood(false);
		posts.setUpvote(0);
		posts.setDownvote(0);
		posts.setTag("T" + String.valueOf(posts.getId()));
		postsDao.createPosts(posts);
		return posts;
	}
	
public Posts PostSave(Admin user, String title, String content, String theme) {
		
		Posts posts=new Posts();
		posts.setTitle(title);
		posts.setContents(content);
		String date=ConvertUtil.DatetoString(new Date(), "yyyy-MM-dd HH:mm:ss");
		posts.setDate(date);
		posts.setPosterId(user.getId());
		posts.setPosterName(user.getAdminname());
		posts.setTotalComments(0);
		posts.setTheme(theme);
		posts.setGood(false);
		posts.setUpvote(0);
		posts.setDownvote(0);
		posts.setTag("T" + String.valueOf(posts.getId()));
		postsDao.createPosts(posts);
		return posts;
	}
	
	public Object getTotalPost(String theme) {
		return postsDao.getPostsNum(theme);
	}
//	public void setEditorId(Posts posts,Integer eid){
//		posts.setEditorId(eid);
//		updateposts(posts);
//	}
//    
//	public void pushposts(Posts posts){
//		posts.setIsPush(1);
//		updateposts(posts);
//	}
		
}
