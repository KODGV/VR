package com.vr.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Service;

import com.vr.dao.EvaluationDao;
import com.vr.domain.CommentView;
import com.vr.domain.Evaluation;
import com.vr.domain.EvaluationChildComment;
import com.vr.domain.EvaluationParentComment;
import com.vr.domain.EvaluationText;
import com.vr.domain.EvaluationView;
import com.vr.domain.User;
import com.vr.domain.enums.EvaluationViewType;
import com.vr.service.EvaluationService;
import com.vr.util.FileOperation;
import com.vr.util.response.CommonResult;
import com.vr.util.response.Page;
import com.vr.util.response.Result;
import com.vr.vo.EvaluationChildrenVO;
import com.vr.vo.EvaluationParentCommentVO;
import com.vr.vo.EvaluationVO;

@Service("evaluationService")
public class EvaluationServiceImpl implements EvaluationService {
	@Resource
	private EvaluationDao evaluationDao;

	@Override
	public CommonResult addEvaluation(Evaluation evaluation,String path,String url) {
		/*
		 * 图片转码
		 */
		EvaluationText evaluationText=evaluation.getEvaluationText();
		System.out.println("dsdsdsdsdwrwr"+evaluationText);
		String k=FileOperation.base64img(evaluationText.getEvaluationBody(), path,url);
		System.out.println("dsdsd"+k);
		evaluation.getEvaluationText().setEvaluationBody(k);
		evaluationDao.addEvaluation(evaluation);
		CommonResult result=new CommonResult(Result.SUCCESS);
		result.setObject(evaluation);
		return result;
	}

	@Override
	public CommonResult addEvaluationView(EvaluationView evaluationView) {
		evaluationDao.removeEvaluationView(evaluationView.getEvaluationId(), evaluationView.getUserId());
		evaluationDao.addEvaluationView(evaluationView);
		return new CommonResult(Result.SUCCESS);
	}

	@Override
	public CommonResult removeEvaluationView(EvaluationView evaluationView) {
		if (evaluationDao.removeEvaluationView(evaluationView.getEvaluationId(), evaluationView.getUserId())) {
			
			return new CommonResult(Result.SUCCESS);
		} else {
			return new CommonResult(Result.PARAM_ERROR);
		}
	}

	@Override
	public CommonResult addParentComment(EvaluationParentComment comment,String userName) {
		evaluationDao.addParentComment(comment);
		CommonResult result = new CommonResult(Result.SUCCESS);
		EvaluationParentCommentVO vo=new EvaluationParentCommentVO(comment,userName);
		result.setObject(vo);
		return result;
	}

	@Override
	public CommonResult addChildComment(EvaluationChildComment comment,String userName) {
		evaluationDao.addChildComment(comment);
		CommonResult result = new CommonResult(Result.SUCCESS);
		EvaluationChildrenVO vo=new EvaluationChildrenVO(comment,userName);
		result.setObject(vo);
		return result;
	}

	@Override
	public CommonResult deleteChildComment(Integer commentId, Integer userId) {
		CommonResult result = null;
		if (evaluationDao.deleteChildComment(commentId, userId)) {
			result = new CommonResult(Result.SUCCESS);
		} else {
			result = new CommonResult(Result.PARAM_ERROR);
		}
		return result;
	}

	@Override
	public CommonResult deleteParentComment(Integer commentId, Integer userId) {
		CommonResult result = null;
		if (evaluationDao.deleteParentComment(commentId, userId)) {
			result = new CommonResult(Result.SUCCESS);
		} else {
			result = new CommonResult(Result.PARAM_ERROR);
		}
		return result;
	}

	@Override
	public CommonResult getEvaluations(Integer userId,Integer page, Integer size,User user) {
		CommonResult result = new CommonResult(Result.SUCCESS);
		List<EvaluationVO> evaluationVOs=null;
		if(user!=null)
	{
			int userid=user.getId();
			evaluationVOs = evaluationDao.getEvaluationVOs(page, size,userid);
	}
		else
		{
		  evaluationVOs = evaluationDao.getEvaluationVOs(page, size,-1);
		}
		for (EvaluationVO evaluation : evaluationVOs) {
			// 获取点赞数
			List<Object> objects = evaluationDao.getUpAndDowns(evaluation.getEvaluationId());
			for (Object object : objects) {
				Object[] temp = (Object[]) object;
				if ((int) temp[0] == EvaluationViewType.UP.getType()) {
					evaluation.setUps(((Long) temp[1]).intValue());
				} else {
					evaluation.setDowns(((Long) temp[1]).intValue());
				}
			}
			// 获取评论数
			int comments = ((Long) evaluationDao.getComments(evaluation.getEvaluationId())).intValue();
			evaluation.setComments(comments);
		}
		//int totalCount = evaluationVOs.size();
		int totalCount=((Long)evaluationDao.getEvaluationCount()).intValue();
		Page p = new Page(page, totalCount / size + (totalCount % size == 0 ? 0 : 1));
//		System.out.println(EvaluationVO);
		Map<String, Object> map = new HashMap<>();

		map.put("list", evaluationVOs);
		map.put("page", p);
		result.setObject(map);
		return result;
	}

