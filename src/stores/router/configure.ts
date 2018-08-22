import { interfaces } from "inversify";

import { IEpicConfig, IReducerConfig } from "../entity";
import EpicConfig from "./epics/Epics";
import ReducerConfig from "./reducers/Reducers";

export default function configure(container: interfaces.Container): void {
  container.bind<IEpicConfig>("epics").to(EpicConfig);
  container.bind<IReducerConfig>("reducers").to(ReducerConfig);
}
