import produce from "immer";
import { AppActions, AppState, SET_PART_PERCENT, SET_PARTS } from "./types";

const initialState: AppState = {
  parts: [],
  stepsCompleted: 0,
};

function getStepsCompleted(parts: number[]) {
  let stepsCompleted = 0;
  stepsCompleted += Number(parts.length > 0);
  stepsCompleted += Number(parts.reduce(
    (acc: number, x: number) => acc + x, 0,
  ) === 100);
  return stepsCompleted;
}

export default function(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case SET_PARTS:
      return {
        ...state,
        parts: action.parts,
        stepsCompleted: getStepsCompleted(action.parts),
      };
    case SET_PART_PERCENT:
      return produce(state, (draft) => {
        draft.parts[action.index] = action.percent;
        draft.stepsCompleted = getStepsCompleted(draft.parts);
      });
    default:
      return state;
  }
}
