import { incrementEpics } from "./actions/increment";
import { resetEpics } from "./actions/reset";

export const notificationEpics = [...incrementEpics, ...resetEpics];
