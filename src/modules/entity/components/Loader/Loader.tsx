import { Component, ReactNode } from "react";

export interface ILoaderData<O = {}> {
  loaded: boolean;
  options?: O;
}

export interface ILoaderActions<O = {}> {
  start(options?: O): void;
  stop(options?: O): void;
}

export interface ILoaderProps<O = {}> extends ILoaderData, ILoaderActions<O> {}

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
    if (!this.props.loaded) {
      this.props.start(this.props.options);
    }
  }

  public componentWillUnmount(): void {
    if (!this.props.loaded) {
      this.props.stop(this.props.options);
    }
  }

  public abstract render(): ReactNode;
}
