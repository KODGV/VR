package com.vr.util;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertyUtil {
	
	
public static String readProperty(String key) 
{
	 Properties prop = new Properties();  
	 try {
		InputStream in = new BufferedInputStream (new FileInputStream("/etc/VR.properties"));
		prop.load(in);
		return prop.getProperty(key);
		 
	 } catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		return null;
	}
	
}
public static void creat()
{
	File file=new File("t");
	System.out.println(file.getAbsolutePath());
	return ;
}
}
