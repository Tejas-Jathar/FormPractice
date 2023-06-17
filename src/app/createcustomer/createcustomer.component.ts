import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder,private customerService : CustomerService) { }
  customerForm: FormGroup;

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      firstname: ['',[Validators.required,Validators.minLength(3)]],
      lastname: ['',Validators.required],
      mob: ['',Validators.required]
    });
  }


  saveCustomer() {

    const newCustomer: Customer = this.customerForm.value;

    this.customerService.createCustomer(newCustomer).subscribe(
      (data) => {
        console.log(data);
        this.goToCustomerList();
        
      })
  }
  
  goToCustomerList() {
    this.router.navigate(['/list']);
  }

  isFieldInvalid(fieldName: string) {
    return (
      this.customerForm.get(fieldName).invalid &&
      (this.customerForm.get(fieldName).touched || this.customerForm.get(fieldName).dirty)
    );
  }

}
