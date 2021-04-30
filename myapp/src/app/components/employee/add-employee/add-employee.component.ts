import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/service/employee.service";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  data;
  constructor(private employeeService:EmployeeService, private formBuilder: FormBuilder,private router: Router) { }

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

  f() {
    return this.form.controls;
  }

  insertData() {
    // this.employeeService.insertData().subscribe();
    this.submitted = true;
    // alert(this.form.value.name);
    this.employeeService.insertData(this.form.value).subscribe(res => {
      this.data = res;
    });
    this.router.navigateByUrl('/');
  }

}
