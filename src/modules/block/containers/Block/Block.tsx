import * as React from "react";
import { ReactElement } from "react";

import Block from "../../components/Block";

import { RouteComponentProps } from "react-router";

export interface IRouterParams {
  id: string;
}

export interface IBlockProps extends RouteComponentProps<IRouterParams> {
  style?: React.CSSProperties;
  className?: string;
}

export default function(props: IBlockProps): ReactElement<IBlockProps> {
  const { match } = props;
  return <Block id={match.params.id} />;
}
