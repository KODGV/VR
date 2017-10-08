package com.vr.util.response;

public class Page {
	private int currentPage;
	private int pageNum;

	public Page() {

	}

	public Page(int currentPage, int pageNum) {
		this.currentPage = currentPage;
		this.pageNum = pageNum;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getPageNum() {
		return pageNum;
	}

	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}

}
