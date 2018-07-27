import * as React from "react";
import { Component, ReactNode } from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { IStoreAction, IStoreState, reducer } from "./stores";

import Theme from "./containers/Theme";

const store = createStore<IStoreState, IStoreAction, {}, {}>(reducer, {
  notification: { count: 0 },
  theme: { mode: "light" }
});

// tslint:disable-next-line:no-empty-interface
export interface IBootProps {}

// tslint:disable-next-line:no-empty-interface
export interface IBootStates {}

export default class Boot extends Component<IBootProps, IBootStates> {
  constructor(props: IBootProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    return (
      <Provider {...{ store }}>
        <Theme />
      </Provider>
    );
  }
}
