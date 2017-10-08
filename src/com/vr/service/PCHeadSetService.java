package com.vr.service;

import java.util.HashMap;
import java.util.List;

import com.vr.domain.PcheadSet;
import com.vr.util.response.CommonResult;

public interface PCHeadSetService {

  
    public List<PcheadSet> getPCHeadSetByPage(int pageNo);
    public PcheadSet getPCHeadSetById(int id);
    public CommonResult getPCHeadSetAll(String condition);
    public boolean modifyPCHeadSet(PcheadSet PCHeadSet);
    public boolean onSale(int id);
    public boolean offSale(int id);
    public boolean deletePCHeadSetByList(List<Object>objct);
}
