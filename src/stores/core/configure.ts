import { History } from "history";

import { DeepPartial, Store } from "redux";
import { applyMiddleware, createStore } from "redux";

import { combineEpics, createEpicMiddleware } from "redux-observable";

import { routerMiddleware as createRouterMiddleware } from "react-router-redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { Container } from "inversify";

import { configs } from "../configs";
import { reducer } from "./reducers";
import { IStoreAction, IStoreState } from "./states";

import { IEnvironment, IEpicConfig } from "../entity";

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
  const container = new Container();

  container
    .bind<IEnvironment>("environment")
    .toConstantValue({ mode: "development" });

  configs.forEach(config => config(container));

  const routerMiddleware = createRouterMiddleware(history);
  const epicMiddleware = createEpicMiddleware();
  const composeEnhancers = composeWithDevTools({});

  const store = createStore<IStoreState, IStoreAction, {}, {}>(
    reducer,
    state,
    composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware))
  );

  const epics = container.getAll<IEpicConfig>("epics");
  const epic = combineEpics(
    ...epics.reduce((eps, item) => [...eps, ...item.epics], [])
  );
  epicMiddleware.run(epic as any);

  return store;
}
