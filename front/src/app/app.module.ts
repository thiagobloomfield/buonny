import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { ModalOrderManagementComponent } from './modal-order-management/modal-order-management.component';
import { OrdersComponent } from './orders/orders.component';
import { ModalConfirmationComponent } from './modal-confirmation/modal-confirmation.component';
import { ModalProductManagementComponent } from './modal-product-management/modal-product-management.component';
import { ModalCustomerManagementComponent } from './modal-customer-management/modal-customer-management.component';
import { CurtomersComponent } from './curtomers/curtomers.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CustomerTableComponent,
    OrderTableComponent,
    ModalOrderManagementComponent,
    OrdersComponent,
    ModalConfirmationComponent,
    ModalProductManagementComponent,
    ModalCustomerManagementComponent,
    CurtomersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
