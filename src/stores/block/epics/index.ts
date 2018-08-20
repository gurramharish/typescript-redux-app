import { itemLoadEpics } from "./item";
import { listLoadEpics } from "./list";

export const blockEpics = [...listLoadEpics, ...itemLoadEpics];
