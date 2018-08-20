import { IEntitiesState, IEntity } from "../entity";

export interface IChannel extends IEntity {
  id: number;
  name: string;
  blocks: number;
  transactions: number;
  genesisHash: string;
  created: string;
  hash: string;
}

export interface IChannelState extends IEntitiesState<IChannel> {
}