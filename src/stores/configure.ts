import { History } from "history";
import { Container } from "inversify";

import { routerMiddleware as createRouterMiddleware } from "react-router-redux";

import { DeepPartial, Reducer, Store } from "redux";
import { applyMiddleware, combineReducers, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { IEnvironment, IEpicConfig, IReducerConfig } from "./common";
import { configs, IStoreAction, IStoreState } from "./states";

export function getDefaultState(): DeepPartial<IStoreState> {
  return {
    notification: { count: 0 },
    router: { location: null },
    theme: { mode: "light" }
  };
}

export default function configure(
  history: History,
  state: DeepPartial<IStoreState> = getDefaultState(),
  env: IEnvironment = { mode: "development" }
): Store<IStoreState, IStoreAction> {
  const container = new Container();
  container.bind<IEnvironment>("environment").toConstantValue(env);
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
