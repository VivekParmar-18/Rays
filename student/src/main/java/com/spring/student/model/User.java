package com.spring.student.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private String username;
    private String password;
    
    // Add other fields (e.g., email, roles)

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public User( String username, String password) {
		super();
	
		this.username = username;
		this.password = password;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

}
