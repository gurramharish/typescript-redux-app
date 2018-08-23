import { interfaces } from "inversify";

import { IEpicConfig, IReducerConfig } from "../common";
import EpicConfig from "./epics/Epics";
import ReducerConfig from "./reducers/Reducers";

import { IBlockService, LocalService } from "./service";

export default function configure(container: interfaces.Container): void {
  container.bind<IEpicConfig>("epics").to(EpicConfig);
  container.bind<IReducerConfig>("reducers").to(ReducerConfig);
  container
    .bind<IBlockService>("service")
    .to(LocalService)
    .whenTargetNamed("block");
}
