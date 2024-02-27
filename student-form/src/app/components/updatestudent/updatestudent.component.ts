import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service'; // Import your service

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html', // Adjust the template URL
  styleUrls: ['./updatestudent.component.css'], // Adjust the style URLs
})
export class UpdatestudentComponent implements OnInit {
  updateForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {}

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      updateId: ['', Validators.required],
      studentId: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      cgpa: ['', [Validators.required, Validators.min(5), Validators.max(10)]],
    });
  }

  onUpdate(): void {
    const formData = this.updateForm.value;

    // Check if updateId and studentId are different
   
      // Create an object with all fields except updateId
      const studentData = {
        enroll: formData.studentId,
        name: formData.name,
        address: formData.address,
        cgpa: formData.cgpa,
      };

    console.log(studentData); 
      this.studentService.updateStudent(studentData, formData.updateId).subscribe(
        (response) => {
          console.log('Student updated successfully:', response);
          alert("Data updated successfully");
           this.updateForm.reset();
        },
        (error) => {
          console.error('Error updating student:', error);
          // Handle error (e.g., show an error message)
        }
      );
    } 
  }

