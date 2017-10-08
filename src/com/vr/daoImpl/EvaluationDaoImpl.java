package com.vr.daoImpl;

import java.util.ArrayList;
import java.util.List;

import org.apache.xmlbeans.impl.xb.xsdschema.impl.AttributeImpl.UseImpl;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.vr.dao.EvaluationDao;
import com.vr.domain.CommentView;
import com.vr.domain.Evaluation;
import com.vr.domain.EvaluationChildComment;
import com.vr.domain.EvaluationParentComment;
import com.vr.domain.EvaluationView;
import com.vr.domain.enums.EvaluationViewType;
import com.vr.util.HibernateUtils;
import com.vr.vo.EvaluationChildrenVO;
import com.vr.vo.EvaluationParentCommentVO;
import com.vr.vo.EvaluationVO;
import com.vr.vo.OrderType;

@Repository("evaluationDao")
public class EvaluationDaoImpl extends HibernateUtils implements EvaluationDao {

	@Override
	public void addEvaluation(Evaluation evaluation) {
		save2(evaluation);
	}

	@Override
	public void addEvaluationView(EvaluationView evaluationView) {
		save2(evaluationView);
	}

	@Override
	public boolean removeEvaluationView(Integer evaluationId, Integer userId) {
		String hql = "delete from EvaluationView where evaluationId=? and userId=?";
		List<Object> conditions = new ArrayList<>();
		conditions.add(evaluationId);
		conditions.add(userId);
		return deleteByQuery(hql, conditions);
	}

	@Override
	public void addParentComment(EvaluationParentComment comment) {
		save2(comment);
		System.out.println(comment.getId());
	}

	@Override
	public void addChildComment(EvaluationChildComment comment) {
		save2(comment);
		System.out.println(comment.getId());
	}

	@Override
	public boolean deleteChildComment(Integer commentId, Integer userId) {
		String hql = "delete from EvaluationChildComment where id=? and userId=?";
		List<Object> conditions = new ArrayList<>();
		conditions.add(commentId);
		conditions.add(userId);
		return deleteByQuery(hql, conditions);
	}

	@Override
	public boolean deleteParentComment(Integer commentId, Integer userId) {
		String hql = "delete from EvaluationParentComment where id=? and userId=?";
		List<Object> conditions = new ArrayList<>();
		conditions.add(commentId);
		conditions.add(userId);
		return deleteByQuery(hql, conditions);
	}

	@Override
	public List<Evaluation> getEvaluations(int page, int size) {
		String hql = "from Evaluation";
		List<Evaluation> evaluations = new ArrayList<>();
		List<Object> list = listpage(hql, page, size);
		;
		for (Object object : list) {
			evaluations.add((Evaluation) object);
		}
		return evaluations;

	}

	@Override
	public boolean removeCommentView(Integer commentId, Integer userId) {
		String hql = "delete from CommentView where commentId=? and userId=?";
		List<Object> conditions = new ArrayList<>();
		conditions.add(commentId);
		conditions.add(userId);
		return deleteByQuery(hql, conditions);
	}

	@Override
	public void addEvaluationView(CommentView commentView) {
		save(commentView);
	}

	@Override
	public List<Object> getUpAndDowns(Integer evaluationId) {
		String hql = "select type,count(id) from EvaluationView where evaluationId=? group by type";
		List<Object> objects = findByHqlGetList(hql, new Object[] { evaluationId });
		return objects;
	}

	@Override
	public Object getComments(Integer evaluationId) {
		String hql = "select count(id) from EvaluationParentComment where evaluationId=?";
		Object object = findByHql(hql, new Object[] { evaluationId });
		return object;
	}

	@Override
	public Object getEvaluationCount() {
		String hql = "select count(id) from Evaluation";
		Object object = findByHql(hql, new Object[] {});
		return object;
	}

	@Override
	public Object getEvaluation(Integer evaluationId) {
		String sql = "select e.evaluation_id as evaluationId,e.title_pic as titlePic,e.author_id as authorId,e.evaluation_title as evaluationTitle,e.post_time as postTime,e.update_time as updateTime,"
				+ "u.nickname as authorName,et.evaluation_body as evaluationText"
				+ " from evaluation e inner join User u on e.author_id=u.id INNER JOIN evaluation_text et on e.evaluation_text_id=et.id where e.evaluation_id=?;";
		Object o = findBySQL(sql, new Object[] { evaluationId }, EvaluationVO.class);
		return o;
	}

