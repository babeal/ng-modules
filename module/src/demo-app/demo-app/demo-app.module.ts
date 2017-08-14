import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DemoAppComponent } from "./demo-app.component";
import { BooksModule } from "@slb-planck-ui/module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BooksModule,
    RouterModule.forRoot([])
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
