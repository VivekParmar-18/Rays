package com.spring.student.implement;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spring.student.Service.StudentService;
import com.spring.student.model.Student;
import com.spring.student.repository.StudentRepo;

@Service


public class StudentImpl implements StudentService {

	private StudentRepo studentRepo;

	public StudentImpl(StudentRepo studentRepo) {
		super();
		this.studentRepo = studentRepo;
	}

	@Override
	public String createStudent(Student student) {
		studentRepo.save(student);
		 return "{\"message\": \"" + student.getName() + " created successfully\"}";
	}

	@Override
	public String updateStudent(Student student) {
		 studentRepo.save(student);
		 return "{\"message\": \"" + student.getName() + " updated successfully\"}";
	}

	@Override
	public String deleteStudent(Integer enroll) {
		studentRepo.deleteById(enroll);
		   return "{\"message\": \"Enrollno " + enroll + " is deleted\"}";
	}

	@Override
	public Student getStudent(Integer enroll) {
		return studentRepo.findById(enroll).get();
	}

	@Override
	public List<Student> getAllStudents() {
		return studentRepo.findAll();
	}

}
