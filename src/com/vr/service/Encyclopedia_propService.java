package com.vr.service;

import java.util.List;


import com.vr.domain.Encyclopedia_prop;
import com.vr.util.response.Encyclopedia_all_HJC;
import com.vr.util.response.Encyclopedia_propSearchResultData;

public interface Encyclopedia_propService {
	
	public boolean createEncyclopedia_prop(Encyclopedia_prop ency_prop);
    public boolean deleteEncyclopedia_prop(Encyclopedia_prop ency_prop);
    public boolean updateEncyclopedia_prop(Encyclopedia_prop ency_prop);
    
	public Encyclopedia_prop getEncyclopedia_propByKeyword(String keyword);
	public List<Encyclopedia_prop> getEncyclopedia_propsById(int id);
	public List<Encyclopedia_prop> getEncyclopedia_propsByKeyword(String keyword);

	public Encyclopedia_prop getFirstEncyclopedia_propById(int id);
	public boolean encyclopedia_prodelete(int id,int prop_id);
	public List<Encyclopedia_propSearchResultData> encyclopedia_prodeleteSearch(String prop_keyword);
	public Encyclopedia_prop getEncyclopedia_propById(int id,int prop_id);
}
