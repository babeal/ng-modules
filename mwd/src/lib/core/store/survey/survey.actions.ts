import { Action } from "@ngrx/store";
import { Survey } from "./survey.model";

/* tslint:disable */

export const FETCH_SURVEYS = "[Mwd.Surveys] FETCH_SURVEYS";
export const FETCH_SURVEYS_SUCCESS = "[Mwd.Surveys] FETCH_SURVEYS_SUCCESS";
export const FETCH_SURVEYS_FAILURE = "[Mwd.Surveys] FETCH_SURVEYS_FAILURE";

export class FetchSurveysAction implements Action {
    readonly type = FETCH_SURVEYS;
}

export class FetchSurveysSuccessAction implements Action {
    readonly type = FETCH_SURVEYS_SUCCESS;

    public payload: Array<Survey>;

    constructor(surveys: Array<Survey>) {
        this.payload = surveys;
    }
}

export class FetchSurveysFailure implements Action {
    readonly type = FETCH_SURVEYS_FAILURE;

    public payload: any;

    constructor(error: any) {
        this.payload = error;
    }
}

export type Actions =
    FetchSurveysAction |
    FetchSurveysSuccessAction |
    FetchSurveysFailure;
