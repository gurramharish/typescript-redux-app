export interface IChannel {
  id: number;
  name: string;
  blocks: number;
  transactions: number;
  genesisHash: string;
  created: string;
  hash: string;
}

export interface IChannelState {
  channels: IChannel[];
  loading: boolean;
  error: string | null;
  loaded: boolean;
}