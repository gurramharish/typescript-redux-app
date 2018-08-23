import { epics, IEntityState, IEpic, ILoader, IStart } from "../../common";
import { listLoadActions } from "../actions/list";
import { ITransactionService } from "../services";
import { ITransaction } from "../states";

export function getListLoadEpics(
  service: ITransactionService
): Array<
  IEpic<
    ILoader<ITransaction, Array<IEntityState<ITransaction>>>,
    ILoader<ITransaction, Array<IEntityState<ITransaction>>>
  >
> {
  return epics<
    ITransaction,
    Array<IEntityState<ITransaction>>
  >(listLoadActions, (action: IStart<ITransaction>) =>
    service.getTransactions()
  );
}
