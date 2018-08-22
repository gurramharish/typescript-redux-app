import { injectable } from "inversify";

import { IEpic, IEpicConfig } from "../../entity";

import { loadEpics } from "./load";

import { IDashboardAction } from "../actions";

@injectable()
export default class EpicConfig
  implements IEpicConfig<IDashboardAction, IDashboardAction> {
  get epics(): Array<IEpic<IDashboardAction, IDashboardAction>> {
    return [...loadEpics] as any;
  }
}
