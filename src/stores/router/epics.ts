import { callHistoryEpic } from "./actions/call";
import { locationChangeEpic } from "./actions/change";
import { pushPathEpic } from "./actions/push";

export const routerEpics = [pushPathEpic, callHistoryEpic, locationChangeEpic];
