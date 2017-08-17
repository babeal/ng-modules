import { State } from "./survey.reducers";
import { Survey } from "./survey.model";

export const getFetching: (state: State) => boolean = (state: State) => state.fetching;

export const getSurveys: (state: State) => Array<Survey> = (state: State) => state.surveys;

export const getError: (state: State) => any = (state: State) => state.error;
