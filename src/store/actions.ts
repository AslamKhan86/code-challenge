import {
  SET_PART_PERCENT,
  SET_PARTS,
  SetPartPercentAction,
  SetPartsAction,
} from "./types";

export function setParts(parts: number[]): SetPartsAction {
  return {
    parts,
    type: SET_PARTS,
  };
}

export function setPartPercent(index: number, percent: number): SetPartPercentAction {
  return {
    index,
    percent,
    type: SET_PART_PERCENT,
  };
}
