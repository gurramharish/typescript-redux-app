import { interfaces } from "inversify";

import { IEffect } from "../entity";
import Effect from "./Effect";

import { IChannelService, LocalService } from "./service";

export default function configure(container: interfaces.Container): void {
  container.bind<IEffect>("effect").to(Effect);
  container
    .bind<IChannelService>("service")
    .to(LocalService)
    .whenTargetNamed("channel");
}
