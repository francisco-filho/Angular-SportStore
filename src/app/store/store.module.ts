import { NgModule } from "@angular/core";
import { StoreComponent } from "./store.component";
import { ModelModule } from "../model/model.module";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [ ModelModule, FormsModule, BrowserModule ],
    declarations: [StoreComponent],
    exports: [StoreComponent]
})
export class StoreModule {}