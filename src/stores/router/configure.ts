import { interfaces } from "inversify";

import { IEpicConfig, Injects, IReducerConfig } from "../common";
import EpicConfig from "./epics/Epics";
import ReducerConfig from "./reducers/Reducers";

export default function configure(container: interfaces.Container): void {
  container.bind<IEpicConfig>(Injects.Epics).to(EpicConfig);
  container.bind<IReducerConfig>(Injects.Reducers).to(ReducerConfig);
}
