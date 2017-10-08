package com.vr.vo;


public enum OrderType {

	TIME(1),//按照时间排序
	HOT(2);//按照热度排序
	private int type;
	private OrderType(int type){
		this.type=type;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	
	public static OrderType getOrderType(int type){
		for(OrderType orderType:OrderType.values()){
			if(orderType.getType()==type){
				return orderType;
			}
		}
		return null;
	}
}
