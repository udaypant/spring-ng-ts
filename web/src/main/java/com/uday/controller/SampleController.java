package com.uday.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.uday.model.SampleObject;
import com.uday.model.User;

@Controller()
@RequestMapping("/sample")
public class SampleController {

	@RequestMapping(method=RequestMethod.GET, value="/getMessage/{name}")
	@ResponseBody
	public User getMessage(@PathVariable("name") String name)
	{
		return new User(name);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/samplePostMethod")
	@ResponseBody
	public SampleObject samplePostMethod(SampleObject object)
	{
		return object;
	}
}
