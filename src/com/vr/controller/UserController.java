package com.vr.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vr.config.PMConfig;
import com.vr.dao.UserDao;
import com.vr.domain.User;
import com.vr.service.UserService;
import com.vr.util.EncodeUtil;
import com.vr.util.Mail;
import com.vr.util.request.LoginData;
import com.vr.util.request.NicknameUtil;
import com.vr.util.request.PasswordUtil;
import com.vr.util.response.Code;
import com.vr.util.response.CommonResult;
import com.vr.util.response.ResponseData;
import com.vr.util.response.Result;

@Controller
public class UserController {

	@Autowired
	@Qualifier("userServiceImpl")
	private UserService userService;
	@Autowired
	@Qualifier("userDaoImpl")
	private UserDao userDao;

	@ResponseBody
	@RequestMapping(value = "/user/login")
	public LoginData login(@RequestBody User user, HttpSession session) {
		boolean isLogin = userService.login(user);
		LoginData loginData = new LoginData();
		System.out.print(user.getCheckcode() == null);
		System.out.print(session.getAttribute("code"));
		if (!user.getCheckcode().equalsIgnoreCase((String) session.getAttribute("code"))) {// 如果验证码错误
			loginData.setCode(Code.WRONG_CHECKCODE);
		} else {
			if (isLogin) {// 如果用户名和密码正确
				User u = userService.getUserByEmailAndPassword(user);
				Integer type = u.getType();
				loginData.setType(type);
				if (u.getBanned() == 1) {// 如果被封
					loginData.setCode(Code.IS_BANED);
				} else if (u.getActivated() == 0) {
					loginData.setCode(Code.NOT_ACTIVATED);
				} else {

					loginData.setCode(Code.SUCCEED);
					loginData.setNickname(u.getNickname());
					loginData.setUserid(u.getId());
					session.setAttribute("user", u);
				}
			} else {// 如果用户名或密码错误
				loginData.setCode(Code.WRONG_EMAIL_OR_PASSWORD);
			}
		}
		return loginData;
	}

	@ResponseBody
	@RequestMapping("/user/register")
	public ResponseData register(@RequestBody User user, HttpSession session, HttpServletRequest request) {
		System.out.print("rrrr");
		if (!user.getCheckcode().equalsIgnoreCase((String) session.getAttribute("code"))) {
			return new ResponseData(Code.WRONG_CHECKCODE);
		}
		int status = userService.register(user,
				request.getServerName() + ":" + request.getServerPort() + request.getContextPath());
		return new ResponseData(status);
	}

	@ResponseBody
	@RequestMapping("/user/changePassword")
	public ResponseData changePassword(@RequestBody PasswordUtil pwdUtil, HttpSession session) {
		User u = (User) session.getAttribute("user");
		if (u == null) {
			return new ResponseData(Code.NOT_LOGGED);
		} else {
			if (EncodeUtil.string2MD5(pwdUtil.getOldPassword() + PMConfig.SALT).equals(u.getPassword())) {
				int status = userService.updatePassword(u, pwdUtil.getNewPassword());
				return new ResponseData(status);
			} else {
				return new ResponseData(Code.NOT_PERMISSION);
			}
		}
	}

	@ResponseBody
	@RequestMapping("/user/changeNickName")
	public ResponseData changeNickname(@RequestBody NicknameUtil nickName, HttpSession session) {
		User u = (User) session.getAttribute("user");
		if (u == null) {
			return new ResponseData(Code.NOT_LOGGED);
		} else {
			int status = userService.updateNickName(u, nickName.getNickName());
			return new ResponseData(status);
		}
	}

	@RequestMapping("/logoff")
	public void logoff(HttpSession session) {
		session.invalidate();
	}

