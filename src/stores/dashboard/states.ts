// tslint:disable-next-line:no-empty-interface
import { IEntity, IState } from "../common";

// tslint:disable-next-line:no-empty-interface
export interface IDashboard extends IEntity {}

export interface IDashboardState extends IState<IDashboard> {}
