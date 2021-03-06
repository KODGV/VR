package com.vr.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
import com.vr.dao.AnswerDao;
import com.vr.dao.QuestionDao;
import com.vr.domain.AllInOnePc;
import com.vr.domain.Answer;
import com.vr.domain.MobileBox;
import com.vr.domain.News;
import com.vr.domain.PcheadSet;
import com.vr.domain.Question;
import com.vr.service.AnswerService;
import com.vr.service.PCHeadSetService;
import com.vr.service.QuestionService;
import com.vr.util.ContextUtil;
import com.vr.util.EncodeUtil;
import com.vr.util.HibernateUtils;
import com.vr.util.request.AnswerRequest;
import com.vr.util.request.Statisticalanswer;
import com.vr.util.response.Code;
import com.vr.util.response.Data;
import com.vr.util.response.ResponseData;
import com.vr.view.QuestionView;

@Controller
public class QuestionController extends HibernateUtils{
	@Autowired
	@Qualifier("questionDaoImpl")
	private QuestionDao dao;
	@Autowired
	@Qualifier("questionServiceImpl")
	private QuestionService questionService;
	@Autowired
	@Qualifier("answerDaoImpl")
	private AnswerDao answerdao;
	@Autowired
	@Qualifier("answerServiceImpl")
	private AnswerService answerService;

	// ok
	@ResponseBody
	@RequestMapping("/Question")
	@JsonView(QuestionView.Tag.class)
	public List<String> getQuestion() {
		List<Question> questions= dao.getQuestions();
		List<String> questionNames=new ArrayList<>();
		for(Question o:questions)
		{
			String name=o.getQuestionname();
			if(!questionNames.contains(name))
				questionNames.add(name);
		}
		return questionNames;
		 
	}
	// ok
	@ResponseBody
	@RequestMapping("/Answer")
	public void saveAnswer(@RequestBody List<AnswerRequest> answers) {
		System.out.println(answers.size());
		answerdao.saveAnswers(answers);

	}

	@ResponseBody
	@RequestMapping("/Answer/statistic")
	public List<Statisticalanswer> getAnswers(@RequestParam("producttype")String pt) {
		
		return answerService.getStatisticalData(pt);
	}
	
	@ResponseBody
	@JsonView(QuestionView.Tag.class)
	@RequestMapping("/Question/type")
	public List<Question>getName(@RequestParam("type")String name)
	{	
		System.out.println(name);
		List<Question>questions=new ArrayList<>();
		List<Object>objects= dao.SearchQuestion(name);
		for(Object o:objects)
		{
			questions.add((Question)o);
		}
		System.out.println(questions.size());
		return questions;
//		if(name.equals("AllInOnePc"))
//		{
//			for(Object l:list)
//			{
//				AllInOnePc allInOnePc=(AllInOnePc)l;
//				Object o=allInOnePc.getSalesmodel();
//				real.add(o);
//			}		
//		}
//		if(name.equals("MobileBox"))
//		{
//			for(Object l:list)
//			{
//				MobileBox mobileBox=(MobileBox)l;
//				Object o=mobileBox.getSalesmodel();
//				real.add(o);
//			}		
//		}
//		if(name.equals("PcheadSet"))
//		{
//			for(Object l:list)
//			{
//				PcheadSet pcheadSet=(PcheadSet)l;
//				Object o=pcheadSet.getSalesmodel();
//				real.add(o);
//			}		
//		}		
	
	}
	/*
	 * 管理员端
	 */
	/*
	 * 查看问题和查看问卷答案与用户端统一
	 */
	/*
	 * 修改问题和增加问题
	 */
	@ResponseBody
	@RequestMapping("/admin/Question/modify")
	public ResponseData modifyQuestion(@RequestBody  List<Question>questions) {
		if (questionService.updateQuestions(questions)) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}
	/*
	 * 删除问题
	 */
	@ResponseBody
	@RequestMapping("/admin/Question/deleteQuestion/{qid}")
	public ResponseData deleteQuestion(@PathVariable int qid) {
		if (dao.deleteQuestion(qid)) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}
	/*
	 * 删除问卷
	 */
	@ResponseBody
	@RequestMapping("/Question/deleteQuestionare")
	public ResponseData deleteQuestionaire(@RequestParam("questionnariename")String questionnariename) {
		if (dao.deleteAllQuestion(questionnariename)) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}

	
}
