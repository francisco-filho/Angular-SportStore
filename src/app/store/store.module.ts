import { NgModule } from "@angular/core";
import { StoreComponent } from "./store.component";
import { ModelModule } from "../model/model.module";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CartSummaryComponent } from "./cartSummary.component";
import { CheckoutComponent } from "./checkout.component";
import { CartDetailComponent } from "./cartDetail.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [ ModelModule, FormsModule, BrowserModule, RouterModule ],
    declarations: [
      StoreComponent,
      CartSummaryComponent,
      CheckoutComponent,
      CartDetailComponent,
    ],
    exports: [StoreComponent, CheckoutComponent, CartDetailComponent]
})
export class StoreModule {}
