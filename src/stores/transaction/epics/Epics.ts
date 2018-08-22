import { inject, injectable, named } from "inversify";

import { IEpic, IEpics, ILoader } from "../../entity";
import { ITransactionService } from "../service";
import { ITransaction } from "../states";

import { getListLoadEpics } from "./list";

@injectable()
export default class Epics
  implements IEpics<ILoader<ITransaction, any>, ILoader<ITransaction, any>> {
  constructor(
    @inject("service")
    @named("transaction")
    private service: ITransactionService
  ) {}

  get epics(): Array<
    IEpic<ILoader<ITransaction, any>, ILoader<ITransaction, any>>
  > {
    const listLoadEpics = getListLoadEpics(this.service);
    return [...listLoadEpics];
  }
}
