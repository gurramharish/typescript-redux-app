export interface IChannel {
  name: string;
}

export interface IChannelState {
  channels: IChannel[];
  loading: boolean;
}