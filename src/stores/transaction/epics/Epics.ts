import { inject, injectable, named } from "inversify";

import { IEpic, IEpicConfig, ILoader, Injects } from "../../common";
import { ITransactionService, Services } from "../services";
import { ITransaction } from "../states";

import { getListLoadEpics } from "./list";

@injectable()
export default class EpicConfig
  implements
    IEpicConfig<ILoader<ITransaction, any>, ILoader<ITransaction, any>> {
  constructor(
    @inject(Injects.Service)
    @named(Services.Transaction)
    private service: ITransactionService
  ) {}

  get epics(): Array<
    IEpic<ILoader<ITransaction, any>, ILoader<ITransaction, any>>
  > {
    const listLoadEpics = getListLoadEpics(this.service);
    return [...listLoadEpics];
  }
}
