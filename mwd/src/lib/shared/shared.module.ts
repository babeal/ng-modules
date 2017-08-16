import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

/**
 * This module is for shared application modules that contain directives, pipes and components.
 * singleton services should not be registered here.  All modules should be reexported and reused in the
 * rest of the app.
 */
@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [

    ],
    exports: [
        RouterModule,
        CommonModule
    ]
})
export class SharedModule {

}
