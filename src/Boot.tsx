import * as React from "react";
import { Component, ReactNode } from "react";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";

import { epic, IStoreAction, IStoreState, reducer } from "./stores";

import Theme from "./containers/Theme";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore<IStoreState, IStoreAction, {}, {}>(
  reducer,
  {
    notification: { count: 0 },
    theme: { mode: "light" }
  },
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);

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
