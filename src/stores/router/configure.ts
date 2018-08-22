import { interfaces } from "inversify";

import { IEpicConfig } from "../entity";
import EpicConfig from "./epics/Epics";

export default function configure(container: interfaces.Container): void {
  container.bind<IEpicConfig>("epics").to(EpicConfig);
}
