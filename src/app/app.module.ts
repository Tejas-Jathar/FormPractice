import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    CreatecustomerComponent,
    UpdatecustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
