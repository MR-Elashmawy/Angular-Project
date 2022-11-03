import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestoComponent} from './Components/admin/add-resto/add-resto.component';
import {ListRestoComponent} from './Components/admin/list-resto/list-resto.component';
import {UpdateRestoComponent} from './Components/admin/update-resto/update-resto.component';



const routes: Routes = [
  {
    component:AddRestoComponent,
    path:'add'
  },
  {
    component:ListRestoComponent,
    path:'list'
  },
  {
    component:UpdateRestoComponent,
    path:'update/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
