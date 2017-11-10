package com.vr.dao;


import java.io.File;
import java.io.IOException;
import java.util.List;

import com.vr.domain.Question;

public interface QuestionDao {
	public boolean addQuestion(Question question);
	public Question getQuestion(String question,String name);
	public boolean deleteAllQuestion(String name);
	public boolean deleteQuestionaire(String name);
	public void updateQuestion(File file) throws IOException;

	public List<Question> getQuestions();
	public boolean deleteQuestion(int id);
	public List<Object> SearchQuestion(String name);
	public List<Question> getQuestions(String producttype);
}
