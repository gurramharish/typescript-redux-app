import { IAction } from "../types";
import { IEntity } from "./states";

export interface IStart<E extends IEntity> extends IAction<string> {}

export interface IStop<E extends IEntity> extends IAction<string> {}

export interface IDone<E extends IEntity> extends IAction<string> {
  entities: E[];
}

export interface IError<E extends IEntity> extends IAction<string> {
  error: string;
}

export type ILoader<E extends IEntity> =
  | IStart<E>
  | IStop<E>
  | IDone<E>
  | IError<E>;

export interface IActions {
  readonly DONE: string;
  readonly ERROR: string;
  readonly START: string;
  readonly STOP: string;
}

export interface IEntityAction<E extends IEntity> extends IActions {
  start(): IStart<E>;
  stop(): IStop<E>;
  error(error: string): IError<E>;
  done(entities: E[]): IDone<E>;
}

export function getActions(type: string): IActions {
  return {
    DONE: `${type}/DONE`,
    ERROR: `${type}/ERROR`,
    START: `${type}/START`,
    STOP: `${type}/STOP`
  };
}

export class EntityAction<E extends IEntity> implements IEntityAction<E> {
  constructor(private actions: IActions) {}

  get DONE(): string {
    return this.actions.DONE;
  }

  get ERROR(): string {
    return this.actions.ERROR;
  }

  get START(): string {
    return this.actions.START;
  }

  get STOP(): string {
    return this.actions.STOP;
  }

  public start(): IStart<E> {
    return { type: this.START };
  }

  public stop(): IStop<E> {
    return { type: this.STOP };
  }

  public error(error: string): IError<E> {
    return { error, type: this.ERROR };
  }

  public done(entities: E[]): IDone<E> {
    return { type: this.DONE, entities };
  }
}
