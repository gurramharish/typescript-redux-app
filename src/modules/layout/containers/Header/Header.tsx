import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Header from "../../components/Header";
import { IHeaderActions, IHeaderData } from "../../components/Header";

import { IStoreAction, IStoreState } from "../../../../stores";

import {
  changeTheme,
  startIncrementNotifications,
  startResetNotifications,
  stopIncrementNotifications,
  stopResetNotifications,
  toggleIncrementNotifications
} from "../../../../stores";

export default connect(
  (state: IStoreState): IHeaderData => ({
    incrementing: state.notification.incrementing,
    mode: state.theme.mode,
    notifications: state.notification.count,
    reseting: state.notification.reseting
  }),
  (dispatch: Dispatch<IStoreAction>): IHeaderActions =>
    bindActionCreators<IHeaderActions, any>(
      {
        changeTheme,
        startIncrementNotifications,
        startResetNotifications,
        stopIncrementNotifications,
        stopResetNotifications,
        toggleIncrementNotifications
      } as IHeaderActions,
      dispatch
    )
)(Header);
