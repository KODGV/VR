package com.vr.serviceImpl;

import java.io.BufferedReader;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.NewsDao;
import com.vr.domain.News;
import com.vr.service.NewsService;
import com.vr.util.*;
@Service
@Qualifier("newsServiceImpl")
public class NewsServiceImpl implements NewsService{
	@Autowired
	@Qualifier("newsDaoImpl")
	private NewsDao newsDao;


	public boolean createNews(News news) {
		return newsDao.createNews(news);
	}
	
	public Integer getNewsId() {
		return newsDao.getNewsId();
	} 

	public void deleteNews(Integer id) {
		newsDao.deleteNews(id);
	}

	public boolean updateNews(News news) {
		return newsDao.updateNews(news);
	}
	
    public News getNewsById(Integer id){
    	return newsDao.getNewsById(id);
    }
    
	public News injectContent(News news) {
		String path = news.getPath().substring(0,news.getPath().length());
		System.out.print(path);
		int news_id = news.getId()-1;
		BufferedReader bf = null;
		String content = "";
		StringBuilder sb = new StringBuilder();
		try {
			bf =new BufferedReader(new InputStreamReader(new FileInputStream("/"+path+".txt"), "GBK")); 
			//bf =new BufferedReader(new InputStreamReader(new FileInputStream("D:\\news\\test" + news_id + ".txt"), "GBK"));  
			while (content != null) {
				content = bf.readLine();
				if (content == null) {
					break;
				}
				sb.append(content);
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally{
			try {
				bf.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
        news.setContent(sb.toString());
		return news;
	}
	
	public List<News> getNewsByPage(int pageNo,int pageNum, Integer type){
		List<Object> newsObj=newsDao.getNewsByPage(pageNo, pageNum, type);
		List<News> news=new ArrayList<News>();
		for(Object o:newsObj){
			news.add((News)o);
		}
		return news;
	}
	public void setEditorId(News news,Integer eid){
		news.setEditorId(eid);
		updateNews(news);
	}
    
	public void pushNews(News news){
		news.setIsPush(1);
		updateNews(news);
	}
		
}
