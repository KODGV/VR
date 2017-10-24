package com.vr.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vr.dao.EncyclopediaDao;
import com.vr.daoImpl.EncyclopediaDaoImpl;
import com.vr.domain.Encyclopedia;
import com.vr.domain.Encyclopedia_prop;
import com.vr.domain.Encyclopedia_propchangerequire;
import com.vr.service.EncyclopediaService;
import com.vr.service.Encyclopedia_propService;
import com.vr.service.Encyclopedia_propchangerequireService;
import com.vr.util.HibernateUtils;
import com.vr.util.request.AnswerRequest;
import com.vr.util.request.EncyclopediaDirType;
import com.vr.util.request.EncyclopediaSearchData;
import com.vr.util.response.EncyclopediaSearchResultData;
import com.vr.util.response.Encyclopedia_all_HJC;
import com.vr.util.response.Encyclopedia_propSearchResultData;
import com.vr.util.response.Encyclopedia_proprequireData;

@Controller
public class EncyclopediaController extends HibernateUtils {

	@Autowired
	@Qualifier("encyclopediaServiceImpl")
	private EncyclopediaService encyservice;

	@Autowired
	@Qualifier("encyclopedia_propServiceImpl")
	private Encyclopedia_propService ency_propservice;

	@Autowired
	@Qualifier("encyclopedia_propchangerequireServiceImpl")
	private Encyclopedia_propchangerequireService ency_propchangerequireservice;

	@ResponseBody
	@RequestMapping("/encyclopediaSearch")
	public List<EncyclopediaSearchResultData> search(@RequestBody EncyclopediaSearchData searchdata) {

		String keyword = searchdata.getKeyword();
		int pageNum = searchdata.getPageNum();

		int pageSize = 10;

		List<EncyclopediaSearchResultData> result = new ArrayList<>();

		List<Encyclopedia> ency = encyservice.getEncyclopediasByKeyword(keyword, pageNum, pageSize);
		System.out.println(keyword);
		System.out.println(ency.size());
		for (int i = 0; (i < pageSize) && (i < ency.size()); i++) {
			int id = ency.get(i).getId();
			EncyclopediaSearchResultData res = new EncyclopediaSearchResultData();
			res.setId(id);
			res.setKeyword(ency.get(i).getKeyword());
			res.setProp_keyword(ency.get(i).getType());
			result.add(res);

		}
		return result;

	}

	@ResponseBody
	@RequestMapping("/encyclopedia-prop/{id}")
	public List<Encyclopedia_propSearchResultData> search(@PathVariable int id) {

		List<Encyclopedia_prop> ency_props = ency_propservice.getEncyclopedia_propsById(id);
		System.out.println(ency_props.size());
		List<Encyclopedia_propSearchResultData> result = new ArrayList<>();
		for (int i = 0; i < ency_props.size(); i++) {
			Encyclopedia_propSearchResultData res = new Encyclopedia_propSearchResultData();
			res.setId(id);
			res.setProp_id(ency_props.get(i).getProp_id());
			res.setKeyword(encyservice.getEncyclopediaById(id).getKeyword());
			res.setContent(ency_props.get(i).getContent());
			res.setChangenote(ency_props.get(i).getChangenote());
			res.setProp_keyword(ency_props.get(i).getProp_keyword());
			result.add(res);
		}
		return result;
	}

	@ResponseBody
	@RequestMapping("/encyclopedia-votedata/{id}")
	public Encyclopedia encyvotesearch(@PathVariable int id) {
		return encyservice.getEncyclopediaById(id);
	}

	@ResponseBody
	@RequestMapping("/encyclopediaDir")
	public List<String> getAllTypes() {
		System.out.println("encyclopediadir");

		List<String> result = encyservice.getAllTypes();
		return result;

	}

	@ResponseBody
	@RequestMapping("/encyclopediaTypeDir")
	public List<EncyclopediaSearchResultData> getEncyclopediasByType(@RequestBody EncyclopediaDirType dirtype) {

		String type = dirtype.getType();
		int pageNum = dirtype.getPageNum();
		int pageSize = 5;
		System.out.println(type);

		List<EncyclopediaSearchResultData> result = new ArrayList<>();

		List<Encyclopedia> encys = encyservice.getEncyclopediasByType(type, pageNum, pageSize);
		for (int i = 0; i < encys.size(); i++) {
			int id = encys.get(i).getId();
			EncyclopediaSearchResultData res = new EncyclopediaSearchResultData();
			res.setId(id);
			res.setKeyword(encys.get(i).getKeyword());
			res.setProp_keyword(encys.get(i).getType());

			result.add(res);
		}

		return result;

	}

