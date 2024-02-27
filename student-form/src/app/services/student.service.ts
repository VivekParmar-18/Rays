import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { catchError } from 'rxjs/operators';


const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  // // Fetch all students
  getAllStudents(): Observable<any[]> {
    return this.http.get<Student[]>(baseUrl+"/api/student");
  }
    getStudent(enroll: any): Observable<any> {
      return this.http.get(baseUrl+"/api/student/"+enroll);
    }

  // Add a new student
  addStudent(student: any): Observable<any> {
    return this.http.post(baseUrl+"/api/student", student);
  }

  // Update an existing student
  updateStudent(studentData: any, updateId:any): Observable<any> {
    const url = baseUrl + "/api/student/" + updateId;
    return this.http.put(url, studentData).pipe(
      catchError((error) => {
        console.error('Error updating student:', error);
        throw error; // Rethrow the error
      })
    );
  }
  // Delete a student
  deleteStudent(studentId: number): Observable<void> {
    return this.http.delete<void>(baseUrl+"/api/student/"+studentId);
  }
}