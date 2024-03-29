package com.spring.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.spring.student.model.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {

}
