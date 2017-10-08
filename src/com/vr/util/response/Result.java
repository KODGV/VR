package com.vr.util.response;


public enum Result {
	
	SUCCESS(200,"SUCCESS"),
	SYSTEM_EXCEPTION(500,"SYSTEM_EXCEPTION"),
	FILE_NOT_SUPPORT(415,"FILE_NOT_SUPPORT"),//不支持的文件类型
	PARAM_ERROR(1000,"PARAM_ERROR"),//参数错误
	USER_NOT_LOGIN(1001,"USER_NOT_LOGIN"),//用户未登录
	EVALUATION_VIEW_TYPE_NOT_FOUND(1002,"EVALUATION_VIEW_TYPE_NOT_FOUND"),
	NO_AUTHORIZATION(1003,"NO_AUTHORIZATION");//未授权
	
	private int code;
	
	private String msg;
	
	private Result(int code,String msg){
		this.code=code;
		this.msg=msg;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	
	
	
}
