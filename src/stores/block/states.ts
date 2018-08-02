export interface IBlock {
  channel: string;
  created: string;
  dataHash: string;
  hash: string;
  id: number;
  previousHash: string;
  transactions: string[];
}

export interface IBlockState {
  blocks: IBlock[];
  loading: boolean;
}