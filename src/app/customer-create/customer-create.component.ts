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
  submitted=false;//boolean variable
  //Inject the customer service into customer create componet class
  constructor(private customerService : CustomerService) { }

  ngOnInit() {
    //start the customer-create component 
  }
  newCustomer(){
    this.submitted=false;
    this.customer=new Customer();
  }
  save(){//method for push data to back end using http services
    this.customerService.createCustomer(this.customer).subscribe(data=>console.log(data),error=>console.log(error));
    this.customer=new Customer();//when saved customer initialize the customer as new customer by running newCustomer() method 
  }

  onSubmit(){
    this.submitted=true;
    this.save();//initialize the save method when click add button in Html template
  }

}
