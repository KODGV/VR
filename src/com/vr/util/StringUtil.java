package com.vr.util;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringUtil {
public static boolean isEmpty(String s)
{
	if(s==null||s.length()<=0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

public  static List<String> getImgSrc(String htmlStr) {  
    String img = "";  
    Pattern p_image;  
    Matcher m_image;  
    List<String> pics = new ArrayList<String>();  
//   String regEx_img = "<img.*src=(.*?)[^>]*?>"; //图片链接地址  
    String regEx_img = "<img.*src\\s*=\\s*(.*?)[^>]*?>";  
    p_image = Pattern.compile(regEx_img, Pattern.CASE_INSENSITIVE);  
    m_image = p_image.matcher(htmlStr);  
    while (m_image.find()) {  
        img = img + "," + m_image.group();  
        // Matcher m =  
        // Pattern.compile("src=\"?(.*?)(\"|>|\\s+)").matcher(img); //匹配src  
        Matcher m = Pattern.compile("src\\s*=\\s*\"?(.*?)(\"|>|\\s+)").matcher(img);  
        while (m.find()) {  
            pics.add(m.group(1));  
        }  
    }  
    return pics;  
}  


}
