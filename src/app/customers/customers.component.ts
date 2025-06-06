import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerService} from "../services/customer.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {Customer} from "../model/customer.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers! : Observable<Array<Customer>>;
  errorMessage! : string ;
  searchFormGroup : FormGroup | undefined;
  constructor(private custmomerService: CustomerService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchCustomers();
  }

  handleSearchCustomers() {
      let kw=this.searchFormGroup?.value.keyword;
    this.customers=this.custmomerService.searchCustomers(kw).pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  handleDeleteCustomers(c: Customer) {
    let conf = confirm("Are you sure?")
    if(!conf) return;
      this.custmomerService.deleteCustomer(c.id).subscribe({
        next : () =>{
         this.customers=this.customers.pipe(
           map(data=>{
             let index=data.indexOf(c);
             data.slice(index,1)
             return data;
           })
         )
    },
        error : err=>{
          console.log(err);
        }
      });
  }
}
