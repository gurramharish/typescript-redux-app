import { interfaces } from "inversify";

import { Injects, IReducerConfig } from "../common";
import ReducerConfig from "./reducers/Reducers";

export default function configure(container: interfaces.Container): void {
  container.bind<IReducerConfig>(Injects.Reducers).to(ReducerConfig);
}
