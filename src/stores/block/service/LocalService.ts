import { injectable } from "inversify";
import { Observable, timer } from "rxjs";
import { mapTo } from "rxjs/operators";
import { asLoaded, IEntityState } from "../../entity";
import { IBlock } from "../states";
import { IBlockService } from "./service";

import { blocks } from "./data";

@injectable()
export default class BlockService implements IBlockService {
  public getBlock(hash: string): Observable<IEntityState<IBlock>> {
    return timer(1000).pipe(
      mapTo(asLoaded(blocks.find(block => block.hash === hash)!))
    );
  }

  public getBlocks(): Observable<Array<IEntityState<IBlock>>> {
    return timer(1000).pipe(mapTo(blocks.map(block => asLoaded(block))));
  }
}
