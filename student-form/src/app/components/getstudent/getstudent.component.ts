import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-getstudent',
  templateUrl: './getstudent.component.html',
  styleUrl: './getstudent.component.css'
})
export class GetstudentComponent {
  getdataForm!: FormGroup;
  // getstudents: any[] = []; 
  indo: any[] = [];
  store : any[] = [];
  
  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {}

  ngOnInit(): void {
    const enrollmentInput = document.getElementById('studentId') as HTMLInputElement;

    this.getdataForm = this.formBuilder.group({
      enroll: [''] 
    });
    
  }

  onGet() {
    const formData = this.getdataForm.value;
    const enrollment = formData.enroll;
  
    // Check if the enrollment number already exists in the indo array
    const existingStudent = this.indo.find(student => student.enroll === enrollment);
  
    if (existingStudent) {
      // If the student already exists, show an alert message or handle it as needed
      alert("💀💀 Douplicate entrey not allowed 💀💀");
    } else {
      // If the student does not exist, fetch it from the service and add it to the indo array
      this.studentService.getStudent(enrollment).subscribe(
        (response) => {
          
          console.log('Student added successfully:', response);
          // alert("The data is in console");
          this.indo.push(response); // Push the new student to the indo array
          this.getdataForm.reset();
        },
        (error) => {
          alert("Data not Found");
          console.error('Error occurred:', error);
          this.getdataForm.reset();
        }
      );
    }
  }
onGetall() {
this.studentService. getAllStudents().subscribe(
        (response) => {
          console.log('Student added successfully:', response);
          // alert("The data is in consol");
         this.store=response;
        });
      }
}
