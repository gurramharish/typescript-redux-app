import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import HeaderComponent from "../../components/Header";
import { IHeaderActions, IHeaderData } from "../../components/Header";

import { IStoreAction, IStoreState } from "../../stores";

import {
  changeTheme,
  startIncrementNotifications,
  startResetNotifications,
  stopIncrementNotifications,
  stopResetNotifications
} from "../../stores";

export default connect(
  (state: IStoreState): IHeaderData => ({
    mode: state.theme.mode,
    notifications: state.notification.count
  }),
  (dispatch: Dispatch<IStoreAction>): IHeaderActions =>
    bindActionCreators<IHeaderActions, any>({
      changeTheme,
      startIncrementNotifications,
      startResetNotifications,
      stopIncrementNotifications,
      stopResetNotifications
    } as IHeaderActions, dispatch)
)(HeaderComponent);
