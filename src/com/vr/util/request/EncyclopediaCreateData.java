package com.vr.util.request;
import java.util.ArrayList;
import java.util.List;

import com.vr.domain.*;
public class EncyclopediaCreateData {

	private String keyword;
	private String type;
	private String changenote;
	List<Encyclopedia_prop> props=new ArrayList<>();
	public EncyclopediaCreateData() {
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getChangenote() {
		return changenote;
	}
	public void setChangenote(String changenote) {
		this.changenote = changenote;
	}
	public List<Encyclopedia_prop> getProps() {
		return props;
	}
	public void setProps(List<Encyclopedia_prop> props) {
		this.props = props;
	}
	public EncyclopediaCreateData(String keyword, String type,
			String changenote, List<Encyclopedia_prop> props) {
		this.keyword = keyword;
		this.type = type;
		this.changenote = changenote;
		this.props = props;
	}
}
