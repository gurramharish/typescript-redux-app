import { IChannel } from "../states";

import {
  getActions,
  IActions,
  ILoadAction,
  ILoader,
  LoadAction
} from "../../entity";

import { namespace } from "../namespace";

export const actions: IActions = getActions(namespace);

export const loadActions: ILoadAction<IChannel, IChannel[]> = new LoadAction<IChannel, IChannel[]>(
  actions
);

export type IChannelLoadAction = ILoader<IChannel, IChannel[]>;
