import { NgModule } from "@angular/core";

import {UsersService} from "./users.service";

@NgModule({})
export class SubModule {
    constructor(service: UsersService) {
        console.log("submodule initialized");
    }
}
