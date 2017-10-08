package com.vr.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.text.NumberFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.vr.dao.AdminDao;
import com.vr.dao.AllInOnePCDao;
import com.vr.dao.QuestionDao;
import com.vr.dao.UserDao;
import com.vr.daoImpl.AllInOnePCDaoImpl;
import com.vr.daoImpl.MessageDaoImpl;
import com.vr.daoImpl.UserDaoImpl;
import com.vr.domain.Admin;
import com.vr.domain.AllInOnePc;
import com.vr.domain.MessageLeaving;
import com.vr.domain.MessageResponse;
import com.vr.service.AnswerService;
import com.vr.service.MessageLeavingService;
import com.vr.util.*;

import sun.misc.BASE64Decoder;
@Controller
public class t {
	@Test
	public void test() throws IOException {
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
//		UserDao adminDao=(UserDaoImpl)ctx.getBean("userDaoImpl");
//		System.out.println(adminDao.deleteUser(3));
String i="data:image/png;base64";
String[] i1=i.split("image/");
String[] i2=i1[1].split(";");
System.out.println(i2[0]);
	}
	@RequestMapping("/home")
	public String tdsd(Map<String, String> map)
	{
		System.out.println(map.get("textarea"));
		return "home";
	}
	@RequestMapping("/hello")
	public String tds()
	{
		return "hello";
	}
	
}
