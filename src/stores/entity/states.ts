// tslint:disable-next-line:no-empty-interface
export interface IEntity {}

export interface IEntityState<E extends IEntity> {
  entities: E[];
  loading: boolean;
  error: string | null;
  loaded: boolean;
}
