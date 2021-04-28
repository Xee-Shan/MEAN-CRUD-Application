import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get("http://localhost:5000/api/employees");
  }
  insertData() {
    return this.httpClient.post("http://localhost:5000/api/employee/add",data);
  }
}