	// @ResponseBody
	// @RequestMapping("/{uid}/{timestamp}/{encodedContent}")
	// public ResponseData activated(@PathVariable(value="uid") String
	// uid,@PathVariable(value="timestamp") String
	// timestamp,@PathVariable(value="encodedContent") String encodedContent){
	// System.out.print(uid);
	// //System.out.print(timestamp);
	// //System.out.print(encodedContent);
	// Long tstmp=Long.parseLong(timestamp);
	// long currentTime=System.currentTimeMillis();
	// User u=null;
	// u=userService.getUserById(Integer.parseInt(uid));
	// if(u==null){
	// return new ResponseData(Code.SYSTEM_ERROR);
	// }
	// if(u.getActivated()){
	// return new ResponseData(Code.HAS_BEEN_ACTIVATED);
	// }
	// if(currentTime-tstmp>60*60*1000*24){
	// try {
	// Mail.sendMail("reao123@163.com", "1a2s3d4f", "smtp.163.com",
	// u.getEmail(),u.getId());
	// } catch (Exception e) {
	// return new ResponseData(Code.SYSTEM_ERROR);
	// }
	// return new ResponseData(Code.ACTIVATE_TIME_OUT);
	// }else{
	// if(!EncodeUtil.string2MD5(uid+String.valueOf(timestamp)+PMConfig.SALT).equals(encodedContent)){
	// return new ResponseData(Code.ILLEGAL_ACTIVATE_LINK);
	// }else{
	// userService.activate(u);
	// return new ResponseData(Code.SUCCEED);
	// }
	// }
	// }
	@ResponseBody
	@RequestMapping("/activate")
	public ResponseData activate(@RequestParam String uid, @RequestParam String timestamp,
			@RequestParam String encodedContent, HttpServletRequest request) {
		System.out.print(uid);
		// System.out.print(timestamp);
		// System.out.print(encodedContent);
		Long tstmp = Long.parseLong(timestamp);
		long currentTime = System.currentTimeMillis();
		User u = null;
		u = userService.getUserById(Integer.parseInt(uid));
		if (u == null) {
			return new ResponseData(Code.SYSTEM_ERROR);
		}
		if (!EncodeUtil.string2MD5(uid + String.valueOf(timestamp) + PMConfig.SALT).equals(encodedContent)) {
			return new ResponseData(Code.ILLEGAL_ACTIVATE_LINK);
		}
		if (u.getActivated() == 1) {
			return new ResponseData(Code.HAS_BEEN_ACTIVATED);
		}

		if (currentTime - tstmp > 60 * 60 * 1000 * 24) {
			try {
				Mail.sendMail("18102698934@sohu.com", "1a2s3d4f", "smtp.sohu.com", u.getEmail(), u.getId(),
						request.getServerName() + ":" + request.getServerPort() + request.getContextPath());
			} catch (Exception e) {
				return new ResponseData(Code.SYSTEM_ERROR);
			}
			return new ResponseData(Code.ACTIVATE_TIME_OUT);
		} else {
			userService.activate(u);
			return new ResponseData(Code.SUCCEED);
		}
	}

	/*
	 * 管理员端
	 */
	/*
	 * 获取所有用户信息
	 */
	@RequestMapping("/admin/getAllUsers")
	@ResponseBody
	public CommonResult getAllUsers() {
		CommonResult result = null;
		try {
			result = userService.getAllUsersResult();
		} catch (Exception e) {
			e.printStackTrace();
			result = new CommonResult(Result.SYSTEM_EXCEPTION);
		}
	
		return result;
	}

	/*
	 * 禁用用户
	 */
	@RequestMapping("/admin/banUser/{uid}")
	@ResponseBody
	public ResponseData banUser(@PathVariable Integer uid) {
		if (userService.banUser(uid)) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}
	/*
	 * 激活用户
	 */
	@RequestMapping("/admin/activatedUser/{uid}")
	@ResponseBody
	public ResponseData activatedUser(@PathVariable Integer uid) {
		if (userService.activateUser(uid)) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}

	/*
	 * 删除用户
	 */
	@ResponseBody
	@RequestMapping("/admin/deleteUser/{uid}")
	public ResponseData deleteUser(@PathVariable Integer uid) {
		if (userService.deleteUser(uid)) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}

	/*
	 * 增加用户
	 */
	@ResponseBody
	@RequestMapping("/admin/addUser")
	public ResponseData addUser(@RequestBody User user, HttpSession session, HttpServletRequest request) {
		if (!user.getCheckcode().equalsIgnoreCase((String) session.getAttribute("code"))) {
			return new ResponseData(Code.WRONG_CHECKCODE);
		}
		int status = userService.register(user,
				request.getServerName() + ":" + request.getServerPort() + request.getContextPath());
		return new ResponseData(status);
	}


/*
 * 激活邮箱
 */
	@RequestMapping("/admin/activeUser/{uid}")
	@ResponseBody
	public ResponseData activeUser(@PathVariable Integer uid) {
		if (userService.activeUserEmail(uid)) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}

}
