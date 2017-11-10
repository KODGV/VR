package com.vr.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.annotation.JsonView;
import com.vr.domain.User;
import com.vr.domain.Usermessage;
import com.vr.service.UserMessageServiece;
import com.vr.service.UserService;
import com.vr.util.response.Code;
import com.vr.util.response.CommonResult;
import com.vr.util.response.ResponseData;
import com.vr.util.response.Result;
import com.vr.view.UserMessageView;

@Controller
public class UserMessageController {
	@Autowired
	@Qualifier("userMessageServiceImpl")
	private UserMessageServiece userService;

	@ResponseBody
	@RequestMapping("/user/getMsg")
	public Map getCount(HttpSession session) {
		User user = (User) session.getAttribute("user");
		Map<String, Object> map1 = new HashMap();
		int userid = user.getId();
		System.out.println(userid);
		map1.put("count", userService.getUserMessageDao().CountMessage(userid));
		return map1;
	}

	@ResponseBody
	@RequestMapping("/msg_list/{page}")
	@JsonView(UserMessageView.Tag.class)
	public List<Object> getMessages(@PathVariable Integer page, @RequestParam("readflag") String readType,
			HttpSession session) {
		User user = (User) session.getAttribute("user");
		System.out.println(user.getId());
		if (readType.equals("oldmsg")) {
			return userService.getUserMessageDao().getReadMessage(page, user.getId());
		} else if (readType.equals("newmsg"))
			return userService.getUserMessageDao().getUnReadMessage(page, user.getId());
		return null;
	}

	@ResponseBody
	@RequestMapping("/total_msg")
	public Map getMessageCount(@RequestParam("readflag") String readType, HttpSession session) {
		User user = (User) session.getAttribute("user");
		System.out.println(user.getId());
		Map<String, Object> map = new HashMap();
		int pagetotal = 0;
		if (readType.equals("oldmsg"))
			map.put("pagetotal", userService.getUserMessageDao().CountReadMessage(user.getId()));
		else if (readType.equals("newmsg"))
			map.put("pagetotal", userService.getUserMessageDao().CountUnReadMessage(user.getId()));
		return map;
	}

	@ResponseBody
	@RequestMapping("/changeMsgType")
	public ResponseData readMessage(@RequestParam("msgid") String msgid) {
		if (userService.SReadMessage(Integer.parseInt(msgid)))
			return new ResponseData(Code.SUCCEED);
		else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}

}
