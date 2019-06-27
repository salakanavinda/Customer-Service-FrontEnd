import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl ='http://localhost:8083/cus-cloud/customer';
  constructor(private http: HttpClient) { }

  getCustomer(id:number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,customer);
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
