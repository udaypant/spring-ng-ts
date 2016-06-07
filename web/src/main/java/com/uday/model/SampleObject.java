package com.uday.model;

import java.util.List;

public class SampleObject {
	private String stringProp;

	private List<String> simpleList;

	private List<InnerObject> complexList;

	public String getStringProp() {
		return stringProp;
	}

	public SampleObject() {
	}

	public SampleObject(String stringProp, List<String> simpleList, List<InnerObject> complexList) {
		super();
		this.stringProp = stringProp;
		this.simpleList = simpleList;
		this.complexList = complexList;
	}

	public void setStringProp(String stringProp) {
		this.stringProp = stringProp;
	}

	public List<String> getSimpleList() {
		return simpleList;
	}

	public void setSimpleList(List<String> simpleList) {
		this.simpleList = simpleList;
	}

	public List<InnerObject> getComplexList() {
		return complexList;
	}

	public void setComplexList(List<InnerObject> complexList) {
		this.complexList = complexList;
	}

}
