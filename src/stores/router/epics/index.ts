import { callEpics } from "./call";
import { changeEpics } from "./change";
import { pushEpics } from "./push";

export const routerEpics = [...pushEpics, ...callEpics, ...changeEpics];
