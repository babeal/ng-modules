import * as SurveyActions from "./survey.actions";
import { Survey } from "./survey.model";

export interface State {
    surveys: Array<Survey>;
    fetching: boolean;
    error: any;
}

const initialState: State = {
    surveys: [],
    fetching: false,
    error: undefined
};

export function reducer(state: State = initialState, action: SurveyActions.Actions): State {
    switch (action.type) {
        case SurveyActions.FETCH_SURVEYS:
            return {
                surveys: [],
                fetching: true,
                error: undefined
            };
        case SurveyActions.FETCH_SURVEYS_SUCCESS:
            return {
                surveys: action.payload,
                fetching: false,
                error: undefined
            };
        case SurveyActions.FETCH_SURVEYS_FAILURE:
            return {
                surveys: undefined,
                fetching: false,
                error: action.payload,
            };

        default:
            return state;
    }
}
