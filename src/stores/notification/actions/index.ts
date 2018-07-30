import { IAddNotifications } from "./add";
import { IClearNotifications } from "./clear";
import {
  IStartIncrementNotifications,
  IStopIncrementNotifications
} from "./increment";
import {
  IStartResetNotifications,
  IStopResetNotifications
} from "./reset";

export { addNotifications, IAddNotifications } from "./add";
export { clearNotifications, IClearNotifications } from "./clear";
export {
  IStartIncrementNotifications,
  IStopIncrementNotifications,
  startIncrementNotifications,
  stopIncrementNotifications
} from "./increment";
export {
  IStartResetNotifications,
  IStopResetNotifications,
  startResetNotifications,
  stopResetNotifications
} from "./reset";

export type INotificationAction =
  | IAddNotifications
  | IClearNotifications
  | IStartIncrementNotifications
  | IStopIncrementNotifications
  | IStartResetNotifications
  | IStopResetNotifications;
