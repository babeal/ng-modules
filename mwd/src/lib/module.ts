import { NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";

import { SurveyModule } from "./survey/index";

export const routes: any = [
    { path: "survey", loadChildren: () => SurveyModule },
];

export const mwdModuleDefinition: NgModule = {
    declarations: [
    ],
    imports: [
        RouterModule.forChild(routes),
    ],
    providers: [
    ],
    entryComponents: []
};
