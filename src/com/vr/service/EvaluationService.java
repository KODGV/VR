package com.vr.service;

import javax.servlet.http.HttpServletRequest;

import com.vr.domain.CommentView;
import com.vr.domain.Evaluation;
import com.vr.domain.EvaluationChildComment;
import com.vr.domain.EvaluationParentComment;
import com.vr.domain.EvaluationView;
import com.vr.domain.User;
import com.vr.util.response.CommonResult;

public interface EvaluationService {

	CommonResult addEvaluation(Evaluation evaluation,HttpServletRequest request);

	CommonResult addEvaluationView(EvaluationView evaluationView);

	CommonResult removeEvaluationView(EvaluationView evaluationView);

	CommonResult addParentComment(EvaluationParentComment comment,String userName);

	CommonResult addChildComment(EvaluationChildComment comment,String userName);

	CommonResult deleteChildComment(Integer commentId, Integer id);

	CommonResult deleteParentComment(Integer commentId, Integer id);

	CommonResult getEvaluations(Integer userId,Integer page, Integer size,User user);

	CommonResult addCommentView(CommentView commentView);

	CommonResult removeEvaluationView(CommentView commentView);

	CommonResult getEvaluation(Integer evaluationId, Integer userId);

	CommonResult getComments(Integer evaluationId, Integer userId,Integer page,Integer size,Integer orderType);

	CommonResult deleteEvaluation(Integer evaluationId, Integer id);

	CommonResult updateEvaluation(Evaluation evaluation);

	CommonResult deleteEvaluation(Integer evaluationId);

}
