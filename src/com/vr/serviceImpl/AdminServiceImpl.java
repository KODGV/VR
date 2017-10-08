package com.vr.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.config.PMConfig;
import com.vr.dao.AdminDao;
import com.vr.domain.Admin;
import com.vr.service.AdminService;
import com.vr.util.EncodeUtil;
import com.vr.util.Mail;
import com.vr.util.response.Code;

@Service
@Qualifier("adminServiceImpl")
public class AdminServiceImpl implements AdminService {
	@Autowired
	@Qualifier("adminDaoImpl")
	private AdminDao adminDao;

	public AdminDao getUserDao() {
		return adminDao;
	}

	public void setUserDao(AdminDao userDao) {
		this.adminDao = userDao;
	}

	
	@Override
	public Admin getAdminById(Integer id) {
		return adminDao.getAdminById(id);
	}

	
}
