import { IEntity, IEntityListState } from "../common";

export interface IReadSetVersion {
  block: string;
  transaction: string;
}

export interface IReadSetItem {
  key: string;
  version: IReadSetVersion;
}

export interface IReadSet {
  chaincode: string;
  set: IReadSetItem[];
}

export interface IWriteSetItem {
  key: string;
  deleted: boolean;
  value: string;
}

export interface IWriteSet {
  chaincode: string;
  set: IWriteSetItem[];
}

export interface ITransaction extends IEntity {
  chaincode: string;
  channel: string;
  created: string;
  creator: string;
  endorser: string;
  hash: string;
  payloadHash: string;
  readSets: IReadSet[];
  type: string;
  validationCode: string;
  writeSets: IWriteSet[];
}

export interface ITransactionState extends IEntityListState<ITransaction> {
}
