package com.vr.dao;

import java.util.List;

import com.vr.domain.Posts;

public interface PostsDao {
      public boolean createPosts(Posts posts);
      public boolean deletePosts(Posts posts);
      public boolean updatePosts(Posts posts);
      public Posts getPostsById(Integer id);
      public List<Object> getPostsByPage(int pageNo, int pageNum, String theme);
      public Object getPostsNum(String theme);
      public Object getCurrentComment(Posts post);
      public List<Object> getPostsByCondition(String option, String find);
}
