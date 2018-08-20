// tslint:disable-next-line:no-empty-interface
export interface IEntity {}

// tslint:disable-next-line:no-empty-interface
export interface IState<E extends IEntity> {
  loading: boolean;
  error: string | null;
  loaded: boolean;
}

export interface IEntityState<E extends IEntity> extends IState<E> {
  entity: E;
}

export interface IEntityListState<E extends IEntity> extends IState<E> {
  entities: Array<IEntityState<E>>;
}

export function asLoaded<E extends IEntity>(entity: E): IEntityState<E> {
  return {
    entity,
    error: null,
    loaded: true,
    loading: false
  };
}
