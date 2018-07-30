import { IAddNotifications } from "./add";
import { IClearNotifications } from "./clear";
import { IIncrementNotifications } from "./increment";
import { IResetNotifications } from "./reset";

export { addNotifications, IAddNotifications } from "./add";
export { clearNotifications, IClearNotifications } from "./clear";
export {
  IIncrementNotifications,
  startIncrementNotifications,
  stopIncrementNotifications,
  toggleIncrementNotifications
} from "./increment";
export {
  IResetNotifications,
  startResetNotifications,
  stopResetNotifications
} from "./reset";

export type INotificationAction =
  | IAddNotifications
  | IClearNotifications
  | IIncrementNotifications
  | IResetNotifications;
