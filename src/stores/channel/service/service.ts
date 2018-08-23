import { Observable } from "rxjs";
import { IEntityState, IService } from "../../common";
import { IChannel } from "../states";

export interface IChannelService extends IService {
  getChannels(): Observable<Array<IEntityState<IChannel>>>;
}
