import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<[any]> {
    return this.httpClient.get<any>(environment.apiUrl+"/employees");
  }
  insertData(data) {
    return this.httpClient.post(environment.apiUrl+"/employee/add",data);
  }
  getDataById(id) {
     return this.httpClient.get(environment.apiUrl+"/employee/"+id);
  }
  updateData(id, data) {
    return this.httpClient.put(environment.apiUrl+"/employee/update/"+id,data);
  }
  deleteData(id) {
    return this.httpClient.delete(environment.apiUrl+"/employee/"+id);
  }
}
