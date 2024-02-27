import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../../services/student.service'; // Import your service

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent  {
  checkoutForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {}

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      enroll: null,
      name: '',
      address: '',
      cgpa: null
    });
  }

  onsubmit() {
    const formData = this.checkoutForm.value;
    console.log(formData); 
    this.studentService.addStudent(formData).subscribe(
          (response) => {
            console.log('Student added successfully:', response);
            alert("Data successfully added");
            this.checkoutForm.reset(); // Reset the form
          },
          (error) => {
            console.error('Error adding student:', error);
          }
        );
  }
}
