package com.spring.student.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.spring.student.Service.StudentService;
import com.spring.student.model.Student;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class StudentContollers {

	StudentService studentService;

	public StudentContollers(StudentService studentService) {
		super();
		this.studentService = studentService;
	}

	@GetMapping("/student/{enroll}")
	public Student getStudenDetails(@PathVariable Integer enroll) {
		// this.student=student;
		return studentService.getStudent(enroll);
	}

	@GetMapping("/student")
	public List<Student> getAllStudenDetails() {
		// this.student=student;
		return studentService.getAllStudents();
	}

	@PostMapping("/student")
	public String createStudentDetails(@RequestBody Student student) {
		studentService.createStudent(student);
		return  studentService.createStudent(student);
	}

	@PutMapping("/student/{enroll}")
	public String updateStudentDetails(@PathVariable Integer enroll, @RequestBody Student student) {
		
		return studentService.updateStudent(student);
	}

	@DeleteMapping("student/{enroll}")
	public String deleteStudentDetails(@PathVariable Integer enroll) {
		studentService.deleteStudent(enroll);
		return studentService.deleteStudent(enroll);
	}
}
