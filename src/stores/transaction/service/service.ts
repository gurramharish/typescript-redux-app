import { Observable } from "rxjs";
import { IEntityState, IService } from "../../entity";
import { ITransaction } from "../states";

export interface ITransactionService extends IService {
  getTransactions(): Observable<Array<IEntityState<ITransaction>>>;
}
