import { IChannel } from "../states";

import {
  EntityAction,
  getActions,
  IActions,
  IEntityAction,
  ILoader
} from "../../entity";

import { namespace } from "../namespace";

export const actions: IActions = getActions(namespace);

export const loadActions: IEntityAction<IChannel> = new EntityAction<IChannel>(
  actions
);

export type IChannelLoadAction = ILoader<IChannel>;
