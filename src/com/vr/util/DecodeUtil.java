package com.vr.util;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.io.File;


import sun.misc.BASE64Decoder;

public class DecodeUtil {
    public static String getURLDecoderString(String str) {
        String result = "";
        if (null == str) {
            return "";
        }
        try {
            result = java.net.URLDecoder.decode(str, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return result;
    }
	public static boolean generateImage(String imgStr, String path,String fileName) {
	if (imgStr == null)
		return false;
		BASE64Decoder decoder = new BASE64Decoder();
	
		// 解密
			byte[] b;
			try {
				b = decoder.decodeBuffer(imgStr);
				for (int i = 0; i < b.length; ++i) {
					if (b[i] < 0) {
					b[i] += 256;
					}
					}
				File targetFile = new File(path, fileName);
				OutputStream out = new FileOutputStream(targetFile);
				out.write(b);
				out.flush();
				out.close();
				return true;
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return false;
			}
		// 处理数据
	}
}
