import * as React from "react";
import { Component, ReactNode } from "react";

import createHistory from "history/createBrowserHistory";

import { Provider } from "react-redux";

import { ConnectedRouter } from "react-router-redux";

import Theme from "../../containers/Theme";

import { configure } from "../../../../stores";

const history = createHistory();

const store = configure(history, {
  channel: {entities: []},
  notification: { count: 2 },
  theme: { mode: "dark" }
});

// tslint:disable-next-line:no-empty-interface
export interface IAppProps {}

// tslint:disable-next-line:no-empty-interface
export interface IAppStates {}

export default class App extends Component<IAppProps, IAppStates> {
  constructor(props: IAppProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    return (
      <Provider {...{ store }}>
        <ConnectedRouter {...{ history }}>
          <Theme />
        </ConnectedRouter>
      </Provider>
    );
  }
}
