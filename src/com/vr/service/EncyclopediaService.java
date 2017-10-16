package com.vr.service;

import java.util.List;

import com.vr.domain.Encyclopedia;
import com.vr.util.response.Encyclopedia_all_HJC;

public interface EncyclopediaService {
	
	
	public boolean createEncyclopedia(Encyclopedia ency);
    public boolean deleteEncyclopedia(Encyclopedia ency);
    public boolean updateEncyclopedia(Encyclopedia ency);
	public Encyclopedia getEncyclopediaById(int id);
	public Encyclopedia getEncyclopediaByKeyword(String keyword);
	public List<Encyclopedia> getEncyclopediasByKeyword(String keyword);
	public List<Encyclopedia> getEncyclopediasByType(String type);
	public List<Encyclopedia> getEncyclopediasByType(String type,int pageNum,int pageSize);
	 public List<Encyclopedia> getEncyclopediasByKeyword(String keyword,int pageNum,int pageSize);
	 public List<String> getAllTypes();
	 public boolean up(int id);
	 public boolean down(int id);
	 public List<Encyclopedia_all_HJC> getEncylopediaAllService(int pageNum);
	 public boolean deleteEncylopedia(int id);
}