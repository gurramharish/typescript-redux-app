import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Dashboard from "../../components/Dashboard";
import { IDashboardActions, IDashboardData } from "../../components/Dashboard";

import { IStoreAction, IStoreState } from "../../../../stores";

import {
  startLoadingDashboard,
  stopLoadingDashboard
} from "../../../../stores/dashboard";

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
