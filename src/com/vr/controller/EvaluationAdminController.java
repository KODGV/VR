package com.vr.controller;

import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vr.domain.Evaluation;
import com.vr.domain.User;
import com.vr.service.EvaluationService;
import com.vr.util.response.CommonResult;
import com.vr.util.response.Result;

@Controller
public class EvaluationAdminController {

	@Resource
	private EvaluationService evaluationService;
	
	@RequestMapping(value="/admins/evaluations/{evaluationId}",method=RequestMethod.DELETE)
	@ResponseBody
	public CommonResult deleteEvaluation(@PathVariable("evaluationId")Integer evaluationId){
		try{
			return evaluationService.deleteEvaluation(evaluationId);
		}catch(Exception e){
			e.printStackTrace();
			return new CommonResult(Result.SYSTEM_EXCEPTION);
		}
	}
	
	@RequestMapping(value="/admins/evaluations/evaluation",method=RequestMethod.PUT)
	@ResponseBody
	public CommonResult updateEvaluation(@RequestBody Evaluation evaluation){
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
	
	
}
