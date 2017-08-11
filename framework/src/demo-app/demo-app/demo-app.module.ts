import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { DemoAppComponent } from "./demo-app.component";
// import {Your Module} from "framework";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    DemoAppComponent
  ],
  bootstrap: [
    DemoAppComponent
  ],
})
export class DemoAppModule {
}
