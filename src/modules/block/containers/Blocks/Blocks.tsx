import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Blocks from "../../components/Blocks";
import { IBlocksActions, IBlocksData } from "../../components/Blocks";

import { IStoreState } from "../../../../stores";

import { blockItemActions, blockListActions } from "../../../../stores/block";

export default connect(
  (state: IStoreState): IBlocksData => ({
    entities: state.block.entities.map(block => block.entity),
    loaded: state.block.loaded,
    loading: state.block.loading
  }),
  (dispatch: Dispatch): IBlocksActions =>
    bindActionCreators<IBlocksActions, any>(
      {
        fancy: () => blockItemActions.start(),
        start: () => blockListActions.start(),
        stop: () => blockListActions.stop()
      } as IBlocksActions,
      dispatch
    )
)(Blocks);
