import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';


//add routes arr 
const routes: Routes = [
  {path:'Customers',component:CustomerListComponent},
  {path:'InsertCustomer',component:CustomerCreateComponent},
  {path:'SearchCustomer',component: CustomerSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
