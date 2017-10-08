package com.vr.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vr.dao.MobileBoxDao;
import com.vr.domain.MobileBox;
import com.vr.domain.MobileBox;
import com.vr.service.MobileBoxService;
import com.vr.service.MobileBoxService;
import com.vr.util.request.CompareUtil;
import com.vr.util.response.Code;
import com.vr.util.response.CommonResult;
import com.vr.util.response.Data;
import com.vr.util.response.ResponseData;
import com.vr.util.response.ResponseDataPayload;
import com.vr.util.response.Result;

@Controller
public class MobileBoxController {
	@Autowired
	@Qualifier("mobileBoxServiceImpl")
	private MobileBoxService mobileBoxService;
	@Autowired
	@Qualifier("mobileBoxDaoImpl")
	private MobileBoxDao dao;
	@ResponseBody
	@RequestMapping("/evrCompare")
	public Data compare(@RequestBody CompareUtil cmpUtil) {
		List<MobileBox> l = null;
		if (cmpUtil.getIdList().size() > 4 || cmpUtil.getIdList().isEmpty()) {
			return new Data(new ResponseDataPayload(Code.SUCCEED,l));
		} else {
			l = new ArrayList<MobileBox>();
			for (Integer i : cmpUtil.getIdList()) {
				l.add(mobileBoxService.getMobileBoxById(i));
			}


			return new Data(new ResponseDataPayload(Code.SUCCEED,l));
		}
	}

	@ResponseBody
	@RequestMapping("/evr/{id}")
	public ResponseDataPayload getMobileBoxById(@PathVariable Integer id) {
		return new ResponseDataPayload(Code.SUCCEED,mobileBoxService.getMobileBoxById(id));
	}

	@ResponseBody
	@RequestMapping("/products/evr/{pageid}")
	public Data getMobileBoxByPage(@PathVariable Integer pageid) {
		return new Data(new ResponseDataPayload(dao.getMobileBoxSize(),mobileBoxService.getMobileBoxByPage(pageid)));
	}
	/*
	 * 管理员端
	 */
	/*
	 * 获取所有产品
	 */
	@ResponseBody
	@RequestMapping("/admin/getMobileBoxAll")
	public CommonResult getMobileBoxAllOnsale(@RequestParam("condition")String condition) {
		CommonResult result = null;
		try {
			result = mobileBoxService.getMobileBoxAll(condition);
		} catch (Exception e) {
			e.printStackTrace();
			result = new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return result;
	}

	/*
	 * 修改产品信息
	 * 暂时不实现，因为产品信息太多了
	 */
	@ResponseBody
	@RequestMapping("/admin/modifyMobileBoxAll")
	public ResponseData modifyMobileBoxAll(@RequestBody MobileBox mobileBox) {
		if (mobileBoxService.modifyMobileBox(mobileBox)) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}

	/*
	 * 上架产品
	 */
	@ResponseBody
	@RequestMapping("/admin/MobileBoxonSale")
	public ResponseData onSale(@RequestBody List<Object> data) {
		boolean flag=true;
		System.out.println("下架");
		System.out.println(data.size());
		for (Object pid : data) {
			System.out.println(pid);
			if (!mobileBoxService.onSale((Integer)pid)) {
				flag=false;
				break;
			}
		}
		if (flag) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	
	}

	/*
	 * 下架产品
	 */
	@ResponseBody
	@RequestMapping("/admin/MobileBoxoffSale")
	public ResponseData offSale(@RequestBody List<Object> datao) {
		boolean flag=true;
		System.out.println(datao.size());
		for (Object pid : datao) {
			if (!mobileBoxService.offSale((Integer)pid)) {
				flag=false;
				break;
			}
		}
		if (flag) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
		
	}

	/*
	 * 删除产品
	 */
	@ResponseBody
	@RequestMapping("/admin/deleteMobileBox")
	public ResponseData deleteMobileBox(@RequestBody List<Object>deleteid) {
		System.out.println("删除id长度");
		System.out.println(deleteid.size());
		if (mobileBoxService.deleteMobileBoxByList(deleteid)) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}
}
