import { IDashboard } from "../states";

import {
  EntityAction,
  getActions,
  IActions,
  IEntityAction,
  ILoader
} from "../../entity";

import { namespace } from "../namespace";

export const actions: IActions = getActions(namespace);

export const loadActions: IEntityAction<IDashboard> = new EntityAction<IDashboard>(
  actions
);

export type IDashboardLoadAction = ILoader<IDashboard>;
