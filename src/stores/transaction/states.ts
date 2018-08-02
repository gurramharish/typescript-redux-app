export interface ITransaction {
  name: string;
}

export interface ITransactionState {
  transactions: ITransaction[];
  loading: boolean;
}