import { interfaces } from "inversify";

import { IReducerConfig } from "../entity";
import ReducerConfig from "./reducers/Reducers";

export default function configure(container: interfaces.Container): void {
  container.bind<IReducerConfig>("reducers").to(ReducerConfig);
}
