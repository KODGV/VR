package com.vr.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.config.PMConfig;
import com.vr.dao.UserDao;
import com.vr.domain.User;
import com.vr.service.UserService;
import com.vr.util.EncodeUtil;
import com.vr.util.Mail;
import com.vr.util.response.Code;
import com.vr.util.response.CommonResult;
import com.vr.util.response.Result;

@Service
@Qualifier("userServiceImpl")
public class UserServiceImpl implements UserService {
	@Autowired
	@Qualifier("userDaoImpl")
	private UserDao userDao;

	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	public boolean updateUser(User user) {
		return userDao.updateUser(user);
	}

	@Override
	public int register(User user, String context) {
		user.setActivated(0);
		user.setBanned(0);
		user.setType(0);
		//检查邮件名和用户名
		boolean isExistEmail=userDao.isExistEmail(user.getEmail());
		boolean isExistNickname=userDao.isExistNickname(user.getNickname());
		if(isExistEmail){
			return Code.OCCUPIED_EMAIL;
		}else if(isExistNickname){
			return Code.OCCUPIED_NICKNAME;
		}
		else{
			//user.setActivated(false);
			String pwd=user.getPassword();
			user.setPassword(EncodeUtil.string2MD5(pwd+PMConfig.SALT));
			boolean status=userDao.createUser(user);
			System.out.print("status="+status);
			User u=userDao.getUserByEmailAndPassword(user.getEmail(),user.getPassword());
			System.out.println("USER ID="+u.getId());
			if(!status){
				return Code.SYSTEM_ERROR;
			}else{
				try{
				Mail.sendMail("18102698934@sohu.com", "1a2s3d4f", "smtp.sohu.com", u.getEmail(),u.getId(),context);
				}catch (Exception e){
					System.out.print("error");
					return Code.SYSTEM_ERROR;
				}
				return Code.SUCCEED;
			}
		}
	}

	@Override
	public boolean login(User user) {
		String pwd=user.getPassword();
		user.setPassword(EncodeUtil.string2MD5(pwd+PMConfig.SALT));
		User u=userDao.getUserByEmailAndPassword(user.getEmail(), user.getPassword());
		//如果返回的u不为null，u没有被封，u被激活
		if(u==null){
			return false;
		}
		return u.getBanned()==0||u.getActivated()==1?true:false;
	}

	@Override
	public int updatePassword(User user, String newPassword) {
		user.setPassword(EncodeUtil.string2MD5(newPassword+PMConfig.SALT));
		return userDao.updateUser(user)==true?Code.SUCCEED:Code.SYSTEM_ERROR;
	}

	@Override
	public int updateNickName(User user, String newNickname) {
		user.setNickname(newNickname);
		return userDao.updateUser(user)==true?Code.SUCCEED:Code.SYSTEM_ERROR;
	}

	@Override
	public boolean activate(User user) {
		user.setActivated(1);
		return userDao.updateUser(user)==true?true:false;
	}

	@Override
	public User getUserById(Integer id) {
		return userDao.getUserById(id);
	}

	@Override
	public User getUserByEmailAndPassword(User user) {
		return userDao.getUserByEmailAndPassword(user.getEmail(), user.getPassword());
	}

	@Override
	public boolean banUser(int id) {
		// TODO Auto-generated method stub
		User user=userDao.getUserById(id);
		user.setBanned(1);
		return userDao.updateUser(user);
	}

	@Override
	public boolean deleteUser(int id) {
		// TODO Auto-generated method stub
		return userDao.deleteUser(id);
	}

	@Override
	public CommonResult getAllUsersByVagueName(String keyword) {
		// TODO Auto-generated method stub
		CommonResult result =new CommonResult(Result.SUCCESS);
		Map<String, Object> map = new HashMap<>();
		map.put("users", userDao.getAllUsersVague("nickname", keyword));
		result.setObject(map);
		return result;
	}

	@Override
	public CommonResult getAllUsersResult() {
		// TODO Auto-generated method stub
		CommonResult result =new CommonResult(Result.SUCCESS);
		Map<String, Object> map = new HashMap<>();
		List<Object>list=userDao.getAllUsers();
		List<User>user=new ArrayList<User>();
		for(Object o:list)
		{
			user.add((User)o);
		}
		System.out.println(user.size());
		map.put("users", user);
		result.setObject(map);
		return result;
	}

	@Override
	public boolean activeUserEmail(int id) {
		// TODO Auto-generated method stub
		User user=userDao.getUserById(id);
		user.setActivated(1);
		return userDao.updateUser(user);
		
	}

	@Override
	public boolean activateUser(int id) {
		// TODO Auto-generated method stub
		User user=userDao.getUserById(id);
		user.setBanned(0);
		return userDao.updateUser(user);
		
	}

	@Override
	public int registerByRoot(User user) {
		// TODO Auto-generated method stub
		user.setActivated(1);
		user.setBanned(0);
		user.setType(0);
		//检查邮件名和用户名
		boolean isExistEmail=userDao.isExistEmail(user.getEmail());
		boolean isExistNickname=userDao.isExistNickname(user.getNickname());
		if(isExistEmail){
			return Code.OCCUPIED_EMAIL;
		}else if(isExistNickname){
			return Code.OCCUPIED_NICKNAME;
		}
		else{
			//user.setActivated(false);
			String pwd=user.getPassword();
			user.setPassword(EncodeUtil.string2MD5(pwd+PMConfig.SALT));
			boolean status=userDao.createUser(user);
			System.out.print("status="+status);
			User u=userDao.getUserByEmailAndPassword(user.getEmail(),user.getPassword());
			System.out.println("USER ID="+u.getId());
			if(!status){
				return Code.SYSTEM_ERROR;
			}
				return Code.SUCCEED;
			}
		}
	
	
}
