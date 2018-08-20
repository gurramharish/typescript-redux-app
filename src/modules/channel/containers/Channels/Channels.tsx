import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Channels from "../../components/Channels";
import { IChannelsActions, IChannelsData } from "../../components/Channels";

import { IStoreState } from "../../../../stores";

import { channelActions } from "../../../../stores/channel";

export default connect(
  (state: IStoreState): IChannelsData => ({
    channels: state.channel.entities,
    loaded: state.channel.loaded,
    loading: state.channel.loading
  }),
  (dispatch: Dispatch): IChannelsActions =>
    bindActionCreators<IChannelsActions, any>(
      {
        start: () => channelActions.start(),
        stop: () => channelActions.stop()
      } as IChannelsActions,
      dispatch
    )
)(Channels);
