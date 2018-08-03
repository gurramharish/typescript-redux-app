import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Dashboard from "../../pages/Dashboard";
import { IDashboardActions, IDashboardData } from "../../pages/Dashboard";

import { IStoreAction, IStoreState } from "../../stores";

import { startLoadingDashboard, stopLoadingDashboard } from "../../stores";

export default connect(
  (state: IStoreState): IDashboardData => ({
    blocks: state.block.blocks.length,
    chaincodes: 1,
    loading: state.dashboard.loading,
    nodes: 0,
    transactions: state.transaction.transactions.length
  }),
  (dispatch: Dispatch<IStoreAction>): IDashboardActions =>
    bindActionCreators<IDashboardActions, any>(
      {
        startLoadingDashboard,
        stopLoadingDashboard
      } as IDashboardActions,
      dispatch
    )
)(Dashboard);
