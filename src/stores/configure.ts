import { DeepPartial, Store } from "redux";
import { IStoreAction, IStoreState } from "./reducers";

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";

import { epic } from "./epics";
import { reducer } from "./reducers";

export function getDefaultState(): DeepPartial<IStoreState> {
  return {
    notification: { count: 0 },
    theme: { mode: "light" }
  };
}

export function configure(
  state: DeepPartial<IStoreState> = getDefaultState()
): Store<IStoreState, IStoreAction> {
  const epicMiddleware = createEpicMiddleware();

  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

  const store = createStore<IStoreState, IStoreAction, {}, {}>(
    reducer,
    state,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(epic as any);

  return store;
}
