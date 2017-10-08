package com.vr.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.EncyclopediaDao;
import com.vr.dao.Encyclopedia_propDao;
import com.vr.domain.Encyclopedia;
import com.vr.domain.Encyclopedia_prop;
import com.vr.service.EncyclopediaService;
import com.vr.util.response.Encyclopedia_all_HJC;
@Service
@Qualifier("encyclopediaServiceImpl")
public class EncyclopediaServiceImpl implements EncyclopediaService {
	@Autowired
	@Qualifier("encyclopediaDaoImpl")
	private EncyclopediaDao encydao;

	@Autowired
	@Qualifier("encyclopedia_propDaoImpl")
	private Encyclopedia_propDao ency_propdao;
	
	public Encyclopedia getEncyclopediaById(int id) {
		// TODO Auto-generated method stub
		

		return encydao.getEncyclopediaById(id);
	}

	public Encyclopedia getEncyclopediaByKeyword(String keyword){
		return encydao.getEncyclopediaByKeyword(keyword);
	}


	public List<Encyclopedia> getEncyclopediasByKeyword(String keyword) {
		// TODO Auto-generated method stub
		return encydao.getEncyclopediasByKeyword(keyword);
	}

	@Override
	public List<Encyclopedia> getEncyclopediasByKeyword(String keyword,
			int pageNum, int pageSize) {
		// TODO Auto-generated method stub
		return encydao.getEncyclopediasByKeyword(keyword, pageNum, pageSize);
	}

	public List<String> getAllTypes() {
		// TODO Auto-generated method stub
		return encydao.getAllTypes();
	}

	@Override
	public List<Encyclopedia> getEncyclopediasByType(String type) {
		// TODO Auto-generated method stub
		return encydao.getEncyclopediasByType(type);
	}

	@Override
	public List<Encyclopedia> getEncyclopediasByType(String type, int pageNum,
			int pageSize) {
		// TODO Auto-generated method stub
		return encydao.getEncyclopediasByType(type, pageNum, pageSize);
	}

	@Override
	public boolean up(int id) {
		// TODO Auto-generated method stub
		return encydao.up(id);
	}

	@Override
	public boolean down(int id) {
		// TODO Auto-generated method stub
		return encydao.down(id);
	}

	@Override
	public boolean createEncyclopedia(Encyclopedia ency) {
		// TODO Auto-generated method stub
		return encydao.createEncyclopedia(ency);
	}

	@Override
	public boolean deleteEncyclopedia(Encyclopedia ency) {
		// TODO Auto-generated method stub
		return encydao.deleteEncyclopedia(ency);
	}

	@Override
	public boolean updateEncyclopedia(Encyclopedia ency) {
		// TODO Auto-generated method stub
		return encydao.updateEncyclopedia(ency);
	}

	@Override
	public List<Encyclopedia_all_HJC> getEncylopediaAllService(int pageNum) {
		// TODO Auto-generated method stub
		List<Encyclopedia_all_HJC> all_HJCs=new ArrayList<>();
		List<Object>encyclopedias=encydao.getAllEncyclopedia(pageNum,10);
		for(Object o:encyclopedias)
		{
			Encyclopedia_all_HJC all_HJC=new Encyclopedia_all_HJC();
			Encyclopedia encyclopedia=(Encyclopedia)o;
			all_HJC.setEncyclopedia(encyclopedia);
			List<Encyclopedia_prop>encyclopedia_props=ency_propdao.getEncyclopedia_propsById(encyclopedia.getId());
			all_HJC.setEncyclopedia_prop(encyclopedia_props);
			all_HJCs.add(all_HJC);
		}
		return all_HJCs;
	}
	
	
	
	
	
	
	
	
	
	
}