import { inject, injectable, named } from "inversify";

import { IEpic, IEpicConfig, ILoader } from "../../entity";
import { IBlockService } from "../service";
import { IBlock } from "../states";

import { getItemLoadEpics } from "./item";
import { getListLoadEpics } from "./list";

@injectable()
export default class EpicConfig
  implements IEpicConfig<ILoader<IBlock, any>, ILoader<IBlock, any>> {
  constructor(
    @inject("service")
    @named("block")
    private service: IBlockService
  ) {}

  get epics(): Array<IEpic<ILoader<IBlock, any>, ILoader<IBlock, any>>> {
    const listLoadEpics = getListLoadEpics(this.service);
    const itemLoadEpics = getItemLoadEpics(this.service);
    return [...listLoadEpics, ...itemLoadEpics];
  }
}
