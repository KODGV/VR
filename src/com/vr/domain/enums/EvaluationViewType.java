package com.vr.domain.enums;


public enum EvaluationViewType {
	NONE(-1),//无
	UP(0),//顶
	DOWN(1);//踩
	private int type;
	private EvaluationViewType(int type){
		this.type=type;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	
	public static EvaluationViewType getEvaluationViewType(int type){
		for(EvaluationViewType evaluationViewType:EvaluationViewType.values()){
			if(evaluationViewType.getType()==type){
				return evaluationViewType;
			}
		}
		return null;
	}
}
