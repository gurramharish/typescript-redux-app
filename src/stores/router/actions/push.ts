import { IAction } from "../../types";

import { namespace } from "../namespace";

export const PUSH_PATH = `${namespace}/PUSH_PATH`;

export type PushPath = typeof PUSH_PATH;

export interface IPushPath extends IAction {
  type: PushPath;
  path: string;
}

export function pushPath(path: string): IPushPath {
  return {
    path,
    type: PUSH_PATH
  };
}
