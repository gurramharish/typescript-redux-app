import { injectable } from "inversify";
import { Observable, timer } from "rxjs";
import { mapTo } from "rxjs/operators";
import { asLoaded, IEntityState } from "../../common";
import { IChannel } from "../states";
import { IChannelService } from "./service";

import { channels } from "./data";

@injectable()
export default class ChannelService implements IChannelService {
  public getChannels(): Observable<Array<IEntityState<IChannel>>> {
    return timer(1000).pipe(mapTo(channels.map(channel => asLoaded(channel))));
  }
}
