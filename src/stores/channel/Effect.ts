import { inject, injectable, named } from "inversify";

import { IEffect, IEpic, ILoader } from "../entity";
import { IChannelService } from "./service";
import { IChannel } from "./states";

import { getListLoadEpics } from "./epics/list";

@injectable()
export default class Effort
  implements IEffect<ILoader<IChannel, any>, ILoader<IChannel, any>> {
  constructor(
    @inject("service")
    @named("channel")
    private service: IChannelService
  ) {}

  get epics(): Array<IEpic<ILoader<IChannel, any>, ILoader<IChannel, any>>> {
    const listLoadEpics = getListLoadEpics(this.service);
    return [...listLoadEpics];
  }
}
