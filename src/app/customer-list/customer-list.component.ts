import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer-service.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:Observable<Customer>;//variable for Observable customer from service
  selectedCustomer:Customer;//variable for selecting customer from UI
  constructor(private customerService : CustomerService) { }

  ngOnInit() {
    this.loadData();//load the all customers when initialize this component 
  }

  loadData(){//method of get customers from backend
    this.customers=this.customerService.getCustomersList();
  }
  
  onSelect(customer : Customer):void {//method,this bind with html template and here assing selected customer for pass to child component
    this.selectedCustomer = customer;
  }
}
