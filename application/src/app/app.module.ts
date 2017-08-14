import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injectable } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, PreloadAllModules, PreloadingStrategy, Route } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

import { AppComponent } from "./app.component";

@Injectable()
export class PreloadSelectedModulesList implements PreloadingStrategy {
  public preload(route: Route, load: Function): Observable<any> {
    console.log("I am preloading this route: " + route.path);
    return (route.data.featureId === "users") ? Observable.of(undefined) : load();
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "books", loadChildren: "app/books/books.module#BooksModule", data: { featureId: "books"} },
      { path: "users", loadChildren: "app/users/users.module#UsersModule", data: { featureId: "users", preload: false }  },
      { path: "", redirectTo: "books", pathMatch: "full" }
    ], { preloadingStrategy: PreloadSelectedModulesList }),
  ],
  providers: [PreloadSelectedModulesList],
  bootstrap: [AppComponent]
})
export class AppModule { }
