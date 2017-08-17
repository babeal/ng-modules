import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Effect, Actions } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/toArray";
import "rxjs/add/observable/timer";
import "rxjs/add/observable/of";

import * as SurveyActions from "./survey.actions";
import { Survey } from "./survey.model";

@Injectable()
export class SurveyEffects {

    @Effect()
    public loadSurveys$: Observable<Action>;

    constructor(actions$: Actions) {
        this.loadSurveys$ = actions$
            .ofType(SurveyActions.FETCH_SURVEYS)
            .switchMap(() =>
                Observable.timer(1000).map(_ => {
                    return <Array<Survey>>[
                        {
                            number: 1,
                            md: 50,
                            tvd: 48
                        },
                        {
                            number: 2,
                            md: 100,
                            tvd: 89
                        },
                        {
                            number: 3,
                            md: 140,
                            tvd: 120
                        }
                    ];
                })
                .map((surveys: Array<Survey>) => new SurveyActions.FetchSurveysSuccessAction(surveys))
                .catch((error: any) => Observable.of(new SurveyActions.FetchSurveysFailure(error)))
            );
    }
}
