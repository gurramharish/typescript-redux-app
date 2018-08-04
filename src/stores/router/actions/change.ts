import { IAction } from "../../types";

import { namespace } from "../namespace";

export const LOCATION_CHANGED = `${namespace}/LOCATION_CHANGED`;

export type LocationChanged = typeof LOCATION_CHANGED;

export interface ILocationChanged extends IAction {
  type: LocationChanged;
  path: string;
}

export function locationChanged(path: string): ILocationChanged {
  return {
    path,
    type: LOCATION_CHANGED
  };
}
