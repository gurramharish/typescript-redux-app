import { injectable } from "inversify";

import { IEpic, IEpics } from "../../entity";

import { loadEpics } from "./load";

import { IDashboardAction } from "../actions";

@injectable()
export default class Epics
  implements IEpics<IDashboardAction, IDashboardAction> {
  get epics(): Array<IEpic<IDashboardAction, IDashboardAction>> {
    return [...loadEpics] as any;
  }
}
