import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "./shared/main-layout/main-layout.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {CartComponent} from "./cart/cart.component";
import {ProductComponent} from "./product/product.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainPageComponent},
      {path: 'cart', component: CartComponent},
      {path: 'product/:id', component: ProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
