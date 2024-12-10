import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreFirstGuard } from './storeFirst.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    StoreModule,
    RouterModule.forRoot([
      {path: "store", component: StoreComponent},
      {path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard]},
      {path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},
      {
        path: "admin", 
        canActivate: [StoreFirstGuard],
        loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule),
      },
      {path: "**", redirectTo: "/store"}
    ]),
    BrowserAnimationsModule
  ],
  providers: [ StoreFirstGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
