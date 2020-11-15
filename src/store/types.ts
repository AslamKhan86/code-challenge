export interface AppState {
  parts: number[];
  stepsCompleted: number;
}

export const SET_PARTS = "SET_PARTS";
export const SET_PART_PERCENT = "SET_PART_PERCENT";

export interface SetPartsAction {
  type: typeof SET_PARTS;
  parts: AppState["parts"];
}

export interface SetPartPercentAction {
  type: typeof SET_PART_PERCENT;
  index: number;
  percent: number;
}

export type AppActions = SetPartsAction | SetPartPercentAction;
