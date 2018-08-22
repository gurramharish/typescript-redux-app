import { injectable } from "inversify";
import { Observable, timer } from "rxjs";
import { mapTo } from "rxjs/operators";
import { asLoaded, IEntityState } from "../../entity";
import { ITransaction } from "../states";
import { ITransactionService } from "./service";

import { transactions } from "./data";

@injectable()
export default class TransactionService implements ITransactionService {
  public getTransactions(): Observable<Array<IEntityState<ITransaction>>> {
    return timer(1000).pipe(
      mapTo(transactions.map(transaction => asLoaded(transaction)))
    );
  }
}
