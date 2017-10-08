package com.vr.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.MobileBoxDao;
import com.vr.domain.MobileBox;
import com.vr.domain.MobileBox;
import com.vr.service.MobileBoxService;
import com.vr.util.response.CommonResult;
import com.vr.util.response.Result;

@Service
@Qualifier("mobileBoxServiceImpl")
public class MobileBoxServiceImpl implements MobileBoxService{

	@Autowired
	@Qualifier("mobileBoxDaoImpl")
	private MobileBoxDao dao;
	@Override
	public List<MobileBox> getMobileBoxByPage(int pageNo) {
		List<Object> l=dao.getMobileBoxByPage(pageNo);
		List<MobileBox> list=new ArrayList<MobileBox>();
		for(Object o:l){
			list.add((MobileBox)o);
		}
		return list;
	}

	@Override
	public MobileBox getMobileBoxById(int id) {
		return dao.getMobileBoxById(id);
	}
	@Override
	public CommonResult getMobileBoxAll(String condition) {
		// TODO Auto-generated method stub
		CommonResult result = new CommonResult(Result.SUCCESS);
		List<Object> objects = null;
		if (condition.equals("onsale"))
			objects = dao.getMobileBoxOnsale();
		else
			objects = dao.getMobileBoxOffsale();
		Map<String, Object> map = new HashMap<>();
		map.put("MobileBox", objects);
		result.setObject(map);
		return result;
	}

	@Override
	public boolean modifyMobileBox(MobileBox MobileBox) {
		// TODO Auto-generated method stub
		return dao.updateMobileBox(MobileBox);
	}

	@Override
	public boolean onSale(int id) {
		// TODO Auto-generated method stub
		MobileBox MobileBox = dao.getMobileBoxById(id);
		MobileBox.setOffsale(0);
		return dao.updateMobileBox(MobileBox);
	}

	@Override
	public boolean offSale(int id) {
		// TODO Auto-generated method stub
		MobileBox MobileBox = dao.getMobileBoxById(id);
		System.out.println(id);
		MobileBox.setOffsale(1);
		return dao.updateMobileBox(MobileBox);
	}

	@Override
	public boolean deleteMobileBoxByList(List<Object> object) {
		boolean flag=true;
		// TODO Auto-generated method stub
		for(Object o:object)
		{
			if(!dao.deleteMobileBox(dao.getMobileBoxById((Integer)o)))
			{
				flag=false;
				break;
			}
		}
		return flag;
	}



}
