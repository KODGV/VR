package com.vr.service;

import java.util.HashMap;
import java.util.List;

import com.vr.domain.MobileBox;
import com.vr.domain.MobileBox;
import com.vr.util.response.CommonResult;

public interface MobileBoxService {


    public List<MobileBox> getMobileBoxByPage(int pageNo);
    public MobileBox getMobileBoxById(int id);
    public CommonResult getMobileBoxAll(String condition);
    public boolean modifyMobileBox(MobileBox MobileBox);
    public boolean onSale(int id);
    public boolean offSale(int id);
    public boolean deleteMobileBoxByList(List<Object>objct);
}
