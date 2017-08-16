import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/index";

import { SurveysListComponent } from "./survey-list/survey-list.component";
import { EditSurveyComponent } from "./edit-survey/edit-survey.component";

export const routes: any = [
    { path: ":id", component: EditSurveyComponent },
    { path: "", component: SurveysListComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        EditSurveyComponent,
        SurveysListComponent
    ],
    exports: [
        EditSurveyComponent,
        SurveysListComponent
    ]
})
export class SurveyModule {

}
