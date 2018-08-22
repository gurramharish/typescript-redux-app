import { inject, injectable, named } from "inversify";

import { IEffect, IEpic, ILoader } from "../entity";
import { IBlockService } from "./service";
import { IBlock } from "./states";

import { getItemLoadEpics } from "./epics/item";
import { getListLoadEpics } from "./epics/list";

@injectable()
export default class Effort
  implements IEffect<ILoader<IBlock, any>, ILoader<IBlock, any>> {
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
