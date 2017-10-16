package com.vr.dao;

import java.util.List;
import java.util.Map;

import com.vr.domain.MobileBox;
import com.vr.domain.MobileBox;


public interface MobileBoxDao {

	public boolean deleteMobileBox(MobileBox mobileBox);

	public boolean updateMobileBox(List<Map<String, String>>list);

	public List<Object> getMobileBoxByPage(int pageNo);

	public MobileBox getMobileBoxById(int id);
    public Object getMobileBoxSize();

    public void EditAllMobileBox(MobileBox mobileBox);
    
    
    public boolean updateMobileBox(MobileBox MobileBox);
    public List<Object>getMobileBoxOnsale();
    public List<Object>getMobileBoxOffsale();
    
    
    public boolean checkRepeated(String brand,String salesmodel,String productmodel);
}
