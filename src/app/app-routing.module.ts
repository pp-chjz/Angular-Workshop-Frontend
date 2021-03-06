import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';
import { StockEditComponent } from './stock/stock-edit/stock-edit.component';
import { StockHomeComponent } from './stock/stock-home/stock-home.component';

const routes: Routes = [ //กำหนด path
  {path: 'stock' , component: StockHomeComponent},
  {path: 'stock/create' , component: StockCreateComponent},
  {path: 'stock/edit' , component: StockEditComponent},

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
