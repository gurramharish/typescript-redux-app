import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { IStoreState } from "../../../../stores";

import Block from "../../components/Block";
import { IBlockActions, IBlockData } from "../../components/Block";

import { RouteComponentProps } from "react-router";

import { blockItemActions, IBlockOptions } from "../../../../stores/block";

export interface IRouterParams {
  hash: string;
}

export interface IBlockRouteProps extends RouteComponentProps<IRouterParams> {
  style?: React.CSSProperties;
  className?: string;
}

export default connect(
  (state: IStoreState, props: IBlockRouteProps): IBlockData => {
    const hash = props.match.params.hash;
    const filtered = state.block.entities.filter(
      entity => entity.entity.hash === hash
    );
    const block = filtered.length ? filtered[0].entity : undefined;
    return {
      block,
      loaded: !!block,
      options: { hash }
    };
  },
  (dispatch: Dispatch): IBlockActions =>
    bindActionCreators<IBlockActions, any>(
      {
        start: (options?: IBlockOptions) => blockItemActions.start(options),
        stop: () => blockItemActions.stop()
      } as IBlockActions,
      dispatch
    )
)(Block);
