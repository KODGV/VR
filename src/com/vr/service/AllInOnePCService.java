package com.vr.service;

import java.util.HashMap;
import java.util.List;

import com.vr.domain.AllInOnePc;
import com.vr.util.response.CommonResult;

public interface AllInOnePCService {


    
    public List<AllInOnePc> getAllInOnePCByPage(int pageNo);
    public AllInOnePc getAllInOnePCById(int id);
    public CommonResult getAllInOnePCAll(String condition);
    public boolean EditAllInOnePCAll(AllInOnePc allInOnePc);
    public boolean onSale(int id);
    public boolean offSale(int id);
    public boolean deleteAllInOnePCByList(List<Object>objct);
}
