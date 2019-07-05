import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  //Initialize the base url of the related back end
  private baseUrl ='http://localhost:8083/cus-cloud/customer';
  constructor(private http: HttpClient) { 
  //here use the httpClient module for communuate to the back-end
  }
  
  //method of get specific customer using ID
  getCustomer(id:number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  //method of push customer to the back end 
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,customer);
  }
  //method of get customers from back end
  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
