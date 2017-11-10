package com.vr.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.RandomAccessFile;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

public class FileOperation {

	/**
	 * �����ļ�
	 * 
	 * @param fileName
	 * @return
	 */
	public static boolean createFile(File fileName) throws Exception {
		boolean flag = false;
		try {
			if (fileName.exists()) {
				fileName.delete();
				fileName.createNewFile();
				flag = true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return true;
	}

	/**
	 * ��TXT�ļ�����
	 * 
	 * @param fileName
	 * @return
	 */
	public static String readTxtFile(File fileName) throws Exception {
		String result = null;
		FileReader fileReader = null;
		BufferedReader bufferedReader = null;
		try {
			fileReader = new FileReader(fileName);
			bufferedReader = new BufferedReader(fileReader);
			try {
				String read = null;
				while ((read = bufferedReader.readLine()) != null) {
					result = result + read + "\r\n";
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (bufferedReader != null) {
				bufferedReader.close();
			}
			if (fileReader != null) {
				fileReader.close();
			}
		}
		System.out.println("��ȡ�������ļ������ǣ�" + "\r\n" + result);
		return result;
	}

	public static boolean writeTxtFile(String content, File fileName) throws Exception {
		RandomAccessFile mm = null;
		boolean flag = false;
		FileOutputStream o = null;
		try {
			o = new FileOutputStream(fileName);
			o.write(content.getBytes("utf8"));
			o.close();
			// mm=new RandomAccessFile(fileName,"rw");
			// mm.writeBytes(content);
			flag = true;
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally {
			if (mm != null) {
				mm.close();
			}
		}
		return flag;
	}

	public static void contentToTxt(String filePath, String content) {
		String str = new String(); // ԭ��txt����
		String s1 = new String();// ���ݸ���
		try {
			File f = new File(filePath);
			if (f.exists()) {
				System.out.print("�ļ�����");
			} else {
				System.out.print("�ļ�������");
				f.createNewFile();// �������򴴽�
			}
			BufferedReader input = new BufferedReader(new FileReader(f));

			while ((str = input.readLine()) != null) {
				s1 += str + "\n";
			}
			System.out.println(s1);
			input.close();
			s1 += content;

			BufferedWriter output = new BufferedWriter(new FileWriter(f));
			output.write(s1);
			output.close();
		} catch (Exception e) {
			e.printStackTrace();

		}
	}

	/*
	 * 可能缺少异常捕获 处理编辑器文本图片
	 */
	public static String base64img(String mse,String path,String url) {
		if(mse.split("base64").length<2)
			{
			return mse;}
		
		// 创建该目录
		File dir = new File(path);
		if (!dir.exists()) {
			System.out.println(dir.mkdirs());
		}
		// 解码
		String decode_str = DecodeUtil.getURLDecoderString(mse);
		String[] strings = decode_str.split("<img");
		System.out.println(strings.length);
		String str_final=mse;
		int i = 0;
		while (i < strings.length) {
			if (i % 2 == 0) {
				i++;
				continue;
			}
			String img_behind = "<img "+strings[i];
			String img = img_behind.split(">")[0]+">";
			// 预处理替换符号
			String str_replacespace = img.replaceAll(" ", "+");
			String s = str_replacespace.replace("img++src", "img src");
			// 开始切割src的路径
		
				String[] str3 = s.split("base64,");
				// 获取图片的后缀名
				String type = str3[0].split("image/")[1].split(";")[0];
				// 创建路径
				String fileName = UUID.randomUUID() + "." + type;
				url+=fileName;
				String imgtag="<img src=\""+url+"\">";
				// base64解码
				DecodeUtil.generateImage(str3[1], path, fileName);
				str_final = str_final.replace(s, imgtag);
			
			i++;
		}
		System.out.println("---------------------");
		System.out.println(str_final);
		return str_final;
	}

}