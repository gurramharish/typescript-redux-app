import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Blocks from "../../components/Blocks";
import { IBlocksActions, IBlocksData } from "../../components/Blocks";

import { IStoreAction, IStoreState } from "../../../../stores";

import {
  startLoadingBlocks,
  stopLoadingBlocks
} from "../../../../stores/block";

export default connect(
  (state: IStoreState): IBlocksData => ({
    blocks: state.block.blocks,
    loading: state.block.loading
  }),
  (dispatch: Dispatch<IStoreAction>): IBlocksActions =>
    bindActionCreators<IBlocksActions, any>(
      {
        startLoadingBlocks,
        stopLoadingBlocks
      } as IBlocksActions,
      dispatch
    )
)(Blocks);
