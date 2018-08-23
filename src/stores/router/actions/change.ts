import { IAction } from "../../common/types";

import { namespace } from "../namespace";

export const LOCATION_CHANGE = `${namespace}/location/change`;

export type LocationChange = typeof LOCATION_CHANGE;

export interface ILocationChange extends IAction {
  type: LocationChange;
  path: string;
}

export function locationChange(path: string): ILocationChange {
  return {
    path,
    type: LOCATION_CHANGE
  };
}
