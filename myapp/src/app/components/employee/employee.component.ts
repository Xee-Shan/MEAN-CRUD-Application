import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/service/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any;
  count: number = 0;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeesData();
  }
  getEmployeesData() {
    this.employeeService.getData().subscribe(res => {
      this.employees = res;
    }); 
  }
  deleteData(id) {
    this.employeeService.deleteData(id).subscribe();
    this.getEmployeesData();
  }
}
