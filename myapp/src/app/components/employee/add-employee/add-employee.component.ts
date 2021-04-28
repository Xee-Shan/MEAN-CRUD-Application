import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/service/employee.service";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  form: FormGroup;

  constructor(private employeeService:EmployeeService, private formBuilder: FormBuilder) { }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      salary: ['',Validators.required]

    })
  }
  ngOnInit(): void {
    this.createForm();
  }
  insertData() {
    this.employeeService.insertData().subscribe();
  }

}
