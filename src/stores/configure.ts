import { History } from "history";
import { Container } from "inversify";

import { routerMiddleware as createRouterMiddleware } from "react-router-redux";

import { DeepPartial, Reducer, Store } from "redux";
import { applyMiddleware, combineReducers, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { IEnvironment, IEpicConfig, Injects, IReducerConfig } from "./common";
import { IStoreAction, IStoreState } from "./states";
import { getConfigs, getDefaultState } from "./states";

export default function configure(
  history: History,
  state: DeepPartial<IStoreState> = getDefaultState(),
  env: IEnvironment = { mode: "development" }
): Store<IStoreState, IStoreAction> {
  const container = new Container();
  container.bind<IEnvironment>(Injects.Environment).toConstantValue(env);
  getConfigs().forEach(config => config(container));

  const reducers = container.getAll<IReducerConfig>(Injects.Reducers);
  const reducer = (combineReducers(
    reducers.reduce((eps, item) => ({ ...eps, ...item.reducers }), {})
  ) as any) as Reducer<IStoreState, IStoreAction>;

  const routerMiddleware = createRouterMiddleware(history);
  const epicMiddleware = createEpicMiddleware();
  const composeEnhancers = composeWithDevTools({});

  const store = createStore<IStoreState, IStoreAction, {}, {}>(
    reducer,
    state,
    composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware))
  );

  const epics = container.getAll<IEpicConfig>(Injects.Epics);
  const epic = combineEpics(
    ...epics.reduce((eps, item) => [...eps, ...item.epics], [])
  );
  epicMiddleware.run(epic as any);

  return store;
}
