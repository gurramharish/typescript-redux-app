// tslint:disable-next-line:no-empty-interface
export interface IEntity {}

// tslint:disable-next-line:no-empty-interface
export interface IState<E extends IEntity> {
  loading: boolean;
  error: string | null;
  loaded: boolean;
}

export interface IEntityState<E extends IEntity> extends IState<E> {
  entities: E[];
}
