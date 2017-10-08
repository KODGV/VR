package com.vr.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.*;
import org.junit.Test;

public class Excel {

	/**
	 * 读取excel数据
	 * 
	 * @param path
	 */
	public List<List<Map<String, String>>> readExcelToObj(File file) throws IOException {
		System.out.println(file.getName());
		FileInputStream filein = new FileInputStream(file);
		Workbook wb0 = new XSSFWorkbook(filein);
		Sheet sht0 = wb0.getSheetAt(0);
		Map<Integer, String> PCheaders = new HashMap<>();
		Map<Integer, String> Oneheaders = new HashMap<>();
		Map<Integer, String> Boxheaders = new HashMap<>();
		List<Map<String, String>> PClist = new ArrayList<>();
		List<Map<String, String>> Onelist = new ArrayList<>();
		List<Map<String, String>> Boxlist = new ArrayList<>();
		List<List<Map<String, String>>> list = new ArrayList<>();
		boolean PCfalg = false;
		boolean Oneflag = false;
		boolean Boxflag = false;
		boolean nullColumn = true;
		// 注意r.getCell()可能会出现null，进不去CELL_TYPE_BLANK的比较，所以在加了层判断null
		// 带有'/'也默认为null了
		for (Row r : sht0) {
			if (r.getCell(0).toString().equals("PC头显")) {
				for (int i = 0; i < r.getLastCellNum(); i++) {
					if (r.getCell(i) == null)
						continue;
					if (r.getCell(i).getCellType() != XSSFCell.CELL_TYPE_BLANK)
						PCheaders.put(r.getCell(i).getColumnIndex(), r.getCell(i).toString());
				}
				PCfalg = true;
				Oneflag = false;
				Boxflag = false;
				continue;
			}
			if (r.getCell(0).toString().equals("一体机")) {
				for (int i = 0; i < r.getLastCellNum(); i++) {
					if (r.getCell(i) == null)
						continue;
					if (r.getCell(i).getCellType() != XSSFCell.CELL_TYPE_BLANK)
						Oneheaders.put(r.getCell(i).getColumnIndex(), r.getCell(i).toString());
				}
				PCfalg = false;
				Oneflag = true;
				Boxflag = false;
				continue;
			}
			if (r.getCell(0).toString().equals("手机盒子")) {

				for (int i = 0; i < r.getLastCellNum(); i++) {
					if (r.getCell(i) == null)
						continue;
					if (r.getCell(i).getCellType() != XSSFCell.CELL_TYPE_BLANK) {
						Boxheaders.put(r.getCell(i).getColumnIndex(), r.getCell(i).toString());
					}
				}
				PCfalg = false;
				Oneflag = false;
				Boxflag = true;
				continue;
			}
			if (PCfalg) {
				Map<String, String> PCcontent = new HashMap<>();
				for (int i = 0; i < PCheaders.size(); i++) {

					if (r.getCell(i) == null || r.getCell(i).getCellType() == XSSFCell.CELL_TYPE_BLANK
							|| r.getCell(i).toString().equals("/")) {
						PCcontent.put(PCheaders.get(i), null);
					} else {
						PCcontent.put(PCheaders.get(i), r.getCell(i).toString());
						nullColumn = false;
					}
				}
				if (!nullColumn)
					PClist.add(PCcontent);
				nullColumn = true;

			}

			if (Oneflag) {
				Map<String, String> Onecontent = new HashMap<>();
				for (int i = 0; i < Oneheaders.size(); i++) {

					if (r.getCell(i) == null || r.getCell(i).getCellType() == XSSFCell.CELL_TYPE_BLANK
							|| r.getCell(i).toString().equals("/")) {
						Onecontent.put(Oneheaders.get(i), null);
					} else {
						Onecontent.put(Oneheaders.get(i), r.getCell(i).toString());
						nullColumn = false;
					}

				}
				if (!nullColumn)
					Onelist.add(Onecontent);
				nullColumn = true;

			}
			if (Boxflag) {
				Map<String, String> Boxcontent = new HashMap<>();
				for (int i = 0; i < Boxheaders.size(); i++) {

					if (r.getCell(i) == null || r.getCell(i).getCellType() == XSSFCell.CELL_TYPE_BLANK
							|| r.getCell(i).toString().equals("/")) {
						Boxcontent.put(Boxheaders.get(i), null);
					} else {
						Boxcontent.put(Boxheaders.get(i), r.getCell(i).toString());
						nullColumn = false;
					}

				}
				if (!nullColumn)
					Boxlist.add(Boxcontent);
				nullColumn = true;
			}
		}
		list.add(0, PClist);
		list.add(1, Onelist);
		list.add(2, Boxlist);
		return list;
	}

}
