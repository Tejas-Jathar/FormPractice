import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  customers : Customer[];
  error: string;
  constructor(private customerService : CustomerService, private router : Router) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(){
    this.customerService.getCustomerList().subscribe(data => {
       this.customers=data;
    });
  }
  // async getCustomer() {
  //   try {
  //     this.customers = await this.customerService.getCustomerList().toPromise();
  //   } catch (error) {
  //     this.error = 'Failed to retrieve customer data.';
  //     console.error(error);
  //   }
  // }

  // delclick(){
  //   this.router.navigate["/delete"];
  // }

  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe(data => {
     console.log(data);
      this.getCustomer();
    })
  }

  updateCustomer(id: number){
    this.router.navigate(['update',id]);
  }

}
