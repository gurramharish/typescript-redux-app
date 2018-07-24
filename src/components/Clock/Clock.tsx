import * as React from "react";
import { Component, ReactNode } from "react";

import Typography from "@material-ui/core/Typography";

export interface IClockProps {
  style?: React.CSSProperties;
  className?: string;
}

export interface IClockStates {
  time: string;
}

export default class Clock extends Component<IClockProps, IClockStates> {
  private static getTime(): string {
    return new Date().toLocaleString();
  }

  private timeout: number;

  constructor(props: IClockProps, context: {}) {
    super(props, context);
    this.state = { time: Clock.getTime() };
  }

  public componentDidMount() {
    this.timeout = (setInterval(() => {
      this.setState({
        time: Clock.getTime()
      });
    }, 1000) as any) as number;
  }

  public compinentWillUnmount() {
    clearInterval(this.timeout);
  }

  public render(): ReactNode {
    const { time } = this.state;
    return (
      <Typography variant="display3" color="inherit" noWrap={true}>
        {time}
      </Typography>
    );
  }
}
