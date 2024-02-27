package com.spring.student.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Student {
	@Id
	private Integer enroll;
	private String name;
	private String address;
	private float cgpa;

	public Student() {
		super();
	
	}

	public Student(Integer enroll, String name, String address, float cgpa) {
		super();
		this.enroll = enroll;
		this.name = name;
		this.address = address;
		this.cgpa = cgpa;
	}

	public Integer getEnroll() {
		return enroll;
	}

	public void setEnroll(Integer enroll) {
		this.enroll = enroll;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public float getCgpa() {
		return cgpa;
	}

	public void setCgpa(float cgpa) {
		this.cgpa = cgpa;
	}

}
