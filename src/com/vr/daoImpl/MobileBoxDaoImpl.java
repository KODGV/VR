package com.vr.daoImpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.MobileBoxDao;
import com.vr.domain.MobileBox;
import com.vr.domain.MobileBox;
import com.vr.util.HibernateUtils;
import com.vr.util.PropertyUtil;

@Repository
@Qualifier("mobileBoxDaoImpl")
public class MobileBoxDaoImpl extends HibernateUtils implements MobileBoxDao{



	@Override
	public boolean deleteMobileBox(MobileBox mobileBox) {
		return delete(mobileBox);
	}

	@Override
	public boolean updateMobileBox(List<Map<String, String>>list) {
		String urlprefix=PropertyUtil.readProperty("imgurl");
		for (Map<String, String> map : list) {
			if(map.size()==0)
				break;
			MobileBox mobileBox = new MobileBox();
			mobileBox.setAdapterphone(map.get("适配手机"));
			mobileBox.setBluerayirradiance(map.get("蓝光辐照度（W·m^-2·sr^-1）"));
			mobileBox.setBoundarywarning(map.get("边界警示"));
			mobileBox.setBrand(map.get("品牌"));
			mobileBox.setBroadbandcharacteristicvoltageofearphone(map.get("耳机的宽带特征电压（mV）"));	
			mobileBox.setCvsmean(map.get("CVS均值"));
			mobileBox.setElectrostaticdischarge(map.get("静电放电"));
			mobileBox.setFieldangle(map.get("视场角（°）"));
			//mobileBox.setMaximumoutputvoltage(map.get("播放器最大输出电压（mV）"));
			mobileBox.setMeanchangeofvisualacuity(map.get("视力变化均值"));
			//mobileBox.setMonocularresolution(map.get("单眼分辨率"));
			mobileBox.setProductmodel(map.get("产品型号"));
			mobileBox.setRadiationdisturbance(urlprefix+map.get("辐射骚扰"));
			//mobileBox.setRefreshrate(map.get("刷新率（Hz）"));
			mobileBox.setRemark(map.get("备注"));
			mobileBox.setSalesmodel(map.get("销售型号（名）"));
			//mobileBox.setScreentype(map.get("屏幕类型"));
			//mobileBox.setSoundpressurelevel(map.get("声压级（dB(A)）"));
			mobileBox.setSsqmean(map.get("SSQ均值"));
			mobileBox.setSystemdelay(map.get("系统延迟(ms)"));
			mobileBox.setTrackingmode(map.get("跟踪模式"));
			mobileBox.setTrackingrange(map.get("跟踪范围（m）"));
			mobileBox.setWeight(map.get("重量(kg)"));
			mobileBox.setWorkingtemperature(map.get("工作温度(℃)"));
			mobileBox.setPicLocation(urlprefix+map.get("图片"));
			mobileBox.setOffsale(1);
			save(mobileBox);
		
		}
		return true;
	}

	@Override
	public List<Object> getMobileBoxByPage(int pageNo) {
		String hql = "from MobileBox m where m.offsale=0";
		return listpage(hql, pageNo, 9);
	}

	@Override
	public MobileBox getMobileBoxById(int id) {
		String hql="from MobileBox m where m.id=?";
		return (MobileBox) findByHql(hql,new Object[]{id});
	}

	@Override
	public Object getMobileBoxSize() {
		// TODO Auto-generated method stub
		String hql="select count(*) from MobileBox m where m.offsale=0";
		return getSize(hql);
	
	}

	@Override
	public void EditAllMobileBox(MobileBox mobileBox) {
		// TODO Auto-generated method stub
		update(mobileBox);
		}

	@Override
	public List<Object> getMobileBoxOnsale() {
		// TODO Auto-generated method stub
		String hql = "from MobileBox p where p.offsale=0";		
		return findByHqlGetList(hql, new Object[]{});
	}

	@Override
	public boolean updateMobileBox(MobileBox MobileBox) {
		// TODO Auto-generated method stub
		return update(MobileBox);
	}

	@Override
	public List<Object> getMobileBoxOffsale() {
		// TODO Auto-generated method stub
		String hql = "from MobileBox p where p.offsale=1";		
		return findByHqlGetList(hql, new Object[]{});
	}
}
