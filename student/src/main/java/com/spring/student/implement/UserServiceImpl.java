package com.spring.student.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.spring.student.Service.UserService;
import com.spring.student.model.User;
import com.spring.student.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
	@Override
	public void save(User user) {

		System.out.println(user);
		userRepository.save(user);
	}

}
