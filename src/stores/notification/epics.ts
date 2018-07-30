import { startStopIncrementEpic } from "./actions/increment";
import { startStopResetEpic } from "./actions/reset";

export const notificationEpics = [startStopIncrementEpic, startStopResetEpic];
