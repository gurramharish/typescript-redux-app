import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Blocks from "../../components/Blocks";
import { IBlocksActions, IBlocksData } from "../../components/Blocks";

import { IStoreAction, IStoreState } from "../../../../stores";

import { blockActions } from "../../../../stores/block";

export default connect(
  (state: IStoreState): IBlocksData => ({
    entities: state.block.entities,
    loading: state.block.loading
  }),
  (dispatch: Dispatch<IStoreAction>): IBlocksActions =>
    bindActionCreators<IBlocksActions, any>(
      {
        startLoadingBlocks: () => blockActions.start(),
        stopLoadingBlocks: () => blockActions.stop()
      } as IBlocksActions,
      dispatch
    )
)(Blocks);
