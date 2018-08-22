import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Transactions from "../../components/Transactions";
import {
  ITransactionsActions,
  ITransactionsData
} from "../../components/Transactions";

import { IStoreState } from "../../../../stores";

import { transactionListActions } from "../../../../stores/transaction";

export default connect(
  (state: IStoreState): ITransactionsData => ({
    loaded: state.transaction.loaded,
    loading: state.transaction.loading,
    transactions: state.transaction.entities.map(
      transaction => transaction.entity
    )
  }),
  (dispatch: Dispatch): ITransactionsActions =>
    bindActionCreators<ITransactionsActions, any>(
      {
        start: () => transactionListActions.start(),
        stop: () => transactionListActions.stop()
      } as ITransactionsActions,
      dispatch
    )
)(Transactions);
