import { connect } from "react-redux";
import { Dispatch } from "redux";

import HeaderComponent from "../../components/Header";
import { IHeaderActions, IHeaderData } from "../../components/Header";

import { IStoreAction, IStoreState } from "../../stores";

import {
  addNotificationsAction,
  changeThemeAction,
  clearNotificationsAction
} from "../../stores";

export default connect(
  (state: IStoreState): IHeaderData => ({
    mode: state.theme.mode,
    notifications: state.notification.count
  }),
  (dispatch: Dispatch<IStoreAction>): IHeaderActions => ({
    addNotifications(notifications): void {
      dispatch(addNotificationsAction(notifications));
    },
    changeTheme(theme): void {
      dispatch(changeThemeAction(theme));
    },
    clearNotifications(): void {
      dispatch(clearNotificationsAction());
    }
  })
)(HeaderComponent);
