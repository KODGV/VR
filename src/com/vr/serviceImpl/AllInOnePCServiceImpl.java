package com.vr.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import org.springframework.stereotype.Service;

import com.vr.dao.AllInOnePCDao;
import com.vr.dao.PCHeadSetDao;
import com.vr.domain.AllInOnePc;
import com.vr.domain.MobileBox;
import com.vr.service.AllInOnePCService;
import com.vr.util.response.CommonResult;
import com.vr.util.response.Result;

@Service
@Qualifier("allInOnePCServiceImpl")
public class AllInOnePCServiceImpl implements AllInOnePCService {

	@Autowired
	@Qualifier("allInOnePCDaoImpl")
	private AllInOnePCDao dao;

	@Override
	public List<AllInOnePc> getAllInOnePCByPage(int pageNo) {
		List<Object> l = dao.getAllInOnePCByPage(pageNo);
		List<AllInOnePc> list = new ArrayList<AllInOnePc>();
		for (Object o : l) {
			list.add((AllInOnePc) o);
		}
		return list;
	}

	@Override
	public AllInOnePc getAllInOnePCById(int id) {
		return dao.getAllInOnePCById(id);
	}

	@Override
	public CommonResult getAllInOnePCAll(String condition) {
		// TODO Auto-generated method stub
		CommonResult result = new CommonResult(Result.SUCCESS);
		List<Object> objects = null;
		if (condition.equals("onsale"))
			objects = dao.getAllInOnePCOnsale();
		else
			objects = dao.getAllInOnePCOffsale();
		Map<String, Object> map = new HashMap<>();
		map.put("allInOnePC", objects);
		result.setObject(map);
		return result;
	}

	@Override
	public boolean EditAllInOnePCAll(AllInOnePc allInOnePc) {
		// TODO Auto-generated method stub
		return dao.updateAllInOnePC(allInOnePc);
	}

	@Override
	public boolean onSale(int id) {
		// TODO Auto-generated method stub
		AllInOnePc allInOnePc = dao.getAllInOnePCById(id);
		allInOnePc.setOffsale(0);
		return dao.updateAllInOnePC(allInOnePc);
	}

	@Override
	public boolean offSale(int id) {
		// TODO Auto-generated method stub
		AllInOnePc allInOnePc = dao.getAllInOnePCById(id);
		System.out.println(id);
		allInOnePc.setOffsale(1);
		return dao.updateAllInOnePC(allInOnePc);
	}

	@Override
	public boolean deleteAllInOnePCByList(List<Object> object) {
		boolean flag=true;
		// TODO Auto-generated method stub
		for(Object o:object)
		{
			if(!dao.deleteAllInOnePC(dao.getAllInOnePCById((Integer)o)))
			{
				flag=false;
				break;
			}
		}
		return flag;
	}

}
