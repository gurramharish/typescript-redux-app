import {
  startStopIncrementEpic,
  toggleStartIncrementEpic,
  toggleStopIncrementEpic
} from "./actions/increment";
import { startStopResetEpic } from "./actions/reset";

export const notificationEpics = [
  startStopIncrementEpic,
  startStopResetEpic,
  toggleStartIncrementEpic,
  toggleStopIncrementEpic
];
