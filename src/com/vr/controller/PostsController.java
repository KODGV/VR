package com.vr.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.annotation.JsonView;
import com.vr.domain.Admin;
import com.vr.domain.MessageLeaving;
import com.vr.domain.MessageResponse;
import com.vr.domain.Posts;
import com.vr.domain.User;
import com.vr.domain.Usermessage;
import com.vr.service.AdminService;
import com.vr.service.MessageLeavingService;
import com.vr.service.MessageResponseService;
import com.vr.service.PostsService;
import com.vr.service.UserMessageServiece;
import com.vr.service.UserService;
import com.vr.util.ContextUtil;
import com.vr.util.FileOperation;
import com.vr.util.request.AnswerRequest;
import com.vr.view.MessageLeavingView;

@Controller
public class PostsController {
	@Autowired
	@Qualifier("postsServiceImpl")
	private PostsService PostsService;
	
	@Autowired
	@Qualifier("userServiceImpl")
	private UserService userService;
	
	@Autowired
	@Qualifier("adminServiceImpl")
	private AdminService adminService;

	@Autowired
	@Qualifier("messageLeavingServiceImpl")
	private MessageLeavingService messageLeavingService;
	
	@Autowired
	@Qualifier("messageResponseServiceImpl")
	private MessageResponseService messageResponseService;
	@Autowired
	@Qualifier("userMessageServiceImpl")
	private UserMessageServiece userMessageService;
	
	public PostsService getPostsService() {
		return PostsService;
	}

	public void setPostsService(PostsService PostsService) {
		this.PostsService = PostsService;
	}

	//显示帖子内容
	@ResponseBody
	@RequestMapping(value = "/posts/{nid}")
	public Posts getposts(@PathVariable Integer nid) {
		System.out.print(nid);
		Posts posts = PostsService.getPostsById(nid);
		return posts;
	}

	//展示帖子列表
	@ResponseBody
	@RequestMapping(value = "/bbs_list/{page}")
	public List<Posts> getPostsByPage(@PathVariable Integer page,HttpServletRequest request) {
		System.out.print(page);
	
		String theme= request.getParameter("theme");
		System.out.println("theme " + theme);
		return PostsService.getPostsByPage(page, 10, theme);
	}

	//获取目前的总帖子数
	@ResponseBody
	@RequestMapping(value = "/total_post")
	public Object getTotalPosts(HttpServletRequest request) {
		
		String theme= request.getParameter("theme");
		return PostsService.getTotalPost(theme);
	}
	
	//更新总评论数
	@ResponseBody
	@RequestMapping(value = "/post_comment/{nid}")
	public void updateTotalComment(@PathVariable Integer nid) {
		System.out.print("postID :"+nid);
		Posts posts = PostsService.getPostsById(nid);
		PostsService.addTotalComment(posts);
	}

	//发帖
	@ResponseBody
	@RequestMapping("/post_put/{uid}")
	public void SavePost(@PathVariable String uid, @RequestBody Map<String, String> map,HttpServletRequest request) {
		int userid = Integer.parseInt(uid);

		String title = map.get("title");
		String content = map.get("content");
		String path = request.getSession().getServletContext().getRealPath("/static/img/content/");
		String url = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
		+ request.getContextPath() + "/static/img/content/";
		content=FileOperation.base64img(content, path,url);
		String theme = map.get("theme");
		User user = userService.getUserById(userid);
		Posts posts= PostsService.PostSave(user, title, content, theme);
		
		
	}
	
	//管理员后台发帖
	@ResponseBody
	@RequestMapping("/adminPostAdd")
	public void AdminPostAdd(@RequestBody Map<String, String> map,HttpServletRequest request) {
		String title = map.get("title");
		String content = map.get("contents");
		String path = request.getSession().getServletContext().getRealPath("/static/img/content/");
		String url = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
		+ request.getContextPath() + "/static/img/content/";
		content=FileOperation.base64img(content, path,url);
		String theme = map.get("theme");
		String uid = map.get("AdminId");
		int userid = Integer.parseInt(uid);
		Admin user = adminService.getAdminById(userid);
		Posts posts= PostsService.PostSave(user, title, content, theme);
		if(posts!=null)
			return ;
		else
			return ;
	}
	
