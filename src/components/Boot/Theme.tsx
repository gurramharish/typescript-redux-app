import * as React from "react";
import { Component, ReactNode } from "react";

import { create } from "jss";
import preset from "jss-preset-default";
import JssProvider from "react-jss/lib/JssProvider";

import { connect } from "react-redux";

import createGenerateClassName from "@material-ui/core/styles/createGenerateClassName";

// Create a JSS instance with the default preset of plugins.
// It's optional.

const jss = create(preset());

const generateClassName = createGenerateClassName();

import Frame from "./Frame";

import { IStoreState } from "../../store";

export interface IThemeProps {
  theme: "dark" | "light";
}

// tslint:disable-next-line:no-empty-interface
export interface IThemeStates {}

export class Theme extends Component<IThemeProps, IThemeStates> {
  constructor(props: IThemeProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { theme } = this.props;
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <Frame {...{ theme }} />
      </JssProvider>
    );
  }
}

export default connect(
  (state: IStoreState): IThemeProps => ({ theme: state.theme })
)(Theme);
