import * as React from "react";
import { Component, ReactNode } from "react";

import Typography from "@material-ui/core/Typography";

import Dashboard from "../Dashboard";

export interface IContentProps {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IContentStates {}

export default class Content extends Component<IContentProps, IContentStates> {
  constructor(props: IContentProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    return (
      <div>
        <header>
          <Typography variant="display2" color="primary">
            Welcome to TypeScript React Content
          </Typography>
        </header>
        <Dashboard />
      </div>
    );
  }
}
