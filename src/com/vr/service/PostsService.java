package com.vr.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

import com.vr.domain.Admin;
import com.vr.domain.Posts;
import com.vr.domain.User;

public interface PostsService {
	public boolean createPosts(Posts posts);

	public boolean deletePosts(Posts posts);

	public boolean updatePosts(Posts posts);

	public List<Posts> getPostsByCondition(String option, String find);
	
	public Posts getPostsById(Integer id);
	
	public List<Posts> getPostsByPage(int pageNo,int pageNum, String theme);
	
	public void addTotalComment(Posts posts);
	
	public Posts PostSave(User user, String title, String content, String theme);
	
	public Posts PostSave(Admin user, String title, String content, String theme);
	
	public Object getTotalPost(String theme);
	
	public void deletePostComment(Integer cid);
	}
