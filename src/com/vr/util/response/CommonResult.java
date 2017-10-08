package com.vr.util.response;


public class CommonResult {
	private int code;
	private String msg;
	private Object object;

	public CommonResult(){
		
	}
	
	public CommonResult(Result result){
		this.code=result.getCode();
		this.msg=result.getMsg();
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

	public Object getObject() {
		return object;
	}

	public void setObject(Object object) {
		this.object = object;
	}

}
