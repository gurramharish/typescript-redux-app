import * as React from "react";
import { Component, ReactNode } from "react";

import { Store } from "redux";

import { History } from "history";

import { Provider } from "react-redux";

import { ConnectedRouter as Router } from "react-router-redux";

import Theme from "../../containers/Theme";

import Main from "../Main";

import { IStoreAction, IStoreState } from "../../../../stores";

// tslint:disable-next-line:no-empty-interface
export interface IAppProps {
  history: History;
  store: Store<IStoreState, IStoreAction>;
}

// tslint:disable-next-line:no-empty-interface
export interface IAppStates {}

export default class App extends Component<IAppProps, IAppStates> {
  constructor(props: IAppProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { history, store } = this.props;
    return (
      <Provider {...{ store }}>
        <Theme>
          <Router {...{ history }}>
            <Main />
          </Router>
        </Theme>
      </Provider>
    );
  }
}
