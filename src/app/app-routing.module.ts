import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';



const routes: Routes = [
  {path: "list",component: CustomerlistComponent},
  {path:"create" , component: CreatecustomerComponent},
  {path:"update/:id" , component: UpdatecustomerComponent},
  {path:'',redirectTo:'list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
