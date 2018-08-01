import { callEpics } from "./actions/call";
import { changeEpics } from "./actions/change";
import { pushEpics } from "./actions/push";

export const routerEpics = [...pushEpics, ...callEpics, ...changeEpics];
