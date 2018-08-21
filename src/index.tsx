import * as React from "react";
import { render } from "react-dom";

import "reflect-metadata";

import { configure, IThemeState } from "./stores";

import createHistory from "history/createBrowserHistory";

import App from "./modules/layout/components/App";

import registerServiceWorker from "./registerServiceWorker";

const history = createHistory();

const mode: "light" | "dark" =
  (localStorage.getItem("theme-mode") as any) || "dark";

const store = configure(history, {
  block: { entities: [] },
  channel: { entities: [] },
  notification: { count: 2 },
  theme: { mode },
  transaction: { entities: [] }
});

function main() {
  render(<App {...{ history, store }} />, document.getElementById(
    "root"
  ) as HTMLElement);

  store.subscribe(themeSideEffect());

  function themeSideEffect() {
    let theme: IThemeState;
    return () => {
      const state = store.getState();
      if (theme !== state.theme) {
        theme = state.theme;
        localStorage.setItem("theme-mode", theme.mode);
      }
    };
  }

  registerServiceWorker();
}

main();
