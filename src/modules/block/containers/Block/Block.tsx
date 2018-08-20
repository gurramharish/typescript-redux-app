import * as React from "react";

import { connect } from "react-redux";

import { IStoreState } from "../../../../stores";

import Block, { IBlockProps } from "../../components/Block";

import { RouteComponentProps } from "react-router";

export interface IRouterParams {
  id: string;
}

export interface IBlockRouteProps extends RouteComponentProps<IRouterParams> {
  style?: React.CSSProperties;
  className?: string;
}

export default connect(
  (state: IStoreState, props: IBlockRouteProps): IBlockProps => ({
    block: state.block.entities.filter(block => block.hash === props.match.params.id)[0]!
  })
)(Block);
