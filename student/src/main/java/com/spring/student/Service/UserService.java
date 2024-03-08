package com.spring.student.Service;

import com.spring.student.model.User;

public interface UserService {
	 User findByUsername(String username);
	 void save(User user);
}
