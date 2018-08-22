import { interfaces } from "inversify";

import { IEffect } from "../entity";
import Effect from "./Effect";

import { IBlockService, LocalService } from "./service";

export default function configure(container: interfaces.Container): void {
  container.bind<IEffect>("effect").to(Effect);
  container
    .bind<IBlockService>("service")
    .to(LocalService)
    .whenTargetNamed("block");
}
