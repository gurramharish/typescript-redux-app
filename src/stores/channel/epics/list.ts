import { epics, IEntityState, IEpic, ILoader, IStart } from "../../common";
import { listLoadActions } from "../actions/list";
import { IChannelService } from "../service";
import { IChannel } from "../states";

export function getListLoadEpics(
  service: IChannelService
): Array<
  IEpic<
    ILoader<IChannel, Array<IEntityState<IChannel>>>,
    ILoader<IChannel, Array<IEntityState<IChannel>>>
  >
> {
  return epics<
    IChannel,
    Array<IEntityState<IChannel>>
  >(listLoadActions, (action: IStart<IChannel>) => service.getChannels());
}
