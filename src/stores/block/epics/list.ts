import { epics, IEntityState, IEpic, ILoader, IStart } from "../../common";
import { listLoadActions } from "../actions/list";
import { IBlockService } from "../service";
import { IBlock } from "../states";

export function getListLoadEpics(
  service: IBlockService
): Array<
  IEpic<
    ILoader<IBlock, Array<IEntityState<IBlock>>>,
    ILoader<IBlock, Array<IEntityState<IBlock>>>
  >
> {
  return epics<
    IBlock,
    Array<IEntityState<IBlock>>
  >(listLoadActions, (action: IStart<IBlock>) => service.getBlocks());
}