	@Override
	public List<EvaluationParentCommentVO> getCommentList(Integer evaluationId, Integer page, Integer size,
			Integer orderType) {
		// String hql="from EvaluationParentComment where evaluationId=?";
		// return findByHqlGetList(hql, new Object[]{evaluationId});
		String sql = null;
		if (orderType == OrderType.TIME.getType()) {
			sql = "select epc.id as id,epc.evaluation_id as evaluationId,epc.user_id as userId,epc.comment as comment,epc.post_time as postTime,epc.ups as ups,u.nickname as userName"
					+ "  from evaluation_parent_comment epc inner join User u on epc.user_id=u.id where epc.evaluation_id=? order by epc.post_time desc";
		} else {
			sql = "select epc.id as id,epc.evaluation_id as evaluationId,epc.user_id as userId,epc.comment as comment,epc.post_time as postTime,epc.ups as ups,u.nickname as userName"
					+ "  from evaluation_parent_comment epc inner join User u on epc.user_id=u.id where epc.evaluation_id=? order by epc.ups desc";
		}
		List<Object> objects = findListBySQL(sql, new Object[] { evaluationId }, EvaluationParentCommentVO.class, page,
				size);
		List<EvaluationParentCommentVO> parents = new ArrayList<>();
		if (objects != null) {
			for (Object object : objects) {
				EvaluationParentCommentVO epVO = (EvaluationParentCommentVO) object;
				String sql2 = "select ecc.id as id,ecc.user_id as userId,ecc.comment as comment,ecc.post_time as postTime,u.nickname as userName"
						+ "  from evaluation_child_comment ecc inner join User u on ecc.user_id=u.id where ecc.comment_id=?";
				List<Object> childObjecs = findListBySQL(sql2, new Object[] { epVO.getId() },
						EvaluationChildrenVO.class, null, null);
				List<EvaluationChildrenVO> childs = new ArrayList<>();
				for (Object child : childObjecs) {
					childs.add((EvaluationChildrenVO) child);
				}
				epVO.setChildComments(childs);
				parents.add(epVO);
			}
		}
		return parents;

	}

	@Override
	public int getEvaluationViewByUId(Integer evaluationId, Integer userId) {
		String hql = "select type from EvaluationView where evaluationId=? and userId=?";
		Object type = findByHql(hql, new Object[] { evaluationId, userId });
		if (type == null) {
			return EvaluationViewType.NONE.getType();
		} else {
			return (int) type;
		}
	}

	@Override
	public List<EvaluationVO> getEvaluationVOs(int page, int size, int userId) {
		List<EvaluationVO> evaluationVOs = new ArrayList<>();
		if (userId == -1) {
			String sql = "select e.evaluation_id as evaluationId,e.title_pic as titlePic,e.author_id as authorId,e.evaluation_title as evaluationTitle,e.post_time as postTime,e.update_time as updateTime,"
					+ "u.nickname as authorName,et.evaluation_body as evaluationText"
					+ " from evaluation e inner join User u on e.author_id=u.id INNER JOIN evaluation_text et on e.evaluation_text_id=et.id order by e.post_time desc";
			List<Object> o = findListBySQL(sql, null, EvaluationVO.class, page, size);		
			for (Object object : o) {
				evaluationVOs.add((EvaluationVO) object);
			}
		}
		else
		{
			String sql = "select e.evaluation_id as evaluationId,e.title_pic as titlePic,e.author_id as authorId,e.evaluation_title as evaluationTitle,e.post_time as postTime,e.update_time as updateTime,"
					+ "u.nickname as authorName,et.evaluation_body as evaluationText"
					+ " from evaluation e inner join User u on e.author_id=u.id INNER JOIN evaluation_text et on e.evaluation_text_id=et.id where e.author_id =? order by e.post_time desc ";
			List<Object> o = findListBySQL(sql, new Object[] { userId }, EvaluationVO.class, page, size);		
			for (Object object : o) {
				evaluationVOs.add((EvaluationVO) object);
			}
		}
		return evaluationVOs;
	}

	@Override
	public Integer getCommentCount(Integer evaluationId) {
		String hql = "select count(id) from EvaluationParentComment where evaluationId=?";
		Long count = (Long) findByHql(hql, new Object[] { evaluationId });
		return count.intValue();
	}

	@Override
	public void updateCommentsUp(Integer commentId, int number) {
		String sql = "update evaluation_parent_comment set ups = ups + ? where id=?";
		updateBySQL(sql, new Object[] { number, commentId });

	}

	@Override
	public int deleteEvaluation(Integer evaluationId, Integer userId) {
		String sql = "delete from evaluation where evaluation_id = ? and author_id = ?";
		return updateBySQL(sql, new Object[] { evaluationId, userId });
	}

	@Override
	public boolean updateEvaluation(Evaluation evaluation) {
		return update(evaluation);
	}

	@Override
	public int deleteEvaluation(Integer evaluationId) {
		String sql = "delete from evaluation where evaluation_id = ?";
		return updateBySQL(sql, new Object[] { evaluationId });
	}

	@Override
	public int getEvaluationCommentViewByUId(Integer id, Integer userId) {
		String hql = "select type from CommentView where commentId=? and userId=?";
		Object type = findByHql(hql, new Object[] { id, userId });
		if (type == null) {
			return EvaluationViewType.NONE.getType();
		} else {
			return (int) type;
		}
	}

}
