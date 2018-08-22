import { injectable } from "inversify";

import { IEpic, IEpics } from "../../entity";

import { incrementEpics } from "./increment";
import { resetEpics } from "./reset";

import { INotificationAction } from "../actions";

@injectable()
export default class Epics
  implements IEpics<INotificationAction, INotificationAction> {
  get epics(): Array<IEpic<INotificationAction, INotificationAction>> {
    return [...incrementEpics, ...resetEpics] as any;
  }
}
