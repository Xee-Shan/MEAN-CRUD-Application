import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/service/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeesData();
  }
  getEmployeesData() {
    this.employeeService.getData().subscribe(res => {
      console.log(res);
      this.employees = res;
    }); 
  }
}
