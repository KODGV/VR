package com.vr.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vr.dao.ThumbsupdownDao;
import com.vr.dao.VotedUserDao;
import com.vr.domain.Thumbsupdown;
import com.vr.domain.VotedUser;
import com.vr.service.MessageLeavingService;
import com.vr.service.ThumbsupdownService;
import com.vr.util.ContextUtil;
import com.vr.util.response.Data;
@Controller
public class ThumbsController {
	@Autowired
	@Qualifier("ThumbsupdownDaoImpl")
	private ThumbsupdownDao dao;
	@Autowired
	@Qualifier("thumbsupdownServiceImpl")
	private ThumbsupdownService thumbsupdownService;

@ResponseBody
@RequestMapping("/Thumbs/{uid}")
public Thumbsupdown getThumbs(@PathVariable String uid,@RequestBody Map<String, String> map)
{
	int userid=Integer.valueOf(uid);

	String name = map.get("belong");

	Thumbsupdown thumbsupdown=dao.getThumbsupdown(name);
	System.out.println("upvote");
	System.out.println(thumbsupdown.getUpvote());
	thumbsupdown.setState(thumbsupdownService.check(userid, name));

	return thumbsupdown;
}
@ResponseBody
@RequestMapping("/Thumbs/upvote/{uid}")
public void upvote(@PathVariable String uid,@RequestBody Map<String, String> map)
{
	
	String name = map.get("name");
	System.out.println("产品"+name);
	String upvote=map.get("value");
	int userid=Integer.valueOf(uid);
	thumbsupdownService.upvote(userid, name,Integer.parseInt(upvote));
}
@ResponseBody
@RequestMapping("/Thumbs/downvote/{uid}")
public void downvote(@PathVariable String uid,@RequestBody Map<String, String> map)
{

	String name = map.get("name");
	int userid=Integer.valueOf(uid);
	String downvote=map.get("value");
	thumbsupdownService.downvote(userid, name,Integer.parseInt(downvote));
}


}
