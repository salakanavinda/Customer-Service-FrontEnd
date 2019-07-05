import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  //customers:Observable<Customer>;
  @Input() customer;//this customer input from customer list parent component by using @Input decorator
  constructor() { }

  ngOnInit() {
  }

}
