
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

import com.vr.dao.AllInOnePCDao;
import com.vr.domain.AllInOnePc;
import com.vr.service.AllInOnePCService;
import com.vr.util.request.CompareUtil;
import com.vr.util.response.Code;
import com.vr.util.response.CommonResult;
import com.vr.util.response.Data;
import com.vr.util.response.ResponseData;
import com.vr.util.response.ResponseDataPayload;
import com.vr.util.response.Result;

@Controller
public class AllInOnePCController {
	@Autowired
	@Qualifier("allInOnePCServiceImpl")
	private AllInOnePCService allInOnePCService;
	@Autowired
	@Qualifier("allInOnePCDaoImpl")
	private AllInOnePCDao dao;

	@ResponseBody
	@RequestMapping("/ivrCompare")
	public Data compare(@RequestBody CompareUtil cmpUtil) {
		List<AllInOnePc> l = null;
		System.out.println(cmpUtil.getIdList().size());
		if (cmpUtil.getIdList().size() > 4 || cmpUtil.getIdList().isEmpty()) {
			return new Data(new ResponseDataPayload(Code.SUCCEED, l));
		} else {
			l = new ArrayList<AllInOnePc>();
			for (Integer i : cmpUtil.getIdList()) {
				l.add(allInOnePCService.getAllInOnePCById(i));
			}

			return new Data(new ResponseDataPayload(Code.SUCCEED, l));
		}
	}

	@ResponseBody
	@RequestMapping("/ivr/{id}")
	public ResponseDataPayload getPCHeadSetById(@PathVariable Integer id) {
		return new ResponseDataPayload(Code.SUCCEED, allInOnePCService.getAllInOnePCById(id));
	}

	@ResponseBody
	@RequestMapping("/products/ivr/{pageid}")
	public Data getAllInOnePCByPage(@PathVariable Integer pageid) {
		return new Data(new ResponseDataPayload(dao.getAllInOneSize(), allInOnePCService.getAllInOnePCByPage(pageid)));
	}

	/*
	 * 管理员端
	 */
	/*
	 * 获取所有产品
	 */
	@ResponseBody
	@RequestMapping("/admin/getAllInOnePCAll")
	public CommonResult getAllInOnePCAllOnsale(@RequestParam("condition")String condition) {
		CommonResult result = null;
		try {
			result = allInOnePCService.getAllInOnePCAll(condition);
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
	@RequestMapping("/admin/modifyAllInOnePCAll")
	public ResponseData modifyAllInOnePCAll(@RequestBody AllInOnePc allInOnePc) {
		if (allInOnePCService.EditAllInOnePCAll(allInOnePc)) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}

	/*
	 * 上架产品
	 */
	@ResponseBody
	@RequestMapping("/admin/AllInOnePConSale")
	public ResponseData onSale(@RequestBody List<Object> data) {
		boolean flag=true;
		System.out.println("下架");
		System.out.println(data.size());
		for (Object pid : data) {
			System.out.println(pid);
			if (!allInOnePCService.onSale((Integer)pid)) {
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
	@RequestMapping("/admin/AllInOnePCoffSale")
	public ResponseData offSale(@RequestBody List<Object> datao) {
		boolean flag=true;
		System.out.println(datao.size());
		for (Object pid : datao) {
			if (!allInOnePCService.offSale((Integer)pid)) {
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
	@RequestMapping("/admin/deleteAllInOnePC")
	public ResponseData deleteAllInOnePC(@RequestBody List<Object>deleteid) {
		System.out.println("删除id长度");
		System.out.println(deleteid.size());
		if (allInOnePCService.deleteAllInOnePCByList(deleteid)) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}
}
