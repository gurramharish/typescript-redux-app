import { IAction } from "../../common/types";

import { namespace } from "../namespace";

export const PUSH_PATH = `${namespace}/path/push`;

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
