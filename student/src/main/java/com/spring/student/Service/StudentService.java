package com.spring.student.Service;

import java.util.List;

import com.spring.student.model.Student;

public interface StudentService {
	public String createStudent(Student student);

	public String updateStudent(Student student);

	public String deleteStudent(Integer enroll);

	public Student getStudent(Integer enroll);

	public List<Student> getAllStudents();
}
