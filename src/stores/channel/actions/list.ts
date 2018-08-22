import { IChannel } from "../states";

import {
  getActions,
  IActions,
  IEntityState,
  ILoadAction,
  ILoader,
  LoadAction
} from "../../entity";

import { namespace } from "../namespace";

export const actions: IActions = getActions(namespace);

export const listLoadActions: ILoadAction<IChannel, Array<IEntityState<IChannel>>> = new LoadAction<IChannel, Array<IEntityState<IChannel>>>(
  actions
);

export type IChannelLoadAction = ILoader<IChannel, Array<IEntityState<IChannel>>>;
