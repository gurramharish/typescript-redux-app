import { IAction } from "../types";
import { IEntity } from "./states";

export interface IStart<E extends IEntity, O = {}>
  extends IAction<string> {
  options?: O;
}

export interface IStop<E extends IEntity> extends IAction<string> {}

export interface IDone<D> extends IAction<string> {
  data: D;
}

export interface IError<E extends IEntity> extends IAction<string> {
  error: string;
}

export type ILoader<E extends IEntity, D, O = {}> =
  | IStart<E, O>
  | IStop<E>
  | IDone<D>
  | IError<E>;

export interface IActions {
  readonly DONE: string;
  readonly ERROR: string;
  readonly START: string;
  readonly STOP: string;
}

export interface ILoadAction<E extends IEntity, D, O = {}>
  extends IActions {
  start(options?: O): IStart<E, O>;
  stop(): IStop<E>;
  error(error: string): IError<E>;
  done(data: D): IDone<D>;
}

export function getActions(type: string): IActions {
  return {
    DONE: `${type}/DONE`,
    ERROR: `${type}/ERROR`,
    START: `${type}/START`,
    STOP: `${type}/STOP`
  };
}

export class LoadAction<E extends IEntity, D, O = {}>
  implements ILoadAction<E, D, O> {
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

  public start(options?: O): IStart<E, O> {
    return { options, type: this.START };
  }

  public stop(): IStop<E> {
    return { type: this.STOP };
  }

  public error(error: string): IError<E> {
    return { error, type: this.ERROR };
  }

  public done(data: D): IDone<D> {
    return { type: this.DONE, data };
  }
}