	//管理员后台删帖
	@ResponseBody
	@RequestMapping("/adminPostDelete")
	public void AdminPostAdd(@RequestBody List<Integer>pid) {
		int size = pid.size();
		System.out.print(size);
		for(int i = 0;i < size ;i++ ) {
		int id = pid.get(i);
		Posts posts = PostsService.getPostsById(id);
		//我告诉你这里前端传过来的值有问题！
		PostsService.deletePostComment(id);
		User user=(User)userService.getUserDao().getUserByNickname(posts.getPosterName());
		Date date=new Date();
		String sdate=(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")).format(date);  
		Usermessage usermessage=new Usermessage("Post", "删除",posts.getTitle(), sdate, user, 0,posts.getId());
		userMessageService.getUserMessageDao().CreateMessage(usermessage);
	    boolean isDelete = PostsService.deletePosts(posts);
		}

	}
	//管理员后台删除评论
		@ResponseBody
		@RequestMapping(value = "/adminPostCommentDelete")
		public void AdminPostsCommentDelete(@RequestBody List<Integer> pid) {
			int size = pid.size();
			System.out.print(size);
			for(int i = 0;i < size ;i++ ) {
			int id = pid.get(i);
			MessageLeaving message = messageLeavingService.getMessageLeavingById(id);
		
		    boolean isDelete = messageLeavingService.deleteMessageLeaving(message);
			}
		
		}
		//管理员后台删除评论回复
		@ResponseBody
		@RequestMapping(value = "/adminPostResponseDelete")
		public void AdminPostsResponseDelete(@RequestBody List<Integer> pid) {
			int size = pid.size();
			System.out.print(size);
			for(int i = 0;i < size ;i++ ) {
			int id = pid.get(i);
			MessageResponse message = messageResponseService.getMessageResponseById(id);
		
		    boolean isDelete = messageResponseService.deleteMessageResponse(message);
			}
		
		}
	//管理员后台更新帖子
	@ResponseBody
	@RequestMapping("/adminPostUpdate/{pid}")//post id
	public void AdminPostUpdate(@PathVariable String pid, @RequestBody Map<String, String> map,HttpServletRequest request) {
		int id = Integer.parseInt(pid);
		System.out.print("id" + id);
		String title = map.get("title");//前端传给后台的变量名字
		String contents = map.get("contents");
		String path = request.getSession().getServletContext().getRealPath("/static/img/content/");
		String url = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
		+ request.getContextPath() + "/static/img/content/";
		contents=FileOperation.base64img(contents, path,url);
		String theme = map.get("theme");
		Posts posts = PostsService.getPostsById(id);
		if(title.length()!=0)
		posts.setTitle(title);
		if(contents.length()!=0)
		posts.setContents(contents);
		if(theme.length()!=0)
		posts.setTheme(theme);
		if(PostsService.updatePosts(posts))
			return ;
		else
			return ;
	}
	
	//管理员后台更新帖子评论
	@ResponseBody
	@RequestMapping("/adminPostCommentUpdate/{cid}")//comment id
	public void AdminPostCommentUpdate(@PathVariable String cid, @RequestBody Map<String, String> map) {
		int id = Integer.parseInt(cid);
		System.out.print("id" + id);
		String message = map.get("message");//前端传给后台的变量名字
		System.out.print("message" + message);
		MessageLeaving messageLeaving = messageLeavingService.getMessageLeavingById(id);
		if(message.length()!=0)
			messageLeaving.setMessage(message);
		
	
		messageLeavingService.updateMessageLeaving(messageLeaving);
	}
	
	//管理员后台更新帖子回复评论
	@ResponseBody
	@RequestMapping("/adminPostResponseUpdate/{cid}")//response id
	public void AdminPostResponseUpdate(@PathVariable String cid, @RequestBody Map<String, String> map) {
		int id = Integer.parseInt(cid);
		String response = map.get("response");//前端传给后台的变量名字
		System.out.print("responsee" + response);
		MessageResponse messageResponse = messageResponseService.getMessageResponseById(id);
		if(response.length()!=0)
			messageResponse.setMessageResponse(response);
		
	
		messageResponseService.updateMessageResponse(messageResponse);
	}
	
	//管理员后台展示帖子列表
	@ResponseBody
	@RequestMapping(value = "/adminPostSList")
	public List<Posts> getPostsByAdmin() {
       Object num1 = PostsService.getTotalPost("all");
        int num = Integer.parseInt(String.valueOf(num1));
        System.out.print("num" + num);
		return PostsService.getPostsByPage(1, num, "all");
	}
	
	//管理员后台展示评论
	@ResponseBody
	@RequestMapping(value = "/adminPostCommentList/{tid}")
	@JsonView(MessageLeavingView.Tag.class)
	public List<MessageLeaving> getPostCommentByAdmin(@PathVariable String tid) {
		int id = Integer.valueOf(tid);
		Posts post = PostsService.getPostsById(id);
		String tag = post.getTag();
		List<MessageLeaving> messageLeavings= messageLeavingService.getMessageLeavings("hot",1 ,tag);
		for (MessageLeaving leaving : messageLeavings) {

			leaving.setState(0);
			System.out.println(leaving);
		}
         return messageLeavings;
	}
	
	//管理员后台展示评论回复
	@ResponseBody
	@RequestMapping(value = "/adminPostResponseList/{cid}")
	@JsonView(MessageLeavingView.Tag.class)
	public List<MessageResponse> getPostResponseByAdmin(@PathVariable String cid) {
		List<MessageResponse> messageResponse = messageResponseService.getMessageResponseListById("id", 1, "MessageResponse", cid);
		
         return messageResponse;
	}
	
	//管理员设置精华帖
	@ResponseBody
	@RequestMapping(value = "/adminPostSetGood/{cid}")
	public void AdminPostsSetGood(@PathVariable String cid, @RequestBody Map<String, String> map) {
		int id = Integer.parseInt(cid);
		System.out.print("id" + id);
		String good2 = map.get("good");
		int good = Integer.parseInt(good2);
		Posts posts = PostsService.getPostsById(id);
		if(good == 1 && posts.getGood() == false)
		posts.setGood(true);
		if(good == 0 && posts.getGood() == true)
			posts.setGood(false);
		PostsService.updatePosts(posts);
		}

	//管理员查找帖子
	@ResponseBody
	@RequestMapping(value = "/adminPostFind/{option}")
	public List<Posts> AdminPostFind(@PathVariable String option ) {
		HttpServletRequest request = ContextUtil.getRequest();

		System.out.print("option" + option);
		String contentFind = request.getParameter("find");
		System.out.print("find" + contentFind);
	    return PostsService.getPostsByCondition(option, contentFind);
		}
	
	//点赞
	@ResponseBody
	@RequestMapping(value = "posts/upvote/{nid}")
	public String upvotePosts(@PathVariable Integer nid, @RequestBody Map<String, String> map) {
		try {
			String value2 = map.get("value");
			int value = Integer.parseInt(value2);
			Posts posts = PostsService.getPostsById(nid);
			Integer upvote = posts.getUpvote();
			System.out.print("upvote" + upvote);
			if (upvote == null) {
				upvote = 1;
			} else {
				upvote += value;
			}
			posts.setUpvote(upvote);
			PostsService.updatePosts(posts);
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
			return "fail";
		}
    }
	
	//踩
	@ResponseBody
	@RequestMapping(value="posts/downvote/{nid}")
	public String downvotePosts(@PathVariable Integer nid,  @RequestBody Map<String, String> map){
		try {
			Posts posts = PostsService.getPostsById(nid);
			String value2 = map.get("value");
			int value = Integer.parseInt(value2);
			Integer downvote = posts.getDownvote();
			System.out.print("down" + downvote);
			if (downvote == null) {
				downvote = 1;
			} else {
				downvote += value;
			}
			posts.setDownvote(downvote);
			PostsService.updatePosts(posts);
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
			return "fail";
		}
	}
}
