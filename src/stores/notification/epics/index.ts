import { incrementEpics } from "./increment";
import { resetEpics } from "./reset";

export const notificationEpics = [...incrementEpics, ...resetEpics];
