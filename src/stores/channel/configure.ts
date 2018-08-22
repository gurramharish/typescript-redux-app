import { interfaces } from "inversify";

import { IEpicConfig } from "../entity";
import EpicConfig from "./epics/Epics";

import { IChannelService, LocalService } from "./service";

export default function configure(container: interfaces.Container): void {
  container.bind<IEpicConfig>("epics").to(EpicConfig);
  container
    .bind<IChannelService>("service")
    .to(LocalService)
    .whenTargetNamed("channel");
}