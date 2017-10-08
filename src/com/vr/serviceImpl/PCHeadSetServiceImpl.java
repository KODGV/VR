package com.vr.serviceImpl;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.PCHeadSetDao;
import com.vr.domain.PcheadSet;
import com.vr.service.PCHeadSetService;
import com.vr.util.response.CommonResult;
import com.vr.util.response.Result;
@Service
@Qualifier("pcHeadSetServiceImpl")
public class PCHeadSetServiceImpl implements PCHeadSetService{

	@Autowired
	@Qualifier("pcHeadSetDaoImpl")
	private PCHeadSetDao dao;
	


	
	@Override
	public List<PcheadSet> getPCHeadSetByPage(int pageNo) {
		List<Object> l=dao.getPCHeadSetByPage(pageNo);
		List<PcheadSet> list=new ArrayList<PcheadSet>();
		for(Object o:l){
			list.add((PcheadSet)o);
		}
		return list;
	}

	@Override
	public PcheadSet getPCHeadSetById(int id) {
		return dao.getPCHeadSetById(id);
	}
	@Override
	public CommonResult getPCHeadSetAll(String condition) {
		// TODO Auto-generated method stub
		CommonResult result = new CommonResult(Result.SUCCESS);
		List<Object> objects = null;
		if (condition.equals("onsale"))
			objects = dao.getPCHeadSetOnsale();
		else
			objects = dao.getPCHeadSetOffsale();
		Map<String, Object> map = new HashMap<>();
		map.put("PCHeadSet", objects);
		result.setObject(map);
		return result;
	}

	@Override
	public boolean modifyPCHeadSet(PcheadSet PCHeadSet) {
		// TODO Auto-generated method stub
		return dao.updatePCHeadSet(PCHeadSet);
	}

	@Override
	public boolean onSale(int id) {
		// TODO Auto-generated method stub
		PcheadSet pcheadSet = dao.getPCHeadSetById(id);
		pcheadSet.setOffsale(0);
		return dao.updatePCHeadSet(pcheadSet);
	}

	@Override
	public boolean offSale(int id) {
		// TODO Auto-generated method stub
		PcheadSet pcheadSet = dao.getPCHeadSetById(id);
		System.out.println(id);
		pcheadSet.setOffsale(1);
		return dao.updatePCHeadSet(pcheadSet);
	}

	@Override
	public boolean deletePCHeadSetByList(List<Object> object) {
		boolean flag=true;
		// TODO Auto-generated method stub
		for(Object o:object)
		{
			if(!dao.deletePCHeadSet(dao.getPCHeadSetById((Integer)o)))
			{
				flag=false;
				break;
			}
		}
		return flag;
	}



}
