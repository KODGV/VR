package com.vr.exception;

public class EvaluationViewTypeNotFoundException extends RuntimeException{

	public EvaluationViewTypeNotFoundException() {
		super();
	}

	public EvaluationViewTypeNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public EvaluationViewTypeNotFoundException(String message) {
		super(message);
	}

	public EvaluationViewTypeNotFoundException(Throwable cause) {
		super(cause);
	}
	
}
