import { Observable } from "rxjs";
import { IEntityState, IService } from "../../entity";
import { IBlock } from "../states";

export interface IBlockService extends IService {
  getBlocks(): Observable<Array<IEntityState<IBlock>>>;
  getBlock(hash: string): Observable<IEntityState<IBlock>>;
}
