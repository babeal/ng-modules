import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule, PreloadAllModules, PreloadingStrategy, Route } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DemoAppComponent } from "./demo-app.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
[
          { path: "mwd", loadChildren: "mwd/mwd.module#MwdModule", data: { featureId: "mwd", preload: true } },
          { path: "", redirectTo: "mwd", pathMatch: "full" }
       ],
{ preloadingStrategy: PreloadAllModules }),
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
