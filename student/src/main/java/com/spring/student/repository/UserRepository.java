package com.spring.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.student.model.User;

public interface UserRepository extends JpaRepository<User, String> {
    User findByUsername(String username);
}
