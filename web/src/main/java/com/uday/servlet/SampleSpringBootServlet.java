package com.uday.servlet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.uday")
public class SampleSpringBootServlet {
	public static void main(String[] args) {
		SpringApplication.run(SampleSpringBootServlet.class, args);
	}
}
