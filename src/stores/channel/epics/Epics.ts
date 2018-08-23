import { inject, injectable, named } from "inversify";

import { IEpic, IEpicConfig, ILoader } from "../../common";
import { IChannelService } from "../service";
import { IChannel } from "../states";

import { getListLoadEpics } from "./list";

@injectable()
export default class EpicConfig
  implements IEpicConfig<ILoader<IChannel, any>, ILoader<IChannel, any>> {
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
