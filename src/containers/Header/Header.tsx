import { connect } from "react-redux";
import { Dispatch } from "redux";

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
  (dispatch: Dispatch<IStoreAction>): IHeaderActions => ({
    startIncrementNotifications(count?: number): void {
      dispatch(startIncrementNotifications(count));
    },
    stopIncrementNotifications(): void {
      dispatch(stopIncrementNotifications());
    },
    startResetNotifications(): void {
      dispatch(startResetNotifications());
    },
    stopResetNotifications(): void {
      dispatch(stopResetNotifications());
    },
    changeTheme(theme): void {
      dispatch(changeTheme(theme));
    }
  })
)(HeaderComponent);
