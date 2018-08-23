import { injectable } from "inversify";

import { IEpic, IEpicConfig } from "../../common";

import { callEpics } from "./call";
import { changeEpics } from "./change";
import { pushEpics } from "./push";

import { IRouterAction } from "../actions";

@injectable()
export default class EpicConfig implements IEpicConfig<IRouterAction, IRouterAction> {
  get epics(): Array<IEpic<IRouterAction, IRouterAction>> {
    return [...pushEpics, ...callEpics, ...changeEpics] as any;
  }
}
