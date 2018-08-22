import { interfaces } from "inversify";

import { IEpics } from "../entity";
import Epics from "./epics/Epics";

import { ITransactionService, LocalService } from "./service";

export default function configure(container: interfaces.Container): void {
  container.bind<IEpics>("epics").to(Epics);
  container
    .bind<ITransactionService>("service")
    .to(LocalService)
    .whenTargetNamed("transaction");
}
