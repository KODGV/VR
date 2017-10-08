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
import com.vr.dao.PCHeadSetDao;
import com.vr.domain.PcheadSet;
import com.vr.service.PCHeadSetService;
import com.vr.util.request.CompareUtil;
import com.vr.util.response.Code;
import com.vr.util.response.CommonResult;
import com.vr.util.response.Data;
import com.vr.util.response.ResponseData;
import com.vr.util.response.ResponseDataPayload;
import com.vr.util.response.Result;

@Controller
public class PCHeadSetController {
	@Autowired
	@Qualifier("pcHeadSetServiceImpl")
	private PCHeadSetService pcHeadSetService;
	@Autowired
	@Qualifier("pcHeadSetDaoImpl")
	private PCHeadSetDao dao;
	public PCHeadSetService getPcHeadSetService() {
		return pcHeadSetService;
	}

	public void setPcHeadSetService(PCHeadSetService pcHeadSetService) {
		this.pcHeadSetService = pcHeadSetService;
	}
	
	@ResponseBody
	@RequestMapping("/svrCompare")
	public Data compare(@RequestBody CompareUtil cmpUtil) {
		List<PcheadSet> l = null;
		if (cmpUtil.getIdList().size() > 4 || cmpUtil.getIdList().isEmpty()) {
			return new Data(new ResponseDataPayload(Code.SUCCEED,l));
		} else {
			l = new ArrayList<PcheadSet>();
			for (Integer i : cmpUtil.getIdList()) {
				l.add(pcHeadSetService.getPCHeadSetById(i));
			}

			return new Data(new ResponseDataPayload(Code.SUCCEED,l));
		}
	}

	@ResponseBody
	@RequestMapping("/svr/{id}")
	public ResponseDataPayload getPCHeadSetById(@PathVariable Integer id) {
		return new ResponseDataPayload(Code.SUCCEED,pcHeadSetService.getPCHeadSetById(id));
	}

	@ResponseBody
	@RequestMapping("/products/svr/{pageid}")
	public Data getPCHeadSetByPage(@PathVariable Integer pageid) {
		return new Data(new ResponseDataPayload(dao.getPCHeadSetSize(),pcHeadSetService.getPCHeadSetByPage(pageid)));
	}
	/*
	 * 管理员端
	 */
	/*
	 * 获取所有产品
	 */
	@ResponseBody
	@RequestMapping("/admin/getPCHeadSetAll")
	public CommonResult getPCHeadSetAllOnsale(@RequestParam("condition")String condition) {
		CommonResult result = null;
		try {
			result = pcHeadSetService.getPCHeadSetAll(condition);
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
	@RequestMapping("/admin/modifyPCHeadSetAll")
	public ResponseData modifyPCHeadSetAll(@RequestBody PcheadSet PCHeadSet) {
		if (pcHeadSetService.modifyPCHeadSet(PCHeadSet)) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}

	/*
	 * 上架产品
	 */
	@ResponseBody
	@RequestMapping("/admin/PCHeadSetonSale")
	public ResponseData onSale(@RequestBody List<Object> data) {
		boolean flag=true;
		System.out.println("下架");
		System.out.println(data.size());
		for (Object pid : data) {
			System.out.println(pid);
			if (!pcHeadSetService.onSale((Integer)pid)) {
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
	@RequestMapping("/admin/PCHeadSetoffSale")
	public ResponseData offSale(@RequestBody List<Object> datao) {
		boolean flag=true;
		System.out.println(datao.size());
		for (Object pid : datao) {
			if (!pcHeadSetService.offSale((Integer)pid)) {
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
	@RequestMapping("/admin/deletePCHeadSet")
	public ResponseData deletePCHeadSet(@RequestBody List<Object>deleteid) {
		System.out.println("删除id长度");
		System.out.println(deleteid.size());
		if (pcHeadSetService.deletePCHeadSetByList(deleteid)) {
			return new ResponseData(Code.SUCCEED);
		} else {
			return new ResponseData(Code.DATABASE_ERROR);
		}
	}
}