	@Override
	public CommonResult addCommentView(CommentView commentView) {
		evaluationDao.removeCommentView(commentView.getCommentId(), commentView.getUserId());
		evaluationDao.addEvaluationView(commentView);
		
		int type=commentView.getType();
		if(type==EvaluationViewType.UP.getType()){
			//更新点赞数
			evaluationDao.updateCommentsUp(commentView.getCommentId(),1);
		}
		CommonResult result=new CommonResult(Result.SUCCESS);
//		result.setObject(commentView);
		return result;
	}

	@Override
	public CommonResult removeEvaluationView(CommentView commentView) {
		if (evaluationDao.removeCommentView(commentView.getCommentId(), commentView.getUserId())) {
			if(commentView.getType()==EvaluationViewType.UP.getType()){
				evaluationDao.updateCommentsUp(commentView.getCommentId(), -1);
			}
			return new CommonResult(Result.SUCCESS);
		} else {
			return new CommonResult(Result.PARAM_ERROR);
		}
	}

	@Override
	public CommonResult getEvaluation(Integer evaluationId, Integer userId) {
		CommonResult result = new CommonResult(Result.SUCCESS);
		EvaluationVO evaluationVO = (EvaluationVO)evaluationDao.getEvaluation(evaluationId);
		if(evaluationVO==null){
			return new CommonResult(Result.PARAM_ERROR);
		}
		// 获取点赞数
		List<Object> objects = evaluationDao.getUpAndDowns(evaluationVO.getEvaluationId());
		for (Object object : objects) {
			Object[] temp = (Object[]) object;
			if ((int) temp[0] == EvaluationViewType.UP.getType()) {
				evaluationVO.setUps(((Long) temp[1]).intValue());
			} else {
				evaluationVO.setDowns(((Long) temp[1]).intValue());
			}
		}
		// 获取评论数
		int comments = ((Long) evaluationDao.getComments(evaluationVO.getEvaluationId())).intValue();
		evaluationVO.setComments(comments);
		//用户是否点过赞
		if(userId!=null){
			int view=evaluationDao.getEvaluationViewByUId(evaluationId,userId);
			evaluationVO.setView(view);
		}else{
			evaluationVO.setView(EvaluationViewType.NONE.getType());
		}
		Map<String, Object> map = new HashMap<>();
		map.put("evaluation", evaluationVO);
		result.setObject(map);
		return result;
	}

	@Override
	public CommonResult getComments(Integer evaluationId, Integer userId,Integer page,Integer size,Integer orderType) {
		List<EvaluationParentCommentVO> comments=evaluationDao.getCommentList(evaluationId,page,size,orderType);
//		List<EvaluationParentComment> comments=new ArrayList<>();
//		for(Object object:objects){
//			comments.add((EvaluationParentComment)object);
//		}
		for(EvaluationParentCommentVO vo:comments){
			if(userId==null){
				vo.setView(EvaluationViewType.NONE.getType());
			}else{
				int view=evaluationDao.getEvaluationCommentViewByUId(vo.getId(),userId);
				vo.setView(view);
			}
		}
		
		Integer count=evaluationDao.getCommentCount(evaluationId);
		CommonResult result=new CommonResult(Result.SUCCESS);
		Map<String, Object> map=new HashMap<>();
		map.put("result", comments);
		map.put("currentPage", page);
		map.put("totalCount", count);
		result.setObject(map);
		return result;
	}

	@Override
	public CommonResult deleteEvaluation(Integer evaluationId, Integer userId) {
		if(evaluationDao.deleteEvaluation(evaluationId,userId)==1){
			return new CommonResult(Result.SUCCESS);
		}else{
			return new CommonResult(Result.PARAM_ERROR);
		}
	}

	@Override
	public CommonResult updateEvaluation(Evaluation evaluation) {
		if(evaluationDao.updateEvaluation(evaluation)){
			return new CommonResult(Result.SUCCESS);
		}else{
			return new CommonResult(Result.PARAM_ERROR);
		}
	}

	@Override
	public CommonResult deleteEvaluation(Integer evaluationId) {
		if(evaluationDao.deleteEvaluation(evaluationId)==1){
			return new CommonResult(Result.SUCCESS);
		}else{
			return new CommonResult(Result.PARAM_ERROR);
		}
	}

}
