import { injectable } from "inversify";

import { IEpic, IEpicConfig } from "../../entity";

import { incrementEpics } from "./increment";
import { resetEpics } from "./reset";

import { INotificationAction } from "../actions";

@injectable()
export default class EpicConfig
  implements IEpicConfig<INotificationAction, INotificationAction> {
  get epics(): Array<IEpic<INotificationAction, INotificationAction>> {
    return [...incrementEpics, ...resetEpics] as any;
  }
}
