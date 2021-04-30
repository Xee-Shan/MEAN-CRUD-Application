import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee = new Employee();
  id: any;
  data:any;
  constructor(private router: Router, private employeeService: EmployeeService, private route: ActivatedRoute) { }

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl(''),
  }); 

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }
  getData() {
    this.employeeService.getDataById(this.id).subscribe(res => {
      this.data = res;
      this.employee = this.data;
      this.form = new FormGroup({
        name: new FormControl(this.employee.name),
        salary: new FormControl(this.employee.salary),
        email: new FormControl(this.employee.email),
      });
    })
  }
  updateData() {
    this.employeeService.updateData(this.id, this.form.value).subscribe();
    this.router.navigateByUrl('/'); 
  }
}
