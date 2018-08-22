import { interfaces } from "inversify";

import { IEpics } from "../entity";
import Epics from "./epics/Epics";

export default function configure(container: interfaces.Container): void {
  container.bind<IEpics>("epics").to(Epics);
}
