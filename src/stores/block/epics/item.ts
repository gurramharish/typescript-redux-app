import { epics, IEntityState, IEpic, ILoader, IStart } from "../../entity";
import { itemLoadActions } from "../actions/item";
import { IBlockService } from "../service";
import { IBlock, IBlockOptions } from "../states";

export function getItemLoadEpics(
  service: IBlockService
): Array<
  IEpic<
    ILoader<IBlock, IEntityState<IBlock>>,
    ILoader<IBlock, IEntityState<IBlock>>
  >
> {
  return epics<
    IBlock,
    IEntityState<IBlock>,
    IBlockOptions
  >(itemLoadActions, (action: IStart<IBlock, IBlockOptions>) =>
    service.getBlock(action.options!.hash)
  );
}
