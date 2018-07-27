import { connect } from "react-redux";
import { Dispatch } from "redux";

import HeaderComponent from "../../components/Header";
import { IHeaderActions, IHeaderData } from "../../components/Header";

import { IStoreAction, IStoreState } from "../../stores";

import {
  changeThemeAction,
  clearNotificationsAction,
  startNotificationsAction,
  stopNotificationsAction
} from "../../stores";

export default connect(
  (state: IStoreState): IHeaderData => ({
    mode: state.theme.mode,
    notifications: state.notification.count
  }),
  (dispatch: Dispatch<IStoreAction>): IHeaderActions => ({
    startNotifications(): void {
      dispatch(startNotificationsAction());
    },
    stopNotifications(): void {
      dispatch(stopNotificationsAction());
    },
    changeTheme(theme): void {
      dispatch(changeThemeAction(theme));
    },
    clearNotifications(): void {
      dispatch(clearNotificationsAction());
    }
  })
)(HeaderComponent);
