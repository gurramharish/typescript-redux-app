import { interfaces } from "inversify";

import { IEpics } from "../entity";
import Epics from "./epics/Epics";

import { IChannelService, LocalService } from "./service";

export default function configure(container: interfaces.Container): void {
  container.bind<IEpics>("epics").to(Epics);
  container
    .bind<IChannelService>("service")
    .to(LocalService)
    .whenTargetNamed("channel");
}
