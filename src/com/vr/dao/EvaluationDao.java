package com.vr.dao;

import java.util.List;

import com.vr.domain.CommentView;
import com.vr.domain.Evaluation;
import com.vr.domain.EvaluationChildComment;
import com.vr.domain.EvaluationParentComment;
import com.vr.domain.EvaluationView;
import com.vr.vo.EvaluationParentCommentVO;
import com.vr.vo.EvaluationVO;

public interface EvaluationDao {

	void addEvaluation(Evaluation evaluation);

	void addEvaluationView(EvaluationView evaluationView);

	boolean removeEvaluationView(Integer evaluationId, Integer userId);

	void addParentComment(EvaluationParentComment comment);

	void addChildComment(EvaluationChildComment comment);

	boolean deleteChildComment(Integer commentId, Integer userId);

	boolean deleteParentComment(Integer commentId, Integer userId);

	List<Evaluation> getEvaluations(int begin, int size);

	boolean removeCommentView(Integer commentId, Integer userId);

	void addEvaluationView(CommentView commentView);

	List<Object> getUpAndDowns(Integer evaluationId);

	Object getComments(Integer evaluationId);

	Object getEvaluationCount();

	Object getEvaluation(Integer evaluationId);

	List<EvaluationParentCommentVO> getCommentList(Integer evaluationId,Integer page,Integer size,Integer orderType);

	int getEvaluationViewByUId(Integer evaluationId, Integer userId);

	List<EvaluationVO> getEvaluationVOs(int page, int size,int userid);

	Integer getCommentCount(Integer evaluationId);

	void updateCommentsUp(Integer commentId,int number);

	int deleteEvaluation(Integer evaluationId, Integer userId);

	boolean updateEvaluation(Evaluation evaluation);

	int deleteEvaluation(Integer evaluationId);

	int getEvaluationCommentViewByUId(Integer id, Integer userId);

}
