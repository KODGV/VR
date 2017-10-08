package com.vr.dao;

import java.util.List;
import java.util.Map;

import com.vr.domain.AllInOnePc;

public interface AllInOnePCDao {
    public boolean deleteAllInOnePC(AllInOnePc allInOnePC);
    public boolean updateAllInOnePCByExcel(List<Map<String, String>>list);
    public boolean updateAllInOnePC(AllInOnePc allInOnePc);
    public List<Object> getAllInOnePCByPage(int pageNo);
    public AllInOnePc getAllInOnePCById(int id);
    public Object getAllInOneSize();
    public List<Object>getAllInOnePCOnsale();
    public List<Object>getAllInOnePCOffsale();
}