	@ResponseBody
	@RequestMapping("/encyclopedia-propChange")
	public int updateEncyclopedia_prop(@RequestBody Encyclopedia_propchangerequire changerequire) {
		System.out.println(changerequire.getChangenote());
		boolean state = ency_propchangerequireservice.createEncyclopedia_propchangerequire(changerequire);
		if (state == false) {
			return 0;
		}
		return 1;

	}

	@ResponseBody
	@RequestMapping("/encyclopedia-propRequireOpen1")
	public boolean pass(@RequestBody Encyclopedia_propchangerequire changerequire) {
		Encyclopedia_prop ency_prop = new Encyclopedia_prop();
		ency_prop.setId(changerequire.getId());
		ency_prop.setProp_id(changerequire.getProp_id());
		ency_prop.setProp_keyword(changerequire.getProp_keyword());
		ency_prop.setContent(changerequire.getContent());
		ency_prop.setChangenote(changerequire.getChangenote());
		boolean state = ency_propchangerequireservice.deleteEncyclopedia_propchangerequire(changerequire);
		state = ency_propservice.updateEncyclopedia_prop(ency_prop);
		return state;
	}

	@ResponseBody
	@RequestMapping("/encyclopedia-propRequireOpen2")
	public boolean nopass(@RequestBody Encyclopedia_propchangerequire changerequire) {
		boolean state = ency_propchangerequireservice.deleteEncyclopedia_propchangerequire(changerequire);
		return state;
	}

	@ResponseBody
	@RequestMapping("/encyclopedia-propRequire/{pageNum}")
	public List<Encyclopedia_proprequireData> getEncyclopedia_propchangerequireBypage(@PathVariable int pageNum) {
		int pageSize = 10;
		System.out.println("1111");
		List<Encyclopedia_proprequireData> result = new ArrayList<>();
		result = ency_propchangerequireservice.getEncyclopedia_proprequireBypage(pageNum, pageSize);
		for (int i = 0; i < result.size(); i++) {
			result.get(i).setKeyword(encyservice.getEncyclopediaById(result.get(i).getId()).getKeyword());
		}
		return result;
	}

	@ResponseBody
	@RequestMapping("/encyclopedia-up/{id}")
	public int up(@PathVariable int id) {
		System.out.println("id=" + id);
		if (encyservice.up(id) == true) {
			return 1;
		} else {
			return 0;
		}
	}

	@ResponseBody
	@RequestMapping("/encyclopedia-down/{id}")
	public int down(@PathVariable int id) {
		System.out.println("id=" + id);

		if (encyservice.down(id) == true) {
			return 1;
		} else {
			return 0;
		}
	}

	
	
	
	/*
	 * 词条信息获取
	 */
	@ResponseBody
	@RequestMapping("/encyclopedia/getall/{pn}")
	public List<Encyclopedia_all_HJC>getEncylopediaAll(@PathVariable int pn)
	{
		 List<Encyclopedia_all_HJC> l=null;
		try{
					l= encyservice.getEncylopediaAllService(pn);
				 }
		 catch(Exception e)
		 {
			 e.printStackTrace();
			 l=null;
		 }
		return l;	
	}
	/*
	 * 词条信息删除
	 */
	@ResponseBody
	@RequestMapping("/encyclopediaDelete")
	public int deleteEncyclopedia(@RequestBody Map<String,String> map)
	{
		int id=Integer.valueOf(map.get("id"));
		int prop_id=Integer.valueOf(map.get("prop_id"));
		int state=0;
		List<Encyclopedia_prop> encyclopedia_props=ency_propservice.getEncyclopedia_propsById(id);
		System.out.println(id);
		System.out.println(prop_id);
		System.out.println("hhh");
		System.out.println(encyclopedia_props.size());
		ency_propchangerequireservice.delteEncyclopedia_proprequire(id, prop_id);
		if(encyclopedia_props.size()==1)
		{
			if(ency_propservice.encyclopedia_prodelete(id,prop_id) && encyservice.deleteEncylopedia(id))		
			{
				System.out.println("kkk");
				state=1;
			}
		}
		else
		{
			if(ency_propservice.encyclopedia_prodelete(id,prop_id));
				state=1;
		}
		
		
		return state;
	}
	/*
	 * 词条删除搜索
	 */
	@ResponseBody
	@RequestMapping("/encyclopediaDeleteSearch")
	public List<Encyclopedia_propSearchResultData> Deletesearch(@RequestBody Map<String,String> map) {

		String prop_keyword=map.get("prop_keyword");
		 List<Encyclopedia_propSearchResultData> l=null;
		try{
					l= ency_propservice.encyclopedia_prodeleteSearch(prop_keyword);
				 }
		 catch(Exception e)
		 {
			 e.printStackTrace();
			 l=null;
		 }
		return l;	

	}

	
}