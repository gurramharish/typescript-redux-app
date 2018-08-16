import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Dashboard from "../../components/Dashboard";
import { IDashboardActions, IDashboardData } from "../../components/Dashboard";

import { IStoreAction, IStoreState } from "../../../../stores";

import { dashboardActions } from "../../../../stores/dashboard";

export default connect(
  (state: IStoreState): IDashboardData => ({
    blocks: state.block.entities.length,
    chaincodes: 1,
    loaded: state.dashboard.loaded,
    loading: state.dashboard.loading,
    nodes: 0,
    transactions: state.transaction.entities.length
  }),
  (dispatch: Dispatch<IStoreAction>): IDashboardActions =>
    bindActionCreators<IDashboardActions, any>(
      {
        start: () => dashboardActions.start(),
        stop: () => dashboardActions.stop()
      } as IDashboardActions,
      dispatch
    )
)(Dashboard);
