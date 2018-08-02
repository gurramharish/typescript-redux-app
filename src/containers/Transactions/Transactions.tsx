import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Transactions from "../../pages/Transactions";
import { ITransactionsActions, ITransactionsData } from "../../pages/Transactions";

import { IStoreAction, IStoreState } from "../../stores";

import { startLoadingTransactions, stopLoadingTransactions } from "../../stores";

export default connect(
  (state: IStoreState): ITransactionsData => ({
    loading: state.transaction.loading,
    transactions: state.transaction.transactions
  }),
  (dispatch: Dispatch<IStoreAction>): ITransactionsActions =>
    bindActionCreators<ITransactionsActions, any>(
      {
        startLoadingTransactions,
        stopLoadingTransactions
      } as ITransactionsActions,
      dispatch
    )
)(Transactions);
