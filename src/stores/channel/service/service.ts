import { Observable } from "rxjs";
import { IEntityState, IService } from "../../entity";
import { IChannel } from "../states";

export interface IChannelService extends IService {
  getChannels(): Observable<Array<IEntityState<IChannel>>>;
}
