import { IAction } from "../entity/types";
import { IEntity } from "./states";

export interface IStart<E extends IEntity, O = {}> extends IAction<string> {
  options?: O;
}

export interface IStop<E extends IEntity, O = {}> extends IAction<string> {
  options?: O;
}

export interface IDone<D, O = {}> extends IAction<string> {
  data: D;
  options?: O;
}

export interface IError<E extends IEntity, O = {}> extends IAction<string> {
  error: string;
  options?: O;
}

export type ILoader<E extends IEntity, D, O = {}> =
  | IStart<E, O>
  | IStop<E, O>
  | IDone<D, O>
  | IError<E, O>;

export interface IActions {
  readonly DONE: string;
  readonly ERROR: string;
  readonly START: string;
  readonly STOP: string;
}

export interface ILoadAction<E extends IEntity, D, O = {}> extends IActions {
  start(options?: O): IStart<E, O>;
  stop(options?: O): IStop<E, O>;
  error(error: string, options?: O): IError<E, O>;
  done(data: D, options?: O): IDone<D, O>;
}

export function getActions(type: string): IActions {
  return {
    DONE: `${type}/done`,
    ERROR: `${type}/error`,
    START: `${type}/start`,
    STOP: `${type}/stop`
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

  public stop(options?: O): IStop<E, O> {
    return { options, type: this.STOP };
  }

  public error(error: string, options?: O): IError<E, O> {
    return { error, options, type: this.ERROR };
  }

  public done(data: D, options?: O): IDone<D, O> {
    return { data, options, type: this.DONE };
  }
}
