import { interfaces } from "inversify";

import { IEpicConfig, Injects, IReducerConfig } from "../common";
import EpicConfig from "./epics/Epics";
import ReducerConfig from "./reducers/Reducers";

import { IChannelService, LocalService, Services } from "./services";

export default function configure(container: interfaces.Container): void {
  container.bind<IEpicConfig>(Injects.Epics).to(EpicConfig);
  container.bind<IReducerConfig>(Injects.Reducers).to(ReducerConfig);
  container
    .bind<IChannelService>(Injects.Service)
    .to(LocalService)
    .whenTargetNamed(Services.Channel);
}
