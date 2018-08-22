import { History } from "history";

import { DeepPartial, Reducer, Store } from "redux";
import { applyMiddleware, combineReducers, createStore } from "redux";

import { combineEpics, createEpicMiddleware } from "redux-observable";

import { routerMiddleware as createRouterMiddleware } from "react-router-redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { Container } from "inversify";

import { configs } from "./configs";
// import { reducer } from "./reducers";
import { IStoreAction, IStoreState } from "./states";

import { IEnvironment, IEpicConfig, IReducerConfig } from "./entity";

export function getDefaultState(): DeepPartial<IStoreState> {
  return {
    notification: { count: 0 },
    router: { location: null },
    theme: { mode: "light" }
  };
}

export default function configure(
  history: History,
  state: DeepPartial<IStoreState> = getDefaultState()
): Store<IStoreState, IStoreAction> {
  const container = new Container();

  container
    .bind<IEnvironment>("environment")
    .toConstantValue({ mode: "development" });

  configs.forEach(config => config(container));

  const reducers = container.getAll<IReducerConfig>("reducers");

  const routerMiddleware = createRouterMiddleware(history);
  const epicMiddleware = createEpicMiddleware();
  const composeEnhancers = composeWithDevTools({});

  const reducer = (combineReducers(
    reducers.reduce((eps, item) => ({ ...eps, ...item.reducers }), {})
  ) as any) as Reducer<IStoreState, IStoreAction>;

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
