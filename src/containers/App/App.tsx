import * as React from "react";
import { Component, ReactNode } from "react";

import { Provider } from "react-redux";

import Theme from "../Theme";

import { configure } from "../../stores";

const store = configure({
  notification: { count: 2 },
  theme: { mode: "dark" }
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
