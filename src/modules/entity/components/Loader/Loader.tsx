import { Component, ReactNode } from "react";

export interface ILoaderData {
  loaded: boolean;
}

export interface ILoaderActions {
  start(): void;
  stop(): void;
}

export interface ILoaderProps extends ILoaderData, ILoaderActions {}

// tslint:disable-next-line:no-empty-interface
export interface ILoaderStates {}

export default abstract class Loader<
  P extends ILoaderProps,
  S extends ILoaderStates
> extends Component<P, S> {
  constructor(props: P, context: {}) {
    super(props, context);
  }

  public componentDidMount(): void {
    this.props.start();
  }

  public componentWillUnmount(): void {
    this.props.stop();
  }

  public abstract render(): ReactNode;
}
