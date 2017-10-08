package com.vr.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.catalina.filters.FailedRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.vr.dao.AllInOnePCDao;
import com.vr.dao.PCHeadSetDao;
import com.vr.dao.QuestionDao;
import com.vr.daoImpl.MobileBoxDaoImpl;
import com.vr.util.DecodeUtil;
import com.vr.util.EncodeUtil;
import com.vr.util.Excel;
import com.vr.util.PropertyUtil;
import com.vr.util.StringUtil;
import com.vr.util.ZipUtil;
import com.vr.util.response.Code;
import com.vr.util.response.CommonResult;
import com.vr.util.response.ResponseData;
import com.vr.util.response.Result;



@Controller
public class FileUploadController {
	@Autowired
	@Qualifier("questionDaoImpl")
	private QuestionDao questionDao;
	@Autowired
	@Qualifier("allInOnePCDaoImpl")
	private AllInOnePCDao allInOnePCDao;
	@Autowired
	@Qualifier("mobileBoxDaoImpl")
	private MobileBoxDaoImpl mobileBoxDaoImpl;
	@Autowired
	@Qualifier("pcHeadSetDaoImpl")
	/*
	 * 师兄写的，自媒体上传图片
	 */
	private PCHeadSetDao pcHeadSetDao;
	@RequestMapping(value = "/upload")
	@ResponseBody
	public CommonResult upload(@RequestParam(value = "file", required = false) MultipartFile file,
			HttpServletRequest request) {
		String type=file.getContentType();
		if(!type.startsWith("image")){
			return new CommonResult(Result.FILE_NOT_SUPPORT);
		}
		System.out.println("开始");
		String path = request.getSession().getServletContext().getRealPath("/static/img/evaluation");
		String originalFileName=file.getOriginalFilename();
		int index=originalFileName.lastIndexOf(".");
		String fileName = UUID.randomUUID()+originalFileName.substring(index);
		File targetFile = new File(path, fileName);
		if (!targetFile.exists()) {
			targetFile.mkdirs();
		}
		// 保存
		try {
			file.transferTo(targetFile);
		} catch (Exception e) {
			e.printStackTrace();
			return new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		CommonResult result = new CommonResult(Result.SUCCESS);
		String url=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()
		+request.getContextPath() + "/static/img/evaluation/" + fileName;
		result.setObject(url);
		
		System.out.println(url);
		return result;
	}
	
	/*
	 * 黄俊聪写的，压缩包上传图片文件
	 * 注意文件路径是在/etc/VR.properties文件中配置
	 */
	
	
	@RequestMapping(value = "/upload/imgs",method=RequestMethod.POST)
	@ResponseBody
	public CommonResult  uploadimgs(@RequestParam(value = "file", required = false) CommonsMultipartFile file,HttpServletRequest request) {
		System.out.println("begin");
		String type=file.getContentType();
		String urlprefix=PropertyUtil.readProperty("imgurl");
		//以‘/’来获取文件的路径后缀
		String[]strs=urlprefix.split("/");
		//忽略VR项目名前的所有路径
		if(strs.length<=3)
		{
			return new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		String pathsuffix="/";
		for(int i=4;i<strs.length;i++)
		{
			pathsuffix+=strs[i];
			pathsuffix+="/";
		}
	//通过配置文件来决定路径了
		String path = request.getSession().getServletContext().getRealPath(pathsuffix);
	System.out.println(path);
		if(!type.endsWith("zip")){
			return new CommonResult(Result.FILE_NOT_SUPPORT);
		//	return new CommonResult(Result.FILE_NOT_SUPPORT);
	}
		System.out.println(file.getContentType());
		File targetFile = new File("/tmp/", "Imgs.zip");
		if (!targetFile.exists()) {
			targetFile.mkdirs();
		}
		try {
		file.transferTo(targetFile);
		
	} catch (Exception e) {
		e.printStackTrace();
		return new CommonResult(Result.SYSTEM_EXCEPTION);
	}
		List<File>files=ZipUtil.upzipFile(targetFile, path);
		if(files.isEmpty())
		{
			System.out.println("null");
			return new CommonResult(Result.SYSTEM_EXCEPTION);
		}
		return new CommonResult(Result.SUCCESS);
	}
	
	/*
	 * 上传产品信息
	 */
    @ResponseBody
    @RequestMapping(value="/upload/product",method=RequestMethod.POST)
    public CommonResult savleProduct(@RequestParam("file") CommonsMultipartFile CMfile)throws IOException{
	
    	String type=CMfile.getContentType();
    	String name=CMfile.getOriginalFilename();
    	if(!type.endsWith("xlsx")&&!name.endsWith("xlsx")){	
			return new CommonResult(Result.FILE_NOT_SUPPORT);
	}
        //通过CommonsMultipartFile的方法直接写文件（注意这个时候）
      File file=new File("Products");
      CMfile.transferTo(file);
      Excel excel=new Excel();
      List<List<Map<String, String>>>list=excel.readExcelToObj(file);
      System.out.println(list.size());
      allInOnePCDao.updateAllInOnePCByExcel(list.get(1));
      pcHeadSetDao.updatePCHeadSet(list.get(0));
      mobileBoxDaoImpl.updateMobileBox(list.get(2));
		return new CommonResult(Result.SUCCESS);
    }

	
	
	
	
	
	
	
}
