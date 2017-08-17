import { NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";

import { SurveyModule } from "./survey/index";
import { SignalTroubleshootingComponent } from "./signal-troubleshooting/index";

export const routes: any = [
    { path: "survey", loadChildren: () => SurveyModule },
    { path: "signal-troubleshooting", component: SignalTroubleshootingComponent }
];

export const mwdModuleDefinition: NgModule = {
    declarations: [
        SignalTroubleshootingComponent
    ],
    imports: [
        RouterModule.forChild(routes),
    ],
    providers: [
    ],
    entryComponents: [
    ]
};
