import { createSelector, createFeatureSelector, MemoizedSelector, compose } from "@ngrx/store";
import { moduleName } from "../constants";

import * as SurveyStore from "./survey/index";

export interface MwdState {
    survey: SurveyStore.State;
}

export interface RootState {
    mwd: MwdState;
}

/**
 * Creates a selector that returns the root of the feature module.
 * @type {MemoizedSelector<Object, MwdState>}
 */
export const getMwdState: MemoizedSelector<object, MwdState> = createFeatureSelector<MwdState>(moduleName);

/**
 * Creates a selector for the survey part of the state.
 * @type {MemoizedSelector<Object, State>}
 */
export const getSurveyState: MemoizedSelector<MwdState, SurveyStore.State> = createSelector(
    getMwdState,
    (state: MwdState) => state.survey
);

export const getSurveys: MemoizedSelector<object, Array<SurveyStore.Survey>> = createSelector(
    getSurveyState,
    SurveyStore.getSurveys
);

export const getAreSurveysFetching: MemoizedSelector<object, boolean> = createSelector(
    compose(getSurveyState, getMwdState),
    SurveyStore.getFetching
);
