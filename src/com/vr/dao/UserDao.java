package com.vr.dao;

import java.util.List;

import com.vr.domain.User;

public interface UserDao {
      public boolean createUser(User user);
      public boolean deleteUser( int id);
      public boolean updateUser(User user);
      public User getUserByEmailAndPassword(String email,String password);
      public boolean isExistEmail(String email);
      public boolean isExistNickname(String nickname);
      public User getUserById(Integer id);
      public List<Object>getAllUsers();
      public List<Object>getAllUsersVague(String key,String keyword);
      public Object getUserByNickname(String nickname);
}
