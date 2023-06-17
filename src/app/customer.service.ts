import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseURL="http://localhost:8088/api/customer";

  constructor(private httpClient : HttpClient) { }

  getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }


  createCustomer(customer:Customer):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,customer);
  }

  deleteCustomer(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  updateCustomer(id:number, customer : Customer):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,customer);
  }

  getCustomerById(id: number): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}/${id}`);
  }

}
