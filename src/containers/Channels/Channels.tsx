import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Channels from "../../pages/Channels";
import { IChannelsActions, IChannelsData } from "../../pages/Channels";

import { IStoreAction, IStoreState } from "../../stores";

import { startLoadingChannels, stopLoadingChannels } from "../../stores";

export default connect(
  (state: IStoreState): IChannelsData => ({
    channels: state.channel.channels,
    loading: state.channel.loading
  }),
  (dispatch: Dispatch<IStoreAction>): IChannelsActions =>
    bindActionCreators<IChannelsActions, any>(
      {
        startLoadingChannels,
        stopLoadingChannels
      } as IChannelsActions,
      dispatch
    )
)(Channels);
