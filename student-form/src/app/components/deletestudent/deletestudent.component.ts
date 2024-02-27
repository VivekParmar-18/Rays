import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent implements OnInit {
  deleteForm!: FormGroup;
  students: any[] = [];
  sortKey: string = 'enroll';
  reverse: boolean = true; // Set to true to initially sort in descending order

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) { }

  ngOnInit(): void {
    this.deleteForm = this.formBuilder.group({
      enroll: null
    });

    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe(
      (response) => {
        console.log('Students retrieved successfully:', response);
        this.students = response;

        // Sort the students array based on enrollment number (descending)
        this.sortStudents('enroll');
      },
      (error) => {
        console.error('Error retrieving students data:', error);
      }
    );
  }

  onDelete() {
    const formData = this.deleteForm.value;
    const enrollment = formData.enroll;

    this.studentService.deleteStudent(enrollment).subscribe(
      () => {
        console.log('Student deleted successfully:', enrollment);
        alert("Student deleted successfully.");
        this.getAllStudents(); // Refresh the student list after deletion
        this.deleteForm.reset();
      },
      (error) => {
        console.error('Error deleting student:', error);
        alert("An error occurred while deleting the student. Please try again later.");
      }
    );
  }

  sortBy(key: string) {
    this.sortKey = key;
    this.reverse = !this.reverse;

    // Sort the students array based on the selected key
    this.sortStudents(key);
  }

  private sortStudents(key: string) {
    this.students.sort((a, b) => {
      if (a[key] < b[key]) return 1; // Sort in descending order
      if (a[key] > b[key]) return -1;
      return 0;
    });

    if (!this.reverse) {
      this.students.reverse(); // Reverse the array if sorting in ascending order
    }
  }
}
