import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer-service.service';
import { Customer } from '../customer';

@Component({
  selector: 'customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  
  customer: Customer=new Customer();
  submitted=false;
  constructor(private customerService : CustomerService) { }

  ngOnInit() {
  }
  newCustomer(){
    this.submitted=false;
    this.customer=new Customer();
  }
  save(){
    this.customerService.createCustomer(this.customer).subscribe(data=>console.log(data),error=>console.log(error));
    this.customer=new Customer();
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }

}
