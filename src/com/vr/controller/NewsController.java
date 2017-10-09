package com.vr.controller;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.xmlbeans.impl.common.SystemCache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.annotation.JsonView;
import com.vr.domain.MessageLeaving;
import com.vr.domain.News;
import com.vr.domain.User;
import com.vr.service.NewsService;
import com.vr.view.MessageLeavingView;
import com.vr.view.NewsView;
import com.vr.util.*;


@Controller
public class NewsController {
	@Autowired
	@Qualifier("newsServiceImpl")
	private NewsService newsService;

	public NewsService getNewsService() {
		return newsService;
	}

	public void setNewsService(NewsService newsService) {
		this.newsService = newsService;
	}

	@ResponseBody
	@RequestMapping(value = "/news/{nid}")
	public News getNews(@PathVariable Integer nid) {
		System.out.print(nid);
		News news = newsService.getNewsById(nid);
		System.out.print(news == null);
		if (news != null) {
			newsService.injectContent(news);
		}
		return news;
	}
	
	@ResponseBody
	@RequestMapping(value = "/news_delete/{nid}")
	public void deleteNews(@PathVariable Integer nid) {
		System.out.print(nid);
		newsService.deleteNews(nid);
		File f = new File("/home/news/test" + (nid - 1) + ".txt");
		f.delete();
	}

	@ResponseBody
	@RequestMapping(value = "/news_list/{page}/{type}")
	public List<News> getNewsByPage(@PathVariable Integer page,@PathVariable Integer type) {
			System.out.print(page);
			if(type == 0) {
				List<News> news = newsService.getNewsByPage(page, 10, type);
				return news;
			}
			else {
				List<News> news = newsService.getNewsByPage(page, 5, type);
				return news;
			}
	}
	@ResponseBody
	@RequestMapping(value = "/news_lists/{page}/{type}")
	public List<News> getNewsByPages(@PathVariable Integer page,@PathVariable Integer type) {
			System.out.print(page);
				List<News> news = newsService.getNewsByPage(page, 10, type);
				if(news.size()!=0)
				System.out.println(news.get(0).getPicLocation());
				return news;
	}

	
	@ResponseBody
	@RequestMapping(value = "/NewsSubmit")
	@JsonView(NewsView.Tag.class)
	public void NewsSubmit(@RequestBody News n) throws UnsupportedEncodingException {
		String path_=n.getPath();
		String path="/"+path_+".txt";
		String pathset=path.split(".txt")[0];
		System.out.println(path_);
		System.out.println(pathset);
		n.setPath(pathset);
		File f = new File(path);
		f.setWritable(true, false);
		try {
			if(FileOperation.createFile(f)) {
				FileOperation.writeTxtFile(n.getContent(), f);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		newsService.updateNews(n);
		
	}
	
	@ResponseBody
	@RequestMapping(value = "/NewsRelease")
	@JsonView(NewsView.Tag.class)
	public void NewsRelease(@RequestBody News n) {
		System.out.println("type");
		System.out.println(n.getType());
		Integer id = newsService.getNewsId();
		String path="home/news/test"+id;
		n.setPath(path);
		newsService.createNews(n);
		File f = new File("/"+path+".txt");
		f.setWritable(true, false);
		try {
			if(FileOperation.createFile(f)) {
				FileOperation.writeTxtFile(n.getContent(), f);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}


	@ResponseBody
	@RequestMapping(value = "/news/upvote/{nid}")
	public Integer upvoteNews(@PathVariable Integer nid) {
		try {
			News news = newsService.getNewsById(nid);
			Integer upvote = news.getUpvote();
			if (upvote == null) {
				upvote = 1;
			} else {
				upvote += 1;
			}
			news.setUpvote(upvote);
			newsService.updateNews(news);
			return news.getUpvote();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
    }
	
	@ResponseBody
	@RequestMapping(value="/news/downvote/{nid}")
	public Integer downvoteNews(@PathVariable Integer nid){
		try {
			News news = newsService.getNewsById(nid);
			Integer downvote = news.getDownvote();
			if (downvote == null) {
				downvote = 1;
			} else {
				downvote += 1;
			}
			news.setDownvote(downvote);
			newsService.updateNews(news);
			return news.getDownvote();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
