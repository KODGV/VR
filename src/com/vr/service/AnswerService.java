package com.vr.service;

import java.util.List;

import com.vr.util.request.Statisticalanswer;

public interface AnswerService {
public List<Statisticalanswer>getStatisticalData(String productname,String producttype);
public List<Statisticalanswer>adminGetStatisticalData();
}
