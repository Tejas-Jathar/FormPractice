import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
  id : number;
  customerForm: FormGroup;

  constructor(private router : Router, private customerService : CustomerService,
    private formBuilder: FormBuilder,private route : ActivatedRoute) { }


  
  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.customerForm = this.formBuilder.group({
      firstname: ['',[Validators.required,Validators.minLength(3)]],
      lastname: ['',Validators.required],
      mob: ['',Validators.required]
    });

    this.customerService.getCustomerById(this.id).subscribe(
      (data) => {
        this.customerForm.patchValue(data);
      },
      (error) => console.log(error)
    );

  }

  onSubmit() {

    const updatedCustomer: Customer = {
      id: this.id,
      ...this.customerForm.value
    };

    this.customerService.updateCustomer(this.id, updatedCustomer).subscribe(
      (data) => {
        this.goToCustomerList();
      },
      (error) => console.log(error)
    );
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
