import { History } from "history";

import { DeepPartial, Store } from "redux";
import { applyMiddleware, createStore } from "redux";

import { createEpicMiddleware } from "redux-observable";

import { routerMiddleware as createRouterMiddleware } from "react-router-redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { epic } from "./epics";
import { reducer } from "./reducers";
import { IStoreAction, IStoreState } from "./states";

export function getDefaultState(): DeepPartial<IStoreState> {
  return {
    notification: { count: 0 },
    router: { location: null },
    theme: { mode: "light" }
  };
}

export function configure(
  history: History,
  state: DeepPartial<IStoreState> = getDefaultState()
): Store<IStoreState, IStoreAction> {
  const routerMiddleware = createRouterMiddleware(history);
  const epicMiddleware = createEpicMiddleware();
  const composeEnhancers = composeWithDevTools({});

  const store = createStore<IStoreState, IStoreAction, {}, {}>(
    reducer,
    state,
    composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware))
  );

  epicMiddleware.run(epic as any);

  return store;
}
