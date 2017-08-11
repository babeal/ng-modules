import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { E2EAppComponent } from "./e2e-app.component";
import { HomeComponent } from "./home.component";
import { E2E_APP_ROUTES } from "./e2e-app.routes";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(E2E_APP_ROUTES)
  ],
  declarations: [
    E2EAppComponent,
    HomeComponent
  ],
  bootstrap: [E2EAppComponent],
})
export class E2eAppModule { }
