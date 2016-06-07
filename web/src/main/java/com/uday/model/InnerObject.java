package com.uday.model;

public class InnerObject {
	private String prop1;

	private Integer prop2;

	private float prop3;

	public InnerObject() {
	}

	public InnerObject(String prop1, Integer prop2, float prop3) {
		super();
		this.prop1 = prop1;
		this.prop2 = prop2;
		this.prop3 = prop3;
	}

	public String getProp1() {
		return prop1;
	}

	public void setProp1(String prop1) {
		this.prop1 = prop1;
	}

	public Integer getProp2() {
		return prop2;
	}

	public void setProp2(Integer prop2) {
		this.prop2 = prop2;
	}

	public float getProp3() {
		return prop3;
	}

	public void setProp3(float prop3) {
		this.prop3 = prop3;
	}
}
