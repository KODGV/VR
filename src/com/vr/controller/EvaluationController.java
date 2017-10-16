package com.vr.controller;

import java.io.UnsupportedEncodingException;
import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.filefilter.FalseFileFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.NativeWebRequest;

import com.rabbitmq.client.AMQP.Exchange.Delete;
import com.sun.net.httpserver.HttpsServer;
import com.vr.domain.Admin;
import com.vr.domain.CommentView;
import com.vr.domain.Evaluation;
import com.vr.domain.EvaluationChildComment;
import com.vr.domain.EvaluationParentComment;
import com.vr.domain.EvaluationView;
import com.vr.domain.User;
import com.vr.domain.enums.EvaluationViewType;
import com.vr.service.EvaluationService;
import com.vr.util.DecodeUtil;
import com.vr.util.response.CommonResult;
import com.vr.util.response.Result;
import com.vr.vo.OrderType;

@Controller
public class EvaluationController {
	
	private static final Logger LOGGER=LoggerFactory.getLogger(EvaluationController.class);
	
	@Resource
	private EvaluationService evaluationService;
	
	/**
	 * 增加一篇测评
	 * @param evaluation
	 * @return
	 */
	@RequestMapping(value="/evaluations/evaluation",method=RequestMethod.POST)
	@ResponseBody
	public CommonResult addEvaluation(HttpSession session,@RequestBody Evaluation evaluation ,HttpServletRequest request){
		User user=(User)session.getAttribute("user");
		if(user==null){
			return new CommonResult(Result.USER_NOT_LOGIN);
		}
		evaluation.setAuthorId(user.getId());
		evaluation.setAuthorId(user.getId());
		LOGGER.info("[opt:addEvaluation...evaluation:{}]",evaluation);
		CommonResult result=null;
		//获取用户session
		Date date=new Date();
		evaluation.setUpdateTime(date);
		evaluation.setPostTime(date);
		try{
			result=evaluationService.addEvaluation(evaluation,request);
		}catch(Exception e){
			e.printStackTrace();
			LOGGER.error("[opt:addEvaluation...evaluation:{},error:{}]",evaluation,e);
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	
	/**
	 * 用户删除一篇测评
	 * @param evaluationId
	 * @param session
	 * @return
	 */
	@RequestMapping(value="/evaluations/evaluation/{evaluationId}",method=RequestMethod.DELETE)
	@ResponseBody
	public CommonResult deleteEvaluation(@PathVariable("evaluationId")Integer evaluationId,
			HttpSession session){
		User user=(User)session.getAttribute("user");
		if(user==null){
			return new CommonResult(Result.USER_NOT_LOGIN);
		}
		CommonResult result=null;
		try{
			result=evaluationService.deleteEvaluation(evaluationId,user.getId());
		}catch(Exception e){
			e.printStackTrace();
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	
	
	@RequestMapping(value="/evaluations/evaluation",method=RequestMethod.PUT)
	@ResponseBody
	public CommonResult updateEvaluation(@RequestBody Evaluation evaluation,
			HttpSession session){
		User user=(User)session.getAttribute("user");
		if(user==null){
			return new CommonResult(Result.USER_NOT_LOGIN);
		}
		if(user.getId()!=evaluation.getAuthorId()){
			return new CommonResult(Result.NO_AUTHORIZATION);
		}
		CommonResult result=null;
		//获取用户session
		Date date=new Date();
		evaluation.setUpdateTime(date);
		try{
			result=evaluationService.updateEvaluation(evaluation);
		}catch(Exception e){
			e.printStackTrace();
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	
	/**
	 * 用户发表对测评的看法(顶/踩)
	 * @param evaluationId
	 * @param type
	 * @return
	 */
	@RequestMapping(value="/evaluations/{evaluationId}/view",method=RequestMethod.POST)
	@ResponseBody
	public CommonResult addEvaluationView(HttpSession session,@PathVariable("evaluationId")Integer evaluationId,
			@RequestParam("type")int type){
		EvaluationViewType evaluationViewType=EvaluationViewType.getEvaluationViewType(type);
		if(evaluationViewType==null){
			return new CommonResult(Result.EVALUATION_VIEW_TYPE_NOT_FOUND);
		}
		User user=(User)session.getAttribute("user");
		if(user==null){
			return new CommonResult(Result.USER_NOT_LOGIN);
		}
		EvaluationView evaluationView=new EvaluationView(evaluationId,user.getId(),evaluationViewType.getType());
		LOGGER.info("[opt:addEvaluationView,evaluationView:{}]",evaluationView);
		CommonResult result=null;
		try{
			result=evaluationService.addEvaluationView(evaluationView);
		}catch(Exception e){
			e.printStackTrace();
			LOGGER.info("[opt:addEvaluationView,error:{}]",e);
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	
	/**
	 * 删除用户发表对测评的看法(顶/踩)
	 * @param evaluationId
	 * @param type
	 * @return
	 */
	@RequestMapping(value="/evaluations/{evaluationId}/view",method=RequestMethod.DELETE)
	@ResponseBody
	public CommonResult removeEvaluationView(HttpSession session,@PathVariable("evaluationId")Integer evaluationId,
			@RequestParam(value="type",required=false,defaultValue="0")int type){
		EvaluationViewType evaluationViewType=EvaluationViewType.getEvaluationViewType(type);
		if(evaluationViewType==null){
			return new CommonResult(Result.EVALUATION_VIEW_TYPE_NOT_FOUND);
		}
		User user=(User)session.getAttribute("user");
		if(user==null){
			return new CommonResult(Result.USER_NOT_LOGIN);
		}
		EvaluationView evaluationView=new EvaluationView(evaluationId,user.getId(),evaluationViewType.getType());
		LOGGER.info("[opt:removeEvaluationView,evaluationView:{}]",evaluationView);
		CommonResult result=null;
		try{
			result=evaluationService.removeEvaluationView(evaluationView);
		}catch(Exception e){
			e.printStackTrace();
			LOGGER.info("[opt:removeEvaluationView,error:{}]",e);
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	
	/**
	 * 为测评增加评论
	 * @param session
	 * @param comment
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	@RequestMapping(value="/evaluations/{evaluationId}/parentComment",method=RequestMethod.POST,produces = "application/json; charset=utf-8")
	@ResponseBody
	public CommonResult addParentComment(HttpSession session,
			@PathVariable("evaluationId")Integer evaluationId,
			@RequestParam("content")String content) throws UnsupportedEncodingException{
	

		User user=(User)session.getAttribute("user");
		if(user==null){
			return new CommonResult(Result.USER_NOT_LOGIN);
		}
		EvaluationParentComment comment=new EvaluationParentComment(evaluationId,user.getId(),content,new Date());
		LOGGER.info("[opt:addParentComment,comment:{}]",comment);
		CommonResult result=null;
		try{
			result=evaluationService.addParentComment(comment,user.getNickname());
		}catch(Exception e){
			e.printStackTrace();
			LOGGER.info("[opt:addParentComment,error:{}]",e);
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	
	/**
	 * 删除评论
	 * @param session
	 * @param comment
	 * @return
	 */
	@RequestMapping(value="/evaluations/comments/parentComment/{commentId}",method=RequestMethod.DELETE)
	@ResponseBody
	public CommonResult deleteParentComment(HttpSession session,
			@PathVariable("commentId")Integer commentId){
		
		User user=(User)session.getAttribute("user");
		if(user==null){
			return new CommonResult(Result.USER_NOT_LOGIN);
		}
		LOGGER.info("[opt:deleteParentComment,commentId:{},userId:{}]",commentId,user.getId());
		CommonResult result=null;
		try{
			result=evaluationService.deleteParentComment(commentId,user.getId());
		}catch(Exception e){
			e.printStackTrace();
			LOGGER.info("[opt:deleteParentComment,error:{}]",e);
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	
	/**
	 * 为测评增加子评论
	 * @param session
	 * @param comment
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	@RequestMapping(value="/evaluations/comments/{commentId}/childComment",method=RequestMethod.POST,produces = "application/json; charset=utf-8")
	@ResponseBody
	public CommonResult addChildComment(HttpSession session,
			@PathVariable("commentId")Integer commentId,
			@RequestParam("comment")String content) throws UnsupportedEncodingException{


		User user=(User)session.getAttribute("user");
		if(user==null){
			return new CommonResult(Result.USER_NOT_LOGIN);
		}
		EvaluationChildComment comment=new EvaluationChildComment(commentId,user.getId(),content,new Date());
		LOGGER.info("[opt:addChildComment,comment:{}]",comment);
		CommonResult result=null;
		try{
			result=evaluationService.addChildComment(comment,user.getNickname());
		}catch(Exception e){
			e.printStackTrace();
			LOGGER.info("[opt:addChildComment,error:{}]",e);
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	
	/**
	 * 删除子评论
	 * @param session
	 * @param comment
	 * @return
	 */
	@RequestMapping(value="/evaluations/comments/childComment/{commentId}",method=RequestMethod.DELETE)
	@ResponseBody
	public CommonResult deleteChildComment(HttpSession session,
			@PathVariable("commentId")Integer commentId){
		
		User user=(User)session.getAttribute("user");
		if(user==null){
			return new CommonResult(Result.USER_NOT_LOGIN);
		}
		LOGGER.info("[opt:deleteChildComment,commentId:{},userId:{}]",commentId,user.getId());
		CommonResult result=null;
		try{
			result=evaluationService.deleteChildComment(commentId,user.getId());
		}catch(Exception e){
			e.printStackTrace();
			LOGGER.info("[opt:deleteChildComment,error:{}]",e);
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	/**
	 * 获取所有用户文章详情
	 * @param session
	 * @param evaluationId
	 * @return
	 */
	@RequestMapping(value="/evaluations/list")
	@ResponseBody
	public CommonResult getEvaluations(@RequestParam(value="page",defaultValue="1")int page,
			@RequestParam(value="size",defaultValue="5")int size,
			HttpSession session){
		User user=(User)session.getAttribute("user");
		Integer userId=null;
		if(user!=null){
			userId=user.getId();
		}
		CommonResult result=null;
		try{
			result=evaluationService.getEvaluations(userId,page,size,null);
		}catch(Exception e){
			e.printStackTrace();
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	/**
	 * 获取当前用户文章详情
	 * @param session
	 * @param evaluationId
	 * @return
	 */
	@RequestMapping(value="/evaluations/mylist")
	@ResponseBody
	public CommonResult getmyEvaluations(@RequestParam(value="page",defaultValue="1")int page,
			@RequestParam(value="size",defaultValue="5")int size,
			HttpSession session){
		User user=(User)session.getAttribute("user");
		Integer userId=null;
		if(user!=null){
			userId=user.getId();
		}
		CommonResult result=null;
		try{
			result=evaluationService.getEvaluations(userId,page,size,user);
		}catch(Exception e){
			e.printStackTrace();
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	/**
	 * 获取文章详情
	 * @param session
	 * @param evaluationId
	 * @return
	 */
	@RequestMapping(value="/evaluations/{evaluationId}")
	@ResponseBody
	public CommonResult getEvaluation(HttpSession session,@PathVariable("evaluationId")Integer evaluationId){
		User user=(User)session.getAttribute("user");
		Admin admin=(Admin)session.getAttribute("admin");
		Integer userId=null;
		if(user!=null){
			userId=user.getId();
		}
		if(admin!=null){
			userId=admin.getId();
		}
		CommonResult result=null;
		try{
			result=evaluationService.getEvaluation(evaluationId,userId);
		}catch(Exception e){
			e.printStackTrace();
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	
	/**
	 * 用户发表对评论的看法(顶/踩)
	 * @param commentId要顶/踩的评论id
	 * @param type顶(0)/踩(1)
	 * @return
	 */
	@RequestMapping(value="/evaluations/comments/{commentId}/view",method=RequestMethod.POST)
	@ResponseBody
	public CommonResult addCommentView(HttpSession session,@PathVariable("commentId")Integer commentId,
			@RequestParam("type")int type){
		EvaluationViewType evaluationViewType=EvaluationViewType.getEvaluationViewType(type);
		if(evaluationViewType==null){
			return new CommonResult(Result.EVALUATION_VIEW_TYPE_NOT_FOUND);
		}
		User user=(User)session.getAttribute("user");
		if(user==null){
			return new CommonResult(Result.USER_NOT_LOGIN);
		}
		CommentView commentView=new CommentView(commentId,user.getId(),evaluationViewType.getType());
		LOGGER.info("[opt:addCommentView,commentView:{}]",commentView);
		CommonResult result=null;
		try{
			result=evaluationService.addCommentView(commentView);
		}catch(Exception e){
			e.printStackTrace();
			LOGGER.info("[opt:addCommentView,error:{}]",e);
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	
	/**
	 * 删除用户发表对评论的看法(顶/踩)
	 * @param evaluationId
	 * @param type
	 * @return
	 */
	@RequestMapping(value="/evaluations/comments/{commentId}/view",method=RequestMethod.DELETE)
	@ResponseBody
	public CommonResult removeCommentView(HttpSession session,@PathVariable("commentId")Integer commentId,
			@RequestParam(value="type",required=false,defaultValue="0")int type){
		EvaluationViewType evaluationViewType=EvaluationViewType.getEvaluationViewType(type);
		if(evaluationViewType==null){
			return new CommonResult(Result.EVALUATION_VIEW_TYPE_NOT_FOUND);
		}
		User user=(User)session.getAttribute("user");
		if(user==null){
			return new CommonResult(Result.USER_NOT_LOGIN);
		}
		CommentView commentView=new CommentView(commentId,user.getId(),evaluationViewType.getType());
		LOGGER.info("[opt:removeCommentView,commentView:{}]",commentView);
		CommonResult result=null;
		try{
			result=evaluationService.removeEvaluationView(commentView);
		}catch(Exception e){
			e.printStackTrace();
			LOGGER.info("[opt:removeCommentView,error:{}]",e);
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	
	/**
	 * 获取文章评论
	 * @param session
	 * @param evaluationId
	 * @return
	 */
	@RequestMapping(value="/evaluations/{evaluationId}/comments",method=RequestMethod.GET)
	@ResponseBody
	public CommonResult getComments(HttpSession session,
			@PathVariable("evaluationId")Integer evaluationId,
			@RequestParam(value="page",defaultValue="1")Integer page,
			@RequestParam(value="size",defaultValue="10")Integer size,
			@RequestParam(value="orderType",defaultValue="1")Integer orderType
			){
		if(OrderType.getOrderType(orderType)==null){
			return new CommonResult(Result.PARAM_ERROR);
		}
		User user=(User)session.getAttribute("user");
		Admin admin=(Admin)session.getAttribute("admin");
		Integer userId=null;
		if(user!=null){
			userId=user.getId();
		}
		if(admin!=null){
			userId=admin.getId();
		}
		CommonResult result=null;
		try{
			result=evaluationService.getComments(evaluationId,userId,page,size,orderType);
		}catch(Exception e){
			e.printStackTrace();
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
	/*
	 * 管理员界面
	 */
	/**
	 * 删除一篇测评
	 * @param evaluationId
	 * @param session
	 * @return
	 */
	@RequestMapping(value="/evaluations/evaluation/admin/{evaluationId}",method=RequestMethod.DELETE)
	@ResponseBody
	public CommonResult deleteEvaluations(@PathVariable("evaluationId")Integer evaluationId,
			HttpSession session){
		CommonResult result=null;
		try{
			result=evaluationService.deleteEvaluation(evaluationId);
		}catch(Exception e){
			e.printStackTrace();
			result=new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}
}
