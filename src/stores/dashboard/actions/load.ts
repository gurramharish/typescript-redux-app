import { IDashboard } from "../states";

import {
  getActions,
  IActions,
  ILoadAction,
  ILoader,
  LoadAction
} from "../../entity";

import { namespace } from "../namespace";

export const actions: IActions = getActions(namespace);

export const loadActions: ILoadAction<IDashboard, IDashboard[]> = new LoadAction<IDashboard, IDashboard[]>(
  actions
);

export type IDashboardLoadAction = ILoader<IDashboard, IDashboard[]>;
