package com.vr.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.EncyclopediaDao;
import com.vr.dao.Encyclopedia_propDao;
import com.vr.domain.Encyclopedia_prop;
import com.vr.service.Encyclopedia_propService;
import com.vr.util.response.Encyclopedia_all_HJC;
import com.vr.util.response.Encyclopedia_propSearchResultData;

import jdk.nashorn.internal.runtime.ECMAException;
@Service
@Qualifier("encyclopedia_propServiceImpl")
public class Encyclopedia_propServiceImpl implements Encyclopedia_propService {
	@Autowired
	@Qualifier("encyclopediaDaoImpl")
	private EncyclopediaDao encydao;
	@Autowired
	@Qualifier("encyclopedia_propDaoImpl")
	private Encyclopedia_propDao ency_propdao;
	
	@Override
	public Encyclopedia_prop getEncyclopedia_propById(int id,int prop_id) {
		// TODO Auto-generated method stub
		return ency_propdao.getEncyclopedia_prop(id, prop_id);
	}

	@Override
	public Encyclopedia_prop getEncyclopedia_propByKeyword(String keyword) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Encyclopedia_prop> getEncyclopedia_propsById(int id) {
		// TODO Auto-generated method stub

		return ency_propdao.getEncyclopedia_propsById(id);
	}

	@Override
	public List<Encyclopedia_prop> getEncyclopedia_propsByKeyword(String keyword) {
		// TODO Auto-generated method stub
		System.out.println("2222");
		return ency_propdao.getEncyclopedia_propsByKeyword(keyword);
	}

	@Override
	public Encyclopedia_prop getFirstEncyclopedia_propById(int id) {
		// TODO Auto-generated method stub
		return ency_propdao.getFirstEncyclopedia_propById(id);
	}

	@Override
	public boolean createEncyclopedia_prop(Encyclopedia_prop ency_prop) {
		// TODO Auto-generated method stub
		return ency_propdao.createEncyclopedia_prop(ency_prop);
	}

	@Override
	public boolean deleteEncyclopedia_prop(Encyclopedia_prop ency_prop) {
		// TODO Auto-generated method stub
		return ency_propdao.deleteEncyclopedia_prop(ency_prop);
	}

	@Override
	public boolean updateEncyclopedia_prop(Encyclopedia_prop ency_prop) {
		// TODO Auto-generated method stub
		return ency_propdao.updateEncyclopedia_prop(ency_prop);
	}

	@Override
	public boolean encyclopedia_prodelete(int id,int prop_id) {
		// TODO Auto-generated method stub
		
		
		return ency_propdao.deleteEncyclopedia_prop(getEncyclopedia_propById(id, prop_id));
	}

	@Override
	public List<Encyclopedia_propSearchResultData> encyclopedia_prodeleteSearch(String prop_keyword) {
		// TODO Auto-generated method stub
		List<Encyclopedia_propSearchResultData>list=new ArrayList<>();
		List<Object>props=ency_propdao.getEncyclopedia_propsByKeywordvague(prop_keyword);
		for(Object o:props)
		{
			Encyclopedia_propSearchResultData data=new Encyclopedia_propSearchResultData();
			Encyclopedia_prop pro=(Encyclopedia_prop)o;
			data.setId(pro.getId());
			data.setKeyword(encydao.getEncyclopediaById(pro.getId()).getKeyword());
			data.setProp_keyword(pro.getProp_keyword());
			data.setProp_id(pro.getProp_id());
			list.add(data);
			
		}
		
		return list;
	}



}