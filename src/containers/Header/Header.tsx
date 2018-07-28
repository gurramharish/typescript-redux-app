import { connect } from "react-redux";
import { Dispatch } from "redux";

import HeaderComponent from "../../components/Header";
import { IHeaderActions, IHeaderData } from "../../components/Header";

import { IStoreAction, IStoreState } from "../../stores";

import {
  changeThemeAction,
  clearNotificationsAction,
  startAddNotificationsAction,
  startResetNotificationsAction,
  stopAddNotificationsAction,
  stopResetNotificationsAction
} from "../../stores";

export default connect(
  (state: IStoreState): IHeaderData => ({
    mode: state.theme.mode,
    notifications: state.notification.count
  }),
  (dispatch: Dispatch<IStoreAction>): IHeaderActions => ({
    startAddNotifications(count?: number): void {
      dispatch(startAddNotificationsAction(count));
    },
    stopAddNotifications(): void {
      dispatch(stopAddNotificationsAction());
    },
    startResetNotifications(): void {
      dispatch(startResetNotificationsAction());
    },
    stopResetNotifications(): void {
      dispatch(stopResetNotificationsAction());
    },
    changeTheme(theme): void {
      dispatch(changeThemeAction(theme));
    },
    clearNotifications(): void {
      dispatch(clearNotificationsAction());
    }
  })
)(HeaderComponent);
