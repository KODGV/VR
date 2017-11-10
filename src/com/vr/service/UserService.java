package com.vr.service;

import java.util.List;

import com.vr.dao.UserDao;
import com.vr.domain.User;
import com.vr.util.response.CommonResult;

public interface UserService {
    public boolean updateUser(User user);
  	public int register(User user,String context);
  	public int registerByRoot(User user);
  	public boolean login(User user);
  	public int updatePassword(User user,String newPassword);
  	public int updateNickName(User user,String newNickname);
  	public boolean activate(User user);
  	public User getUserById(Integer id);
  	public User getUserByEmailAndPassword(User user);
  	public boolean banUser(int id);
  	public boolean activateUser(int id);
  	public boolean deleteUser(int id);
  	public CommonResult getAllUsersByVagueName(String keyword);
  	public CommonResult getAllUsersResult();
  	public boolean activeUserEmail(int id);
  	public UserDao getUserDao();
}
