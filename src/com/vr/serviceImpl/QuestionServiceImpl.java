package com.vr.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.QuestionDao;
import com.vr.domain.Question;
import com.vr.service.QuestionService;
@Service
@Qualifier("questionServiceImpl")
public class QuestionServiceImpl implements QuestionService{
	@Autowired
	@Qualifier("questionDaoImpl")
	private QuestionDao dao;
	@Override
	public boolean updateQuestions(List<Question>questions) {
		// TODO Auto-generated method stub
		dao.deleteAllQuestion();
		boolean flag=true;
		for(Question question:questions)
		{
			if(!dao.addQuestion(question))
			{
				flag=false;
				break;
			}
		}
		if(flag)
			return true;
		else
			return false;
	}

}
