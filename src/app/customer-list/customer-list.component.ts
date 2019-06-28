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

  customers:Observable<Customer>;

  constructor(private customerService : CustomerService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.customers=this.customerService.getCustomersList();
  }
  
  onSelect(customer : Customer):void {
    this.selectedCustomer = customer;
  }
}
